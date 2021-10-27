export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type AppOrder = {
  readonly __typename?: 'AppOrder';
  /** 用户id */
  readonly appUserId?: Maybe<Scalars['String']>;
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly createdId: Scalars['String'];
  readonly deletedAt: Scalars['DateTime'];
  readonly deletedId: Scalars['String'];
  /** 状态 1启用 0停用默认1 */
  readonly enableFlag?: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  /** 消息队列id */
  readonly msgId?: Maybe<Scalars['String']>;
  /** 订单金额分 */
  readonly orderAmount?: Maybe<Scalars['Int']>;
  /** 三方支付订单id */
  readonly otherId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 订单状态 */
  readonly status?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly updatedId: Scalars['String'];
  /** BaseTable.version */
  readonly version?: Maybe<Scalars['Int']>;
};

export type AppOrderList = {
  readonly __typename?: 'AppOrderList';
  readonly count?: Maybe<Scalars['Int']>;
  readonly list?: Maybe<ReadonlyArray<AppOrder>>;
};

export type AppOrderSaveIn = {
  /** 用户id */
  readonly appUserId?: Maybe<Scalars['String']>;
  readonly appUserIdObj?: Maybe<AppUserSaveIn>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly createdId?: Maybe<Scalars['String']>;
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 状态 1启用 0停用默认1 */
  readonly enableFlag?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['String']>;
  /** 消息队列id */
  readonly msgId?: Maybe<Scalars['String']>;
  /** 订单金额分 */
  readonly orderAmount?: Maybe<Scalars['Int']>;
  /** 三方支付订单id */
  readonly otherId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 订单状态 */
  readonly status?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly updatedId?: Maybe<Scalars['String']>;
  /** BaseTable.version */
  readonly version?: Maybe<Scalars['Int']>;
};

export type AppUser = {
  readonly __typename?: 'AppUser';
  /** 是否账号 */
  readonly account?: Maybe<Scalars['String']>;
  /** 是否账号启用 */
  readonly accountStatus?: Maybe<Scalars['String']>;
  readonly appOrderAppUserId?: Maybe<ReadonlyArray<AppOrder>>;
  /** 生日 */
  readonly birthday?: Maybe<Scalars['DateTime']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly createdId: Scalars['String'];
  readonly deletedAt: Scalars['DateTime'];
  readonly deletedId: Scalars['String'];
  /** 状态 1启用 0停用默认1 */
  readonly enableFlag?: Maybe<Scalars['Int']>;
  /** 性别 */
  readonly gender?: Maybe<Scalars['String']>;
  /** 头像 */
  readonly hdaderImg?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** 最后登录时间 */
  readonly lastLoginTime?: Maybe<Scalars['DateTime']>;
  /** token */
  readonly lastLoginToken?: Maybe<Scalars['String']>;
  /** 最后操作 */
  readonly lastOptions?: Maybe<Scalars['JSONObject']>;
  /** 最后操作时间 */
  readonly lastOptionsTime?: Maybe<Scalars['DateTime']>;
  /** 昵称唯一[unique] */
  readonly nickname?: Maybe<Scalars['String']>;
  /** 微信openid */
  readonly openid?: Maybe<Scalars['String']>;
  /** 密码 */
  readonly password?: Maybe<Scalars['String']>;
  /** 手机号唯一[unique] */
  readonly phone?: Maybe<Scalars['String']>;
  /** 真实姓名 */
  readonly realName?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 角色id */
  readonly roleId?: Maybe<Scalars['String']>;
  readonly roleIdObj?: Maybe<Role>;
  /** 状态normal正常black拉黑 */
  readonly status?: Maybe<Scalars['String']>;
  /** 微信unionid */
  readonly unionid?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly updatedId: Scalars['String'];
  /** BaseTable.version */
  readonly version?: Maybe<Scalars['Int']>;
};

export type AppUserList = {
  readonly __typename?: 'AppUserList';
  readonly count?: Maybe<Scalars['Int']>;
  readonly list?: Maybe<ReadonlyArray<AppUser>>;
};

