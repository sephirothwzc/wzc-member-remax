import { useLoginQuery } from '@/generator/foundation.operation';
import * as React from 'react';
import { Button, View } from 'remax/wechat';
import styles from './index.module.scss';
import { Loading } from 'annar';
import { useWxLogin } from '@/utils/wx-login';
import { useImmer } from 'use-immer';

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
  const getPhoneNumber = ({ detail }: { detail: PhoneDetail }) => {};

  if (data.loading) {
    return (
      <View className={styles.main}>
        <Loading type="wave" />
      </View>
    );
  }

  return (
    <View>
      <Button openType="getPhoneNumber" onGetPhoneNumber={getPhoneNumber}>
        获取手机号
      </Button>
    </View>
  );
};
