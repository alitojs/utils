---
nav: 工具类
title: 邮箱校验
group:
  title: 判断
  order: 1
---

#### 生成随机数

```js
import { isEmail } from '@alitojs/utils';

console.log(isEmail('437132124@qq.com')); // true
console.log(isEmail('437132124')); // false
```

#### API

| 参数   | 说明     | 类型   | 默认值 | 是否必填 |
| ------ | -------- | ------ | ------ | -------- |
| 参数 1 | 邮箱地址 | string |   -     | 否       |