export type AppUserSaveIn = {
  /** 是否账号 */
  readonly account?: Maybe<Scalars['String']>;
  /** 是否账号启用 */
  readonly accountStatus?: Maybe<Scalars['String']>;
  readonly appOrderAppUserId?: Maybe<ReadonlyArray<AppOrderSaveIn>>;
  /** 生日 */
  readonly birthday?: Maybe<Scalars['DateTime']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly createdId?: Maybe<Scalars['String']>;
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 状态 1启用 0停用默认1 */
  readonly enableFlag?: Maybe<Scalars['Int']>;
  /** 性别 */
  readonly gender?: Maybe<Scalars['String']>;
  /** 头像 */
  readonly hdaderImg?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
  /** 最后登录时间 */
  readonly lastLoginTime?: Maybe<Scalars['DateTime']>;
  /** token */
  readonly lastLoginToken?: Maybe<Scalars['String']>;
  /** 最后操作 */
  readonly lastOptions?: Maybe<Scalars['JSONObject']>;
  /** 最后操作时间 */
  readonly lastOptionsTime?: Maybe<Scalars['DateTime']>;
  /** 昵称唯一[unique] */
  readonly nickname?: Maybe<Scalars['String']>;
  /** 微信openid */
  readonly openid?: Maybe<Scalars['String']>;
  /** 密码 */
  readonly password?: Maybe<Scalars['String']>;
  /** 手机号唯一[unique] */
  readonly phone?: Maybe<Scalars['String']>;
  /** 真实姓名 */
  readonly realName?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 角色id */
  readonly roleId?: Maybe<Scalars['String']>;
  readonly roleIdObj?: Maybe<RoleSaveIn>;
  /** 状态normal正常black拉黑 */
  readonly status?: Maybe<Scalars['String']>;
  /** 微信unionid */
  readonly unionid?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly updatedId?: Maybe<Scalars['String']>;
  /** BaseTable.version */
  readonly version?: Maybe<Scalars['Int']>;
};

export type AuthGql = {
  readonly __typename?: 'AuthGql';
  /** appuser.id */
  readonly id?: Maybe<Scalars['String']>;
  /** 手机号 */
  readonly phone?: Maybe<Scalars['String']>;
  /** 角色编码 */
  readonly roleCode?: Maybe<Scalars['String']>;
  /** token */
  readonly token?: Maybe<Scalars['String']>;
  /** 用户名 */
  readonly username?: Maybe<Scalars['String']>;
};

export type CodeToSessionGql = {
  readonly __typename?: 'CodeToSessionGql';
  /** id */
  readonly id?: Maybe<Scalars['String']>;
  /** openid */
  readonly openid?: Maybe<Scalars['String']>;
  /** session_key */
  readonly sessionKey?: Maybe<Scalars['String']>;
  /** token */
  readonly token?: Maybe<Scalars['String']>;
  /** unionid */
  readonly unionid?: Maybe<Scalars['String']>;
};

export type DataDictionary = {
  readonly __typename?: 'DataDictionary';
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly createdId: Scalars['String'];
  readonly dataDictionaryParentId?: Maybe<ReadonlyArray<DataDictionary>>;
  readonly deletedAt: Scalars['DateTime'];
  readonly deletedId: Scalars['String'];
  /** 状态 1启用 0停用默认1 */
  readonly enableFlag?: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  /** 字典显示 */
  readonly itemDisplay?: Maybe<Scalars['String']>;
  /** 排序 */
  readonly itemOrder?: Maybe<Scalars['Int']>;
  /** 字典值 */
  readonly itemValue?: Maybe<Scalars['String']>;
  /** 字典key[unique] */
  readonly key?: Maybe<Scalars['String']>;
  /** 字典显示 */
  readonly keyDisplay?: Maybe<Scalars['String']>;
  /** 层级 */
  readonly level?: Maybe<Scalars['Int']>;
  /** 上级key */
  readonly parentId?: Maybe<Scalars['String']>;
  readonly parentIdObj?: Maybe<DataDictionary>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly updatedId: Scalars['String'];
  /** BaseTable.version */
  readonly version?: Maybe<Scalars['Int']>;
};

