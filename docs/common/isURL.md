---
nav: 工具类
title: URL校验
group:
  title: 判断
  order: 1
---

#### URL校验

```js
import { isURL } from '@alitojs/utils';

console.log(isURL('https://www.baidu.com')); // true
console.log(isURL('hhhh')); // false
```

#### API

| 参数   | 说明     | 类型   | 默认值 | 是否必填 |
| ------ | -------- | ------ | ------ | -------- |
| 参数 1 | url | string |   -     | 是       |
