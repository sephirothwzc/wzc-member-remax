import * as React from 'react';
import { Button, View } from 'remax/wechat';
import styles from './index.module.scss';
import { Loading, Popup, Button as Abutton } from 'annar';
import { useWxLogin } from '@/utils/wx-login';

type PhoneDetail = {
  encryptedData: string;
  errMsg: string;
  iv: string;
};

export default () => {
  const [show, setShow] = React.useState(false);

  const data = useWxLogin();

  /**
   * 获取手机号回掉
   * @param param0
   */
  const getPhoneNumber = ({ detail }: { detail: PhoneDetail }) => {};

  // if (data.loading) {
  //   return (
  //     <View className={styles.main}>
  //       <Loading type="wave" />
  //     </View>
  //   );
  // }

  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Abutton onTap={() => setShow(true)}>Click here</Abutton>
        <Popup
          open={show}
          onClose={() => {
            setShow(false);
          }}
        >
          <View
            style={{
              padding: '80px',
            }}
          >
            Hi, boy~
          </View>
        </Popup>
      </View>
      <View>
        <Button openType="getPhoneNumber" onGetPhoneNumber={getPhoneNumber}>
          获取手机号
        </Button>
      </View>
    </View>
  );
};
