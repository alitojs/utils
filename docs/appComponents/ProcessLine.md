---
title: 审批流程
nav: mobile组件
group:
  title: 通用
---

####  ProcessLine 审批流程

author: 孔德忠

该组件用于垂直展示审批流程的时间线，清晰地呈现每个审批节点的处理人、状态、意见和时间。

#### 预览效果

![审批流程卡片预览](https://user-images.githubusercontent.com/1092576/183477103-12219098-f2b3-4328-9184-253c61266e74.png)

#### 组件路径
`@/pagesEcpp/components/ProcessLine`

#### 基础用法

```vue
<process-line :list="processList" />
```

#### API 参数

##### Props

| 参数名 | 说明             | 类型    | 默认值 | 是否必填 |
| ------ | ---------------- | ------- | ------ | -------- |
| list   | 审批流程数据列表 | `Array` | `[]`   | 是       |

##### 类型定义

###### ListItem

`list` 属性是一个对象数组，每个对象包含以下属性：

| 属性名         | 说明                                               | 类型      |
| -------------- | -------------------------------------------------- | --------- |
| activityType   | 节点类型, 'startEvent' 和 'endEvent' 类型会被隐藏 | `String`  |
| isCarbonCopy   | 是否为抄送节点                                     | `Boolean` |
| avatar         | 审批人头像的 URL                                   | `String`  |
| activityName   | 节点名称                                           | `String`  |
| result         | 审批结果 (例如: 'agree', 'reject', 'pending')      | `String`  |
| startTime      | 节点开始时间                                       | `String`  |
| assignee       | 处理人名称                                         | `String`  |
| comment        | 审批意见                                           | `String`  |
