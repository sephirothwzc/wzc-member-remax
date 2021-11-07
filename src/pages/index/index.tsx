import * as React from 'react';
import { useRef } from 'react';
import { View } from 'remax/wechat';
import styles from './index.module.scss';
import { Ling, Swiper } from 'annar';
import Frame from '@/component/frame';

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
    </Frame>
  );
};
