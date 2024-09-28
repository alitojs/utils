---
nav: 工具类
title: 下划线转驼峰
group:
  title: 通用
---

#### 下划线转驼峰

```js
import { underLine2CamelCase } from '@alitojs/utils';

console.log(underLine2CamelCase('hello_world')); // helloWorld
```

#### API

| 参数   | 说明     | 类型   | 默认值 | 是否必填 |
| ------ | -------- | ------ | ------ | -------- |
| 参数 1 | 转换参数 | string | -      | 是       |
