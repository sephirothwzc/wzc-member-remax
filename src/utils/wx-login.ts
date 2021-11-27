import { useCodeToSessionQuery } from '@/generator/foundation.operation';
import loginActions, { LOGIN_ACTION } from '@/redux/action/login';
import { RootState } from '@/redux/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { useDispatch, useSelector } from 'react-redux';
import { login, showToast } from 'remax/wechat';
import { useImmer } from 'use-immer';

export type IAppUser = {
  id: string;
  token: string;
  phone?: string;
  /**
   * realname
   */
  username?: string;
  /**
   * nickname
   */
  nickname?: string;
  openid: string;
  /**
   * sessionKey
   */
  sessionKey?: string;
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
  const [loginCount, setLoginCount] = useImmer(0);
  const [data, setData] = useImmer<{
    appUser: Maybe<IAppUser>;
    loading: boolean;
  }>({
    appUser,
    loading: false,
  });

  const handleLogin = () => {
    login()
      .then((res) => {
        // api
        codeToSessionGql
          .refetch({
            code: res.code,
          })
          .then((result) => {
            const data = result.data;
            // 根据openid 登陆
            dispatch(loginActions[LOGIN_ACTION.LOGIN](data.codeToSession));

            setData((draft) => ({
              appUser: data.codeToSession,
              loading: false,
            }));
          })
          .catch((error) => {
            showToast({
              title: error.message,
              icon: 'error',
            });
          });
      })
      .finally(() => {
        setLoginCount((draft) => draft++);
      });
  };

  // login 用户存在则不更新登陆
  if (!appUser && !data.loading && loginCount < 3) {
    setData((draft) => ({ appUser, loading: true }));
    handleLogin();
  }

  return data;
};
