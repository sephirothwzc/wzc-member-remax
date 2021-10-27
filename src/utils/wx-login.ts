import { useCodeToSessionQuery } from '@/generator/foundation.operation';
import loginActions, { LOGIN_ACTION } from '@/redux/action/login';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { checkSession, login, showToast } from 'remax/wechat';
import { useImmer } from 'use-immer';

export type IAppUser = {
  id: string;
  token: string;
  phone: string;
  userName: string;
};

/**
 * wx.checksession wx.login
 */
export const useWxLogin = () => {
  const appUser = useSelector((state: RootState) => state?.login?.appUser);
  const dispatch = useDispatch();
  const codeToSessionGql = useCodeToSessionQuery({
    skip: true,
  });
  const [loading, setLoading] = useImmer(true);
  const [data, setData] = useImmer(appUser);
  checkSession({
    success(res) {
      console.log(res);
      console.log('session success!');
    },
    async fail() {
      // login
      const res = await login();
      // api
      codeToSessionGql
        .refetch({
          code: res.code,
        })
        .then(({ data }) => {
          // 根据openid 登陆
          dispatch(loginActions[LOGIN_ACTION.LOGIN](data.codeToSession));
          setLoading((draft) => false);
          setData((draft) => data.codeToSession);
        })
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
