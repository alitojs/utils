---
title: 车辆卡片
nav: web组件
group:
  title: 通用
---

#### 车辆卡片

![img](./img/carInfoImg.png)

#### 组件路径

`@/pagesEcpp/components/CarInfo`

#### API

| 参数          | 说明             | 类型        | 默认值 | 是否必填 |
| ------------- | ---------------- | ----------- | ------ | -------- |
| info          | 数据对象         | Object      | -      | 是       |
| alias         | 字段替换         | AliasObject | {}     | 否       |

#### AliasObject 别名对象

| 参数                | 说明     |
| -------------       | -------- |
| capturePicture      | 车辆图片      |
| plateNumber         | 车牌号码      |
| tag                 | 标签          |
| plateType           | 号牌种类      |
| plateType_dictText  | 号牌种类中文  |