import * as SchemaTypes from './foundation';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const LoginUserFragmentDoc = gql`
  fragment LoginUser on AuthGql {
    id
    token
  }
`;
export const CodeToSessionGqlFragmentDoc = gql`
  fragment CodeToSessionGql on CodeToSessionGql {
    openid
    unionid
    sessionKey
    id
    token
  }
`;
export const LoginDocument = gql`
  query login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ...LoginUser
    }
  }
  ${LoginUserFragmentDoc}
`;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginQuery(
  baseOptions: Apollo.QueryHookOptions<
    SchemaTypes.LoginQuery,
    SchemaTypes.LoginQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SchemaTypes.LoginQuery,
    SchemaTypes.LoginQueryVariables
  >(LoginDocument, options);
}
export function useLoginLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SchemaTypes.LoginQuery,
    SchemaTypes.LoginQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SchemaTypes.LoginQuery,
    SchemaTypes.LoginQueryVariables
  >(LoginDocument, options);
}
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<
  SchemaTypes.LoginQuery,
  SchemaTypes.LoginQueryVariables
>;
export const CodeToSessionDocument = gql`
  query codeToSession($code: String!) {
    codeToSession(code: $code) {
      ...CodeToSessionGql
    }
  }
  ${CodeToSessionGqlFragmentDoc}
`;

/**
 * __useCodeToSessionQuery__
 *
 * To run a query within a React component, call `useCodeToSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodeToSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodeToSessionQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCodeToSessionQuery(
  baseOptions: Apollo.QueryHookOptions<
    SchemaTypes.CodeToSessionQuery,
    SchemaTypes.CodeToSessionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SchemaTypes.CodeToSessionQuery,
    SchemaTypes.CodeToSessionQueryVariables
  >(CodeToSessionDocument, options);
}
export function useCodeToSessionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SchemaTypes.CodeToSessionQuery,
    SchemaTypes.CodeToSessionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SchemaTypes.CodeToSessionQuery,
    SchemaTypes.CodeToSessionQueryVariables
  >(CodeToSessionDocument, options);
}
export type CodeToSessionQueryHookResult = ReturnType<
  typeof useCodeToSessionQuery
>;
export type CodeToSessionLazyQueryHookResult = ReturnType<
  typeof useCodeToSessionLazyQuery
>;
export type CodeToSessionQueryResult = Apollo.QueryResult<
  SchemaTypes.CodeToSessionQuery,
  SchemaTypes.CodeToSessionQueryVariables
>;
