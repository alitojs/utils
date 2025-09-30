---
title: 用户选择器
nav: web组件
group:
  title: 通用
---

#### 用户选择器

author: 陈书航

![img](./img/jSelectUserByDepImg.png)

#### 组件路径

`@/components/jeecgbiz/JSelectUserByDep.vue`

> **组件已经全局注册过，无须再次引入**

#### API

| 参数           | 说明                                      | 类型     | 默认值           | 是否必填 |
| -------------- | ----------------------------------------- | -------- | ---------------- | -------- |
| modalWidth     | 弹框宽度                                  | Number   | 500              | 否       |
| buttonText     | 按钮文字                                  | String   | `选择用户`       | 否       |
| title          | 弹框的标题                                | String   | `选择部门`       | 否       |
| multi          | 是否支持多选                              | Boolean  | false            | 否       |
| value(v-model) | 值， 多个以 `,` 分割                      | String   | -                | 否       |
| disabled       | 是否禁用                                  | Boolean  | false            | 否       |
| backUser       | 是否返回所选用户的信息，通过 `@back` 返回 | Boolean  | false            | 否       |
| text           | 现在是界面上的字段                        | String   | `departName`     | 否       |
| placeholder    | placeholder                               | String   | `请点击选择部门` | 否       |
| enterButton    | 是否要展示选择框旁边的按钮                | Boolean  | true             | 否       |
| @back          | 返回所选用户的信息                        | Function | -                | 否       |
