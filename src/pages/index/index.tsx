import * as React from 'react';
import { useRef } from 'react';
import { View, navigateTo, Navigator } from 'remax/wechat';
import { Grid, Icon, Ling, Swiper } from 'annar';
import styles from './index.module.scss';
import Frame from '@/component/frame';
import OrderList from './component/order-list';

export type NavIconData = {
  iconType: string;
  color?: string;
  size?: string;
  url?: string;
  text?: string;
};

const navIconData: Array<NavIconData> = [
  {
    iconType: 'favorfill',
    color: '#FF6666',
    url: '/pages/app-order/index',
    text: '我要充值',
  },
  {
    iconType: 'likefill',
    color: '#FFCC33',
    url: '/pages/app-order/main-item',
    text: '会员充值',
  },
  {
    iconType: 'comment',
    text: '我要留言',
  },
];

const renderGridItem = (col: NavIconData, index?: number) => (
  <View className={styles.demoGridItem}>
    <Navigator url={col.url}>
      <Icon type={col.iconType} size="72px" color={col.color}></Icon>
      <View>{col.text}</View>
    </Navigator>
  </View>
);

export default () => {
  const ling = useRef<any>();

  const baseItemStyle = {
    backgroundColor: '#CCCCFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '36px',
  };

  return (
    <Frame padding grayBg>
      <Ling ref={ling} />
      <Swiper autoplay>
        <Swiper.Item style={baseItemStyle}>1</Swiper.Item>
        <Swiper.Item style={baseItemStyle}>2</Swiper.Item>
        <Swiper.Item style={baseItemStyle}>3</Swiper.Item>
        <Swiper.Item style={baseItemStyle}>4</Swiper.Item>
      </Swiper>
      <View className={styles.gridIcon}>
        <Grid data={navIconData} columns={3} gutter={16}>
          {renderGridItem}
        </Grid>
      </View>
      <View className={styles.tableList}>
        <OrderList></OrderList>
      </View>
    </Frame>
  );
};
