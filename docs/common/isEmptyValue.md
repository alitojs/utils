---
nav: 工具类
title: 判空
group:
  title: 通用
---

#### 对数据进行判空处理

```js
import { isEmptyValue } from '@alitojs/utils';


console.log(isEmptyValue(null)); // true
console.log(isEmptyValue(undefined)); // true
console.log(isEmptyValue({})); // true
console.log(isEmptyValue([])); // true
console.log(isEmptyValue(0)); // false
```

#### API

| 参数   | 说明     | 类型 | 默认值 | 是否必填 |
| ------ | -------- | ---- | ------ | -------- |
| 参数 1 | 判空参数 | any  | -      | 是       |
