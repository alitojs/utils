---
nav: 工具类
title: 根据身份证获取年龄
group:
  title: 通用
---

#### 根据身份证获取年龄

```js
import { getAgeByIdNumber } from '@alitojs/utils';


console.log(getAgeByIdNumber('350600199703190000')); // 27
console.log(getAgeByIdNumber('350600200003190000')); // 24
```

#### API

| 参数   | 说明       | 类型   | 默认值 | 是否必填 |
| ------ | ---------- | ------ | ------ | -------- |
| 参数 1 | 身份证号码 | string | -      | 是       |
