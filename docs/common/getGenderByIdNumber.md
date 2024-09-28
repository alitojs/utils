---
nav: 工具类
title: 根据身份证获取性别
group:
  title: 通用
---

#### 根据身份证获取性别

```js
import { getGenderByIdNumber } from '@alitojs/utils';


console.log(getGenderByIdNumber('350600199703190000')); // 1: 男
console.log(getGenderByIdNumber('350600200003190000')); // 2: 女
```

#### API

| 参数   | 说明       | 类型   | 默认值 | 是否必填 |
| ------ | ---------- | ------ | ------ | -------- |
| 参数 1 | 身份证号码 | string | -      | 是       |
