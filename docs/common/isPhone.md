---
nav: 工具类
title: 电话号码校验
group:
  title: 判断
  order: 1
---

#### 电话号码校验

```js
import { isPhone } from '@alitojs/utils';

console.log(isPhone('3637778')); // true
console.log(isPhone('13055271111')); // false
```

#### API

| 参数   | 说明     | 类型   | 默认值 | 是否必填 |
| ------ | -------- | ------ | ------ | -------- |
| 参数 1 | 电话号码 | string |   -     | 是       |
