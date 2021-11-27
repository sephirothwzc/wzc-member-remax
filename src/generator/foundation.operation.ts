import * as SchemaTypes from './foundation';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const AppOrderFragmentDoc = gql`
  fragment AppOrder on AppOrder {
    orderAmount
    otherId
    remark
    status
    title
    details
    createdAt
  }
`;
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
    phone
    id
    token
    nickname
  }
`;
export const AppOrderAllDocument = gql`
  query appOrderAll($param: QueryListParam) {
    appOrderAll(param: $param) {
      ...AppOrder
    }
  }
  ${AppOrderFragmentDoc}
`;

/**
 * __useAppOrderAllQuery__
 *
 * To run a query within a React component, call `useAppOrderAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppOrderAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppOrderAllQuery({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useAppOrderAllQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SchemaTypes.AppOrderAllQuery,
    SchemaTypes.AppOrderAllQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SchemaTypes.AppOrderAllQuery,
    SchemaTypes.AppOrderAllQueryVariables
  >(AppOrderAllDocument, options);
}
export function useAppOrderAllLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SchemaTypes.AppOrderAllQuery,
    SchemaTypes.AppOrderAllQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SchemaTypes.AppOrderAllQuery,
    SchemaTypes.AppOrderAllQueryVariables
  >(AppOrderAllDocument, options);
}
export type AppOrderAllQueryHookResult = ReturnType<typeof useAppOrderAllQuery>;
export type AppOrderAllLazyQueryHookResult = ReturnType<
  typeof useAppOrderAllLazyQuery
>;
export type AppOrderAllQueryResult = Apollo.QueryResult<
  SchemaTypes.AppOrderAllQuery,
  SchemaTypes.AppOrderAllQueryVariables
>;
export const AppUserInfoDocument = gql`
  mutation appUserInfo($param: AppUserSaveIn!) {
    appUser(param: $param) {
      id
    }
  }
`;
export type AppUserInfoMutationFn = Apollo.MutationFunction<
  SchemaTypes.AppUserInfoMutation,
  SchemaTypes.AppUserInfoMutationVariables
>;

/**
 * __useAppUserInfoMutation__
 *
 * To run a mutation, you first call `useAppUserInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAppUserInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [appUserInfoMutation, { data, loading, error }] = useAppUserInfoMutation({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useAppUserInfoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.AppUserInfoMutation,
    SchemaTypes.AppUserInfoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.AppUserInfoMutation,
    SchemaTypes.AppUserInfoMutationVariables
  >(AppUserInfoDocument, options);
}
export type AppUserInfoMutationHookResult = ReturnType<
  typeof useAppUserInfoMutation
>;
export type AppUserInfoMutationResult =
  Apollo.MutationResult<SchemaTypes.AppUserInfoMutation>;
export type AppUserInfoMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.AppUserInfoMutation,
  SchemaTypes.AppUserInfoMutationVariables
>;
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
export const WxDataDecodedDocument = gql`
  query wxDataDecoded(
    $cloudID: String
    $iv: String
    $encryptedData: String
    $sessionKey: String
    $openid: String
  ) {
    wxDataDecoded(
      cloudID: $cloudID
      iv: $iv
      encryptedData: $encryptedData
      sessionKey: $sessionKey
      openid: $openid
    ) {
      purePhoneNumber
      token
      id
    }
  }
`;

/**
 * __useWxDataDecodedQuery__
 *
 * To run a query within a React component, call `useWxDataDecodedQuery` and pass it any options that fit your needs.
 * When your component renders, `useWxDataDecodedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWxDataDecodedQuery({
 *   variables: {
 *      cloudID: // value for 'cloudID'
 *      iv: // value for 'iv'
 *      encryptedData: // value for 'encryptedData'
 *      sessionKey: // value for 'sessionKey'
 *      openid: // value for 'openid'
 *   },
 * });
 */
export function useWxDataDecodedQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SchemaTypes.WxDataDecodedQuery,
    SchemaTypes.WxDataDecodedQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SchemaTypes.WxDataDecodedQuery,
    SchemaTypes.WxDataDecodedQueryVariables
  >(WxDataDecodedDocument, options);
}
export function useWxDataDecodedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SchemaTypes.WxDataDecodedQuery,
    SchemaTypes.WxDataDecodedQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SchemaTypes.WxDataDecodedQuery,
    SchemaTypes.WxDataDecodedQueryVariables
  >(WxDataDecodedDocument, options);
}
export type WxDataDecodedQueryHookResult = ReturnType<
  typeof useWxDataDecodedQuery
>;
export type WxDataDecodedLazyQueryHookResult = ReturnType<
  typeof useWxDataDecodedLazyQuery
>;
export type WxDataDecodedQueryResult = Apollo.QueryResult<
  SchemaTypes.WxDataDecodedQuery,
  SchemaTypes.WxDataDecodedQueryVariables
>;
