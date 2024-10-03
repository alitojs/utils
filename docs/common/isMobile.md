---
nav: 工具类
title: 手机号码校验
group:
  title: 判断
  order: 1
---

#### 手机号码校验

```js
import { isMobile } from '@alitojs/utils';

console.log(isMobile('13055270000')); // true
console.log(isMobile('1305527')); // false
```

#### API

| 参数   | 说明     | 类型   | 默认值 | 是否必填 |
| ------ | -------- | ------ | ------ | -------- |
| 参数 1 | 手机号码 | string |   -     | 是       |
