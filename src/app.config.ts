import { AppConfig } from 'remax/wechat';

const config: AppConfig = {
  pages: [
    'pages/index/index',
    'pages/app-order/index',
    'pages/app-order/main-item',
  ],
  window: {
    navigationBarTitleText: '美格造型',
    navigationBarBackgroundColor: '#282c34',
  },
};

export default config;
