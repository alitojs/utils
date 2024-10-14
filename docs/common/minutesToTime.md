---
nav: 工具类
title: 分钟数转时间
group:
  title: 时间
  order: 2
---

#### 分钟数转时间

```js
import { minutesToTime } from '@alitojs/utils';

console.log(minutesToTime(6)); // 00:06:00
console.log(minutesToTime('76')); // 01:06:00
```

#### API

| 参数   | 说明     | 类型             | 默认值 | 是否必填 |
| ------ | -------- | ---------------- | ------ | -------- |
| 参数 1 | 时间格式 | string \| number | -      | 是       |