export type DataDictionaryList = {
  readonly __typename?: 'DataDictionaryList';
  readonly count?: Maybe<Scalars['Int']>;
  readonly list?: Maybe<ReadonlyArray<DataDictionary>>;
};

export type DataDictionarySaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly createdId?: Maybe<Scalars['String']>;
  readonly dataDictionaryParentId?: Maybe<ReadonlyArray<DataDictionarySaveIn>>;
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 状态 1启用 0停用默认1 */
  readonly enableFlag?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['String']>;
  /** 字典显示 */
  readonly itemDisplay?: Maybe<Scalars['String']>;
  /** 排序 */
  readonly itemOrder?: Maybe<Scalars['Int']>;
  /** 字典值 */
  readonly itemValue?: Maybe<Scalars['String']>;
  /** 字典key[unique] */
  readonly key?: Maybe<Scalars['String']>;
  /** 字典显示 */
  readonly keyDisplay?: Maybe<Scalars['String']>;
  /** 层级 */
  readonly level?: Maybe<Scalars['Int']>;
  /** 上级key */
  readonly parentId?: Maybe<Scalars['String']>;
  readonly parentIdObj?: Maybe<DataDictionarySaveIn>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly updatedId?: Maybe<Scalars['String']>;
  /** BaseTable.version */
  readonly version?: Maybe<Scalars['Int']>;
};

export type GqlInputTypeBase = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly createdId?: Maybe<Scalars['String']>;
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  readonly deletedId?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly updatedId?: Maybe<Scalars['String']>;
};

