# @graphql-codegen/cli

- add

```s
# @graphql-codegen/cli
$ yarn add @graphql-codegen/cli -D
$ yarn add @graphql-codegen/import-types-preset @graphql-codegen/introspection -D
$ yarn add @graphql-codegen/typescript @graphql-codegen/typescript-document-nodes -D
$ yarn add @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo -D
$ yarn add @graphql-codegen/typescript-react-query -D
```

package.json

```t
script:
"generator": "graphql-codegen --config operation.yml"
```

- 配置文件

```yml
hooks:
  # 格式化
  afterAllFileWrite:
    - prettier --write
overwrite: true
schema: 'http://127.0.0.1:8061/graphql'
documents: 'graphql/**/*.gql'
generates:
  # 基础类型
  src/generator/foundation.ts:
    plugins:
      - 'typescript'
      - 'typescript-operations'
  # 操作
  src/generator/foundation.operation.ts:
    preset: import-types
    presetConfig:
      typesPath: ./foundation
      importTypesNamespace: SchemaTypes
    plugins:
      - 'typescript-react-apollo'
    config:
      # defaultBaseOptions: {
      #   fetchPolicy: 'cache-and-network'
      # }
  # src/generator/auth-center.operation.ts:
  #   plugins:
  #     - 'typescript-react-apollo'
config:
  immutableTypes: true
```

- git

```s
# git 迁移
$ cd existing_repo
$ git remote rename origin old-origin
$ git remote add origin git@gitlab.cyberstone.com.cn:zhanchao.wu/member.git
$ git push -u origin --all
$ git push -u origin --tags
```
