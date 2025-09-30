---
title: 车牌/准驾车型选择器
nav: Mobile组件
group:
  title: 通用
---

#### 车牌/准驾车型选择器

author: 龚海强

![img](./img/plateInput1.png)
![img](./img/plateInput2.png)

`<uni-plate-input :plate="form.hphm" @export="setPlate2($event, 'zjcx')" @close="show.hphm = false" />`

#### 组件路径

> **组件已经全局注册过，无须再次引入**

`@/components/eqds/uni/uni-plate-input/uni-plate-input`

#### API

| 参数  | 说明                   | 类型    | 默认值 | 是否必填 |
| ----- | ---------------------- | ------- | ------ | -------- |
| zjcx  | 是否切换为准驾车型模式 | Boolean | false  | 否       |
| plate | 输入的车牌号           | String  | -      | 否       |
| type2 | 自定义车牌类型         | Number  | 10     | 否       |

#### type2 属性说明

| 参数值 | 说明                                              |
| ------ | ------------------------------------------------- |
| 1      | 普通车牌                                          |
| 2      | 新能源车牌                                        |
| 3      | 无号牌                                            |
| 4      | 手动输入（若 zjcx = true 时，为准驾车型手动输入） |
| 5      | 切换为准驾车型模式（若 zjcx = true 时，该值生效） |

#### 事件

| 参数   | 说明                 |
| ------ | -------------------- |
| export | 点击完成按钮时的回调 |
| close  | 点击取消按钮时的回调 |
