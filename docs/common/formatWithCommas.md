---
nav: 工具类
title: 数字格式转化
group:
  title: 通用
---

#### 数字转换为每三位一个逗号的格式

```js
import { formatWithCommas } from '@alitojs/utils';


console.log(formatWithCommas(1234567)); // 1,234,567
console.log(formatWithCommas(1234567.89)); // 1,234,567.89
```

#### API

| 参数   | 说明     | 类型             | 默认值 | 是否必填 |
| ------ | -------- | ---------------- | ------ | -------- |
| 参数 1 | 转换参数 | number \| string | -      | 是       |
