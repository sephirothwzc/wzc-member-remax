import { createStore, combineReducers } from 'redux';
import loginReducer from './reducer/login';

export const rootReducer = combineReducers({
  login: loginReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
