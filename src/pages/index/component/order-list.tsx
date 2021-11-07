import { useAppOrderAllQuery } from '@/generator/foundation.operation';
import { RootState } from '@/redux/store';
import { View } from '@remax/wechat';
import { Card, Loading } from 'annar';
import * as React from 'react';
import { useSelector } from 'react-redux';
import styles from './order-list.module.scss';

/**
 * 订单加载
 * @returns
 */
const OrderList = () => {
  const appUser = useSelector((state: RootState) => state?.login?.appUser);

  const { data, loading, refetch } = useAppOrderAllQuery({
    variables: {
      param: {
        where: {
          appUserId: appUser?.id,
        },
        limit: 10,
        offset: 0,
      },
    },
    skip: !appUser?.token,
  });

  if (loading) {
    <View className={styles.loading}>
      <Loading type="wave" />
    </View>;
  }
  return (
    <>
      {data?.appOrderAll.map((p) => {
        return (
          <Card title="title" description="Here is the description">
            <View className={styles.row}>Card content</View>
            <View className={styles.row}>Card content</View>
            <View className={styles.row}>Card content</View>
          </Card>
        );
      })}
    </>
  );
};

export default OrderList;
