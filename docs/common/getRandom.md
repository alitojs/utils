---
nav: 工具类
title: 生成随机数
group:
  title: 通用
---

#### 生成随机数

```js
import { getRandom } from '@alitojs/utils';

const num = getRandom(6);

console.log(num); // jw123m
```

#### API

| 参数   | 说明             | 类型   | 默认值 | 是否必填 |
| ------ | ---------------- | ------ | ------ | -------- |
| 参数 1 | 生成随机数的位数 | number | 6      | 否       |
