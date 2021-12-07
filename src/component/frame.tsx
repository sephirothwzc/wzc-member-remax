import { View } from '@remax/wechat';
import * as React from 'react';
import { forwardRef, useRef } from 'react';
import classNames from 'classnames';
import styles from './frame.module.scss';
import WxLogin from '@/component/wx-login';
import { Ling } from 'annar';

export interface BlockProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  grayBg?: boolean;
  lightBg?: boolean;
  padding?: boolean;
  style?: React.CSSProperties;
}

const Frame = (props: BlockProps,cRef:) => {
  const {
    title,
    children,
    className = '',
    grayBg,
    lightBg,
    padding,
    style,
  } = props;

  const ling = useRef<any>();

  // #region 只执行一次的 获取用户录音授权
  // useEffect(() => {
  // getSetting({
  //   success(res) {
  //     if (!res.authSetting['scope.record']) {
  //       authorize({
  //         scope: 'scope.record',
  //         success() {
  //           // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
  //           startRecord();
  //         },
  //       });
  //     }
  //   },
  // });
  // }, []);
  // #endregion

  let backgroundColor = '#FDFFFD';
  if (grayBg) {
    backgroundColor = '#F2F2F2';
  }
  if (lightBg) {
    backgroundColor = '#F7F7F7';
  }

  return (
    <View
      className={classNames({
        [styles.app]: true,
        [className]: true,
        [styles.padding]: padding,
      })}
      style={{
        ...style,
        backgroundColor,
      }}
    >
      <Ling ref={ling} />
      {title ? <View className={styles.title}>{title}</View> : null}
      <View className={styles.content}>{children}</View>
      <WxLogin></WxLogin>
    </View>
  );
};
export default forwardRef(Frame);
