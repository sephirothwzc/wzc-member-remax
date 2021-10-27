import { useLoginQuery } from '@/generator/foundation.operation';
import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import styles from './index.module.scss';
import { Loading } from 'annar';
import { useWxLogin } from '@/utils/wx-login';

export default () => {
  const { data, loading } = useWxLogin();

  if (loading) {
    return (
      <View className={styles.main}>
        <Loading type="wave" />
      </View>
    );
  }

  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text>{' '}
          开始
          {data}
        </View>
      </View>
    </View>
  );
};
