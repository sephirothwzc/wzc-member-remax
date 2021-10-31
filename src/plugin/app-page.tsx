import React, { FC, ReactElement } from 'react';
import store from '@/redux/store';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import client from './apollo-helper';

interface AppProp {
  children: ReactElement;
}
const AppPage: FC<AppProp> = ({ children }) => {
  return (
    <Provider store={store}>
      1<ApolloProvider client={client}>{children}</ApolloProvider>
    </Provider>
  );
};

export default AppPage;
