---
nav: 工具类
title: 姓名脱敏
group:
  title: 脱敏
---

#### 姓名脱敏

```js
import { getSecretName } from '@alitojs/utils';

console.log(getSecretName('陈大大')); // 陈*大
console.log(getSecretName('陈大大小')); // 陈**小
```

#### API

| 参数   | 说明 | 类型   | 默认值 | 是否必填 |
| ------ | ---- | ------ | ------ | -------- |
| 参数 1 | 名字 | string | -      | 是       |
