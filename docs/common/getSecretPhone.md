---
nav: 工具类
title: 手机号脱敏
group:
  title: 脱敏
---

#### 手机号脱敏

```js
import { getSecretPhone } from '@alitojs/utils';

console.log(getSecretPhone('13000000225')); // 130*****225
```

#### API

| 参数   | 说明     | 类型   | 默认值 | 是否必填 |
| ------ | -------- | ------ | ------ | -------- |
| 参数 1 | 手机号码 | string | -      | 是       |
