import { LOGIN_ACTION } from '../action/login';
import { Action, handleActions as createReducers } from 'redux-actions';
import { produce } from 'immer';
import { Maybe } from 'graphql/jsutils/Maybe';
import { IAppUser } from '@/utils/wx-login';

const defaultState = {
  appUser: undefined as Maybe<IAppUser>,
};

export default createReducers(
  {
    [LOGIN_ACTION.LOGIN]: produce(
      (draft: typeof defaultState, { payload }: Action<Maybe<IAppUser>>) => {
        draft.appUser = payload;
      }
    ),
    // 异常处理
    [LOGIN_ACTION.LOGOUT]: {
      next(state: typeof defaultState) {
        return produce((draft: typeof defaultState) => {
          draft.appUser = undefined;
        })(state);
      },
      throw(state: typeof defaultState) {
        return state;
      },
    },
  },
  defaultState
);
