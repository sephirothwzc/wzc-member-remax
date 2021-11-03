import * as React from 'react';
import { View } from 'remax/wechat';
import styles from './index.module.scss';
import { Loading, Button } from 'annar';
import { useWxLogin } from '@/utils/wx-login';

type PhoneDetail = {
  encryptedData: string;
  errMsg: string;
  iv: string;
};

export default () => {
  const data = useWxLogin();

  /**
   * 获取手机号回掉
   * @param param0
   */
  const getPhoneNumber = ({ detail }: { detail: PhoneDetail }) => {
    console.log(detail);
  };

  if (data.loading) {
    return (
      <View className={styles.main}>
        <Loading type="wave" />
      </View>
    );
  }

  return (
    <View className={styles.app}>
      <View className={styles.header}></View>
      <View>
        <Button openType="getPhoneNumber" onGetPhoneNumber={getPhoneNumber}>
          获取手机号
        </Button>
      </View>
    </View>
  );
};