export type GqlObjectTypeBase = {
  readonly __typename?: 'GqlObjectTypeBase';
  /** 业务编码权限用 */
  readonly businessCode: Scalars['String'];
  readonly createdAt: Scalars['DateTime'];
  readonly createdId: Scalars['String'];
  readonly deletedAt: Scalars['DateTime'];
  readonly deletedId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['DateTime'];
  readonly updatedId: Scalars['String'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly appOrder: AppOrder;
  readonly appOrderBulk?: Maybe<ReadonlyArray<AppOrder>>;
  readonly appOrderDestroy?: Maybe<Scalars['String']>;
  readonly appUser: AppUser;
  readonly appUserBulk?: Maybe<ReadonlyArray<AppUser>>;
  readonly appUserDestroy?: Maybe<Scalars['String']>;
  readonly dataDictionary: DataDictionary;
  readonly dataDictionaryBulk?: Maybe<ReadonlyArray<DataDictionary>>;
  readonly dataDictionaryDestroy?: Maybe<Scalars['String']>;
  readonly otherApiLog: OtherApiLog;
  readonly otherApiLogBulk?: Maybe<ReadonlyArray<OtherApiLog>>;
  readonly otherApiLogDestroy?: Maybe<Scalars['String']>;
  readonly role: Role;
  readonly roleBulk?: Maybe<ReadonlyArray<Role>>;
  readonly roleDestroy?: Maybe<Scalars['String']>;
};

export type MutationAppOrderArgs = {
  param: AppOrderSaveIn;
};

export type MutationAppOrderBulkArgs = {
  param: ReadonlyArray<AppOrderSaveIn>;
};

export type MutationAppOrderDestroyArgs = {
  id: Scalars['ID'];
};

export type MutationAppUserArgs = {
  param: AppUserSaveIn;
};

export type MutationAppUserBulkArgs = {
  param: ReadonlyArray<AppUserSaveIn>;
};

export type MutationAppUserDestroyArgs = {
  id: Scalars['ID'];
};

export type MutationDataDictionaryArgs = {
  param: DataDictionarySaveIn;
};

export type MutationDataDictionaryBulkArgs = {
  param: ReadonlyArray<DataDictionarySaveIn>;
};

export type MutationDataDictionaryDestroyArgs = {
  id: Scalars['ID'];
};

export type MutationOtherApiLogArgs = {
  param: OtherApiLogSaveIn;
};

export type MutationOtherApiLogBulkArgs = {
  param: ReadonlyArray<OtherApiLogSaveIn>;
};

export type MutationOtherApiLogDestroyArgs = {
  id: Scalars['ID'];
};

export type MutationRoleArgs = {
  param: RoleSaveIn;
};

export type MutationRoleBulkArgs = {
  param: ReadonlyArray<RoleSaveIn>;
};

export type MutationRoleDestroyArgs = {
  id: Scalars['ID'];
};

export type OtherApiLog = {
  readonly __typename?: 'OtherApiLog';
  /** 三方方法 */
  readonly apiMethod?: Maybe<Scalars['String']>;
  /** 入参 */
  readonly apiParams?: Maybe<Scalars['JSONObject']>;
  /** 返回结果 */
  readonly apiResult?: Maybe<Scalars['JSONObject']>;
  /** 三方url */
  readonly apiUrl?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 三方成功与否 */
  readonly codeStatus?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly createdId: Scalars['String'];
  readonly deletedAt: Scalars['DateTime'];
  readonly deletedId: Scalars['String'];
  /** 状态 1启用 0停用默认1 */
  readonly enableFlag?: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 三方类型 */
  readonly type?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly updatedId: Scalars['String'];
  /** BaseTable.version */
  readonly version?: Maybe<Scalars['Int']>;
};

export type OtherApiLogList = {
  readonly __typename?: 'OtherApiLogList';
  readonly count?: Maybe<Scalars['Int']>;
  readonly list?: Maybe<ReadonlyArray<OtherApiLog>>;
};

export type OtherApiLogSaveIn = {
  /** 三方方法 */
  readonly apiMethod?: Maybe<Scalars['String']>;
  /** 入参 */
  readonly apiParams?: Maybe<Scalars['JSONObject']>;
  /** 返回结果 */
  readonly apiResult?: Maybe<Scalars['JSONObject']>;
  /** 三方url */
  readonly apiUrl?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 三方成功与否 */
  readonly codeStatus?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly createdId?: Maybe<Scalars['String']>;
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 状态 1启用 0停用默认1 */
  readonly enableFlag?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 三方类型 */
  readonly type?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly updatedId?: Maybe<Scalars['String']>;
  /** BaseTable.version */
  readonly version?: Maybe<Scalars['Int']>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly appOrder?: Maybe<AppOrder>;
  readonly appOrderAll: ReadonlyArray<AppOrder>;
  readonly appOrderCount: Scalars['Int'];
  readonly appOrderList?: Maybe<AppOrderList>;
  readonly appUser?: Maybe<AppUser>;
  readonly appUserAll: ReadonlyArray<AppUser>;
  readonly appUserCount: Scalars['Int'];
  readonly appUserList?: Maybe<AppUserList>;
  readonly codeToSession?: Maybe<CodeToSessionGql>;
  readonly dataDictionary?: Maybe<DataDictionary>;
  readonly dataDictionaryAll: ReadonlyArray<DataDictionary>;
  readonly dataDictionaryCount: Scalars['Int'];
  readonly dataDictionaryList?: Maybe<DataDictionaryList>;
  readonly login?: Maybe<AuthGql>;
  readonly otherApiLog?: Maybe<OtherApiLog>;
  readonly otherApiLogAll: ReadonlyArray<OtherApiLog>;
  readonly otherApiLogCount: Scalars['Int'];
  readonly otherApiLogList?: Maybe<OtherApiLogList>;
  readonly role?: Maybe<Role>;
  readonly roleAll: ReadonlyArray<Role>;
  readonly roleCount: Scalars['Int'];
  readonly roleList?: Maybe<RoleList>;
};

export type QueryAppOrderArgs = {
  id: Scalars['ID'];
};

export type QueryAppOrderAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppOrderCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppOrderListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserArgs = {
  id: Scalars['ID'];
};

export type QueryAppUserAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCodeToSessionArgs = {
  code: Scalars['String'];
};

export type QueryDataDictionaryArgs = {
  id: Scalars['ID'];
};

export type QueryDataDictionaryAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryDataDictionaryCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryDataDictionaryListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type QueryOtherApiLogArgs = {
  id: Scalars['ID'];
};

export type QueryOtherApiLogAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryOtherApiLogCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryOtherApiLogListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRoleArgs = {
  id: Scalars['ID'];
};

export type QueryRoleAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRoleCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRoleListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryListParam = {
  readonly limit?: Maybe<Scalars['Int']>;
  readonly offset?: Maybe<Scalars['Int']>;
  /** 排序 ASC DESC */
  readonly order?: Maybe<ReadonlyArray<ReadonlyArray<Scalars['String']>>>;
  /** 查询条件 Op = _ */
  readonly where?: Maybe<Scalars['JSONObject']>;
};

export type Role = {
  readonly __typename?: 'Role';
  readonly appUserRoleId?: Maybe<ReadonlyArray<AppUser>>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 角色编号[unique] */
  readonly code?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly createdId: Scalars['String'];
  readonly deletedAt: Scalars['DateTime'];
  readonly deletedId: Scalars['String'];
  /** 状态 1启用 0停用默认1 */
  readonly enableFlag?: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  /** 角色名称[unique] */
  readonly name?: Maybe<Scalars['String']>;
  /** 上级角色 */
  readonly parentId?: Maybe<Scalars['String']>;
  readonly parentIdObj?: Maybe<Role>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  readonly roleParentId?: Maybe<ReadonlyArray<Role>>;
  readonly updatedAt: Scalars['DateTime'];
  readonly updatedId: Scalars['String'];
  /** BaseTable.version */
  readonly version?: Maybe<Scalars['Int']>;
};

export type RoleList = {
  readonly __typename?: 'RoleList';
  readonly count?: Maybe<Scalars['Int']>;
  readonly list?: Maybe<ReadonlyArray<Role>>;
};

export type RoleSaveIn = {
  readonly appUserRoleId?: Maybe<ReadonlyArray<AppUserSaveIn>>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 角色编号[unique] */
  readonly code?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly createdId?: Maybe<Scalars['String']>;
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 状态 1启用 0停用默认1 */
  readonly enableFlag?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['String']>;
  /** 角色名称[unique] */
  readonly name?: Maybe<Scalars['String']>;
  /** 上级角色 */
  readonly parentId?: Maybe<Scalars['String']>;
  readonly parentIdObj?: Maybe<RoleSaveIn>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  readonly roleParentId?: Maybe<ReadonlyArray<RoleSaveIn>>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly updatedId?: Maybe<Scalars['String']>;
  /** BaseTable.version */
  readonly version?: Maybe<Scalars['Int']>;
};

export type LoginQueryVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginQuery = {
  readonly __typename?: 'Query';
  readonly login?:
    | {
        readonly __typename?: 'AuthGql';
        readonly id?: string | null | undefined;
        readonly token?: string | null | undefined;
      }
    | null
    | undefined;
};

export type CodeToSessionQueryVariables = Exact<{
  code: Scalars['String'];
}>;

export type CodeToSessionQuery = {
  readonly __typename?: 'Query';
  readonly codeToSession?:
    | {
        readonly __typename?: 'CodeToSessionGql';
        readonly openid?: string | null | undefined;
        readonly unionid?: string | null | undefined;
        readonly sessionKey?: string | null | undefined;
        readonly id?: string | null | undefined;
        readonly token?: string | null | undefined;
      }
    | null
    | undefined;
};

export type LoginUserFragment = {
  readonly __typename?: 'AuthGql';
  readonly id?: string | null | undefined;
  readonly token?: string | null | undefined;
};

export type CodeToSessionGqlFragment = {
  readonly __typename?: 'CodeToSessionGql';
  readonly openid?: string | null | undefined;
  readonly unionid?: string | null | undefined;
  readonly sessionKey?: string | null | undefined;
  readonly id?: string | null | undefined;
  readonly token?: string | null | undefined;
};
