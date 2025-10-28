---
nav: 工具类
title: 过滤对象空的值
group:
  title: 通用
---

#### 过滤对象空的值

```js
import { filterObj } from '@alitojs/utils';

console.log(filterObj({ a: '1', b: '', c: null, d: undefind, e: 'c' })); // { a: '1', e: 'c' }
```

#### API

| 参数   | 说明         | 类型   | 默认值 | 是否必填 |
| ------ | ------------ | ------ | ------ | -------- |
| 参数 1 | 需处理的对象 | Object | -      | 是       |
