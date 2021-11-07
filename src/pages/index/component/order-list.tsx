import { View } from '@remax/wechat';
import { Card } from 'annar';
import * as React from 'react';
import styles from './order-list.module.scss';

/**
 * 订单加载
 * @returns
 */
const OrderList = () => {
  return (
    <Card title="title" description="Here is the description">
      <View className={styles.row}>Card content</View>
      <View className={styles.row}>Card content</View>
      <View className={styles.row}>Card content</View>
    </Card>
  );
};

export default OrderList;
