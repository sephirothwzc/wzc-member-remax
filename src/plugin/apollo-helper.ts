import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
  ApolloLink,
  Observable,
} from '@apollo/client';
import { get } from 'lodash';
import store from '@/redux/store';
import { request as wxRequest } from 'remax/wechat';

const errorLogLink = onError(({ graphQLErrors, networkError }) => {
  graphQLErrors &&
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });

  if (networkError) {
    const statusCode = get(networkError, 'statusCode');
    if (statusCode === 403) {
      window.location.href = '/login';
    }
    const message = get(networkError, 'result.message', get(networkError, 'bodyText'));
    console.log(`[Network error]: ${message}`);
  }
});

const httpLink = createHttpLink({
  uri: `${process.env.REMAX_APP_BASE_URL}${process.env.REMAX_APP_GRAPHQL}`,
  fetch: async (uri, options) => {
    return wxRequest({
      url: uri.toString(),
      data: options?.body,
      header: options?.headers,
      method: options?.method as any,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
  },
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = store.getState()?.login?.appUser?.token;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      token,
      'app-name': process.env.REACT_APP_APP_NAME,
    },
  };
});

const requestLink = authLink.concat(httpLink);

const client = new ApolloClient({
  link: from([errorLogLink, requestLink]),
  cache: new InMemoryCache(),
});

export default client;
