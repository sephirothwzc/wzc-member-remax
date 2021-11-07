import { useWxDataDecodedQuery } from '@/generator/foundation.operation';
import loginActions, { LOGIN_ACTION } from '@/redux/action/login';
import { useWxLogin } from '@/utils/wx-login';
import { Button, Loading, Popup } from 'annar';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'remax/wechat';
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
  React.useEffect(() => {
    !data.loading && setShowPhonePopup((draft) => !data.appUser?.phone);
  }, [data, setShowPhonePopup]);

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
            ...result.data.wxDataDecoded,
          })
        );
      })
      .catch((error) => {
        ling.current.error(error);
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
    </View>
  );
};

export default WxLogin;
