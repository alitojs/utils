---
title: 人员信息展示组件
nav: mobile组件
group:
  title: 通用
---

#### 人员信息展示组件

author: 孔德忠

PersonInfo 是一个用于展示人员信息的组件，支持显示头像、基本信息、人员标签和涉案标签等内容。组件具有身份证号脱敏显示功能，支持字段别名配置。

#### Props 参数

| 参数  | 说明             | 类型   | 默认值 | 是否必填 |
| ----- | ---------------- | ------ | ------ | -------- |
| info  | 人员信息对象     | Object | `{}`   | 是       |
| alias | 字段别名配置对象 | Object | -      | 否       |

#### info 对象字段说明

| 字段                     | 说明                   | 类型          |
| ------------------------ | ---------------------- | ------------- |
| name                     | 姓名                   | String        |
| facePic                  | 头像图片路径           | String        |
| sex_dictText             | 性别文本               | String        |
| idNumber                 | 身份证号               | String        |
| age                      | 年龄                   | String/Number |
| isPopulationRegistration | 是否人口登记（1 为是） | Number        |
| similarityStr            | 相似度字符串           | String        |
| personTags               | 人员标签数组           | Array         |
| involvedTag              | 涉案标签数组           | Array         |

#### alias 对象字段说明

用于自定义字段名映射，当后端返回的字段名与组件默认字段名不一致时使用。

| 字段        | 说明             | 默认值        |
| ----------- | ---------------- | ------------- |
| facePic     | 头像字段别名     | 'facePic'     |
| personTags  | 人员标签字段别名 | 'personTags'  |
| involvedTag | 涉案标签字段别名 | 'involvedTag' |
