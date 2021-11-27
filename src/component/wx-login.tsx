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

const WxLogin = () => {
  const data = useWxLogin();
  const dispatch = useDispatch();
  const ling = React.useRef<any>();

  const [showPhonePopup, setShowPhonePopup] = useImmer(false);
  const [showNickNamePopup, setShowNickNamePopup] = useImmer(false);

  const [appUserInfoSave] = useAppUserInfoMutation();

  React.useEffect(() => {
    !data.loading && setShowPhonePopup((draft) => !data.appUser?.phone);
    !data.loading && setShowNickNamePopup((draft) => !data.appUser?.nickName);
  }, [data, setShowPhonePopup, setShowNickNamePopup]);

  /**
   * 获取电话号码
   */
  const { refetch: phoneRefetch } = useWxDataDecodedQuery({ skip: true });

  /**
   * 获取手机号回掉
   * @param param0
   */
  const getPhoneNumber = ({ detail }: { detail: PhoneDetail }) => {
    phoneRefetch({
      iv: detail.iv,
      cloudID: detail?.cloudID,
      encryptedData: detail.encryptedData,
      openid: data?.appUser?.openid,
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
      success: (res) => {
        console.log(res);
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
    </View>
  );
};

export default WxLogin;
