import { useCodeToSessionQuery } from '@/generator/foundation.operation';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { checkSession, login, showToast } from 'remax/wechat';
import { useImmer } from 'use-immer';

/**
 * wx.checksession wx.login
 */
const useWxLogin = () => {
  const appUser = useSelector((state: RootState) => state?.login?.appUser);
  const codeToSessionGql = useCodeToSessionQuery({
    skip: true,
  });
  const [loading, setLoading] = useImmer(true);
  const [data, SetData] = useImmer(appUser);
  checkSession({
    success() {},
    async fail() {
      // login
      const res = await login();
      // api
      codeToSessionGql
        .refetch({
          code: res.code,
        })
        .then((result) => {})
        .catch((error) => {
          showToast({
            title: error.message,
            icon: 'error',
          });
        });
    },
  });

  return { data, loading };
};
