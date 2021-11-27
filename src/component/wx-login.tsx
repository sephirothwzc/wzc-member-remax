import {
  useAppUserInfoMutation,
  useWxDataDecodedQuery,
} from '@/generator/foundation.operation';
import loginActions, { LOGIN_ACTION } from '@/redux/action/login';
import { useWxLogin } from '@/utils/wx-login';
import { Button, Loading, Popup } from 'annar';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { View, getUserProfile } from 'remax/wechat';
import { useImmer } from 'use-immer';
import styles from './wx-login.module.scss';

type PhoneDetail = {
  encryptedData: string;
  errMsg: string;
  iv: string;
  cloudID?: string;
};

type UserInfoDetail = {
  encryptedData: string;
  errMsg: string; // "getUserProfile:ok"
  iv: string;
  rawData: string; // json
  signature: string;
  userInfo: {
    avatarUrl: string; // 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIw6RYicXecjzucjC1OC2NUUVcvf9lk4vzomhAXl3KP1iaN8H1icZChr22Np9EwI7lLpq8gUhEeyn3Fg/132';
    city: string;
    country: string;
    gender: number; // 0
    language: string; // 'zh_CN';
    nickName: string; // 'Bobo';
    province: string;
  };
};

const displayGender = (value: number): string => {
  if (value === 1) {
    return '男';
  } else if (value === 0) {
    return '女';
  }
  return '未知';
};

const WxLogin = () => {
  const data = useWxLogin();
  const dispatch = useDispatch();
  const ling = React.useRef<any>();

  const [showPhonePopup, setShowPhonePopup] = useImmer(false);
  const [showNickNamePopup, setShowNickNamePopup] = useImmer(false);

  const [appUserInfoMutation] = useAppUserInfoMutation();
  React.useEffect(() => {
    !data.loading && setShowNickNamePopup((draft) => !data.appUser?.nickname);
    !data.loading && setShowPhonePopup((draft) => !data.appUser?.phone);
  }, [data, setShowPhonePopup, setShowNickNamePopup]);

  /**
   * 获取电话号码
   */
  const { refetch: phoneRefetch } = useWxDataDecodedQuery({ skip: true });

  /**
   * 获取手机号回掉
   * @param param0
   */
  const getPhoneNumber = async ({ detail }: { detail: PhoneDetail }) => {
    phoneRefetch({
      iv: detail.iv,
      cloudID: detail?.cloudID,
      encryptedData: detail.encryptedData,
      openid: data?.appUser?.openid,
      sessionKey: data.appUser?.sessionKey,
    })
      .then((result) => {
        dispatch(
          loginActions[LOGIN_ACTION.LOGIN]({
            ...data.appUser,
            phone: result.data.wxDataDecoded?.purePhoneNumber,
            token: result.data.wxDataDecoded?.token,
          })
        );
        setShowPhonePopup((draft) => false);
      })
      .catch((error) => {
        ling.current.error(error);
      });
  };

  /**
   * 获取用户信息
   * @param param0
   */
  const tipUserProfile = () => {
    getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res: UserInfoDetail) => {
        if (res.errMsg !== 'getUserProfile:ok') {
          ling.current.error(res.errMsg);
        }
        appUserInfoMutation({
          variables: {
            param: {
              id: data?.appUser?.id,
              nickname: res.userInfo.nickName,
              gender: displayGender(res.userInfo.gender),
              hdaderImg: res.userInfo.avatarUrl,
            },
          },
        })
          .then((res) => {
            setShowNickNamePopup((draft) => false);
          })
          .catch((error) => {
            ling.current.error(error);
          });
      },
    });
  };

  if (data.loading) {
    return (
      <View className={styles.main}>
        <Loading type="wave" />
      </View>
    );
  }

  return (
    <View>
      <Popup
        position="top"
        title="请您授权"
        open={showNickNamePopup}
        onClose={() => {
          setShowNickNamePopup((draft) => false);
        }}
      >
        <View
          style={{
            height: '300px',
            padding: '0 24px',
          }}
        >
          <Button openType="getUserProfile" onTap={tipUserProfile}>
            完善会员资料
          </Button>
        </View>
      </Popup>
      <Popup
        position="top"
        title="请您授权"
        open={showPhonePopup}
        onClose={() => {
          setShowPhonePopup((draft) => false);
        }}
      >
        <View
          style={{
            height: '300px',
            padding: '0 24px',
          }}
        >
          <Button openType="getPhoneNumber" onGetPhoneNumber={getPhoneNumber}>
            获取手机号
          </Button>
        </View>
      </Popup>
    </View>
  );
};

export default WxLogin;
