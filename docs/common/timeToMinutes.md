---
nav: 工具类
title: 时间转分钟数
group:
  title: 时间
  order: 2
---

#### 时间转分钟数

```js
import { timeToMinutes } from '@alitojs/utils';

console.log(timeToMinutes('00:06:32')); // 6.32
console.log(timeToMinutes('01:06:32')); // 66
```

#### API

| 参数   | 说明     | 类型   | 默认值 | 是否必填 |
| ------ | -------- | ------ | ------ | -------- |
| 参数 1 | 时间格式 | string | -      | 是       |
