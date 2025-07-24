---
title: 分页列表
nav: web组件
group:
  title: 通用
---

#### 分页列表

` <z-paging ref="paging" v-model="dataList" @query="queryList"></z-paging>`

#### 组件路径

> **组件已经全局注册过，无须再次引入**

#### API

| 参数     | 说明                                                               | 类型     | 默认值 | 是否必填 |
| -------- | ------------------------------------------------------------------ | -------- | ------ | -------- |
| v-model  | 数据列表                                                           | Object[] | []     | 是       |
| ref      | 用于处理重新加载等逻辑                                             | String   | paging | 是       |
| fixed    | 是否自动固定到页面                                                 | Boolean  | true   | 否       |
| auto     | 是否自适应高度                                                     | Boolean  | true   | 否       |
| @query   | 请求列表的方法，这个方法会传递出 `pageNo` 和 `pageSize` 的两个参数 | Function | -      | 是       |
| slot:top | 放置在列表之上的内容                                               | slot     | -      | 否       |
|          |                                                                    |          |        |          |
|          |                                                                    |          |        |          |

`this.$refs.paging.reload(true)` 遇到需要重新加载的情况，可以调用这个方法
