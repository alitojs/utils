---
nav: 工具类
title: 身份证号脱敏
group:
  title: 脱敏
  order: 2
---

#### 身份证号脱敏

```js
import { getSecretIdNumber } from '@alitojs/utils';

console.log(getSecretIdNumber('350600199703190000')); // **************0000
```

#### API

| 参数   | 说明             | 类型   | 默认值 | 是否必填 |
| ------ | ---------------- | ------ | ------ | -------- |
| 参数 1 | 身份证号 | string | -     | 是       |
