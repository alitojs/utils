---
nav: 工具类
title: 货币转中文
group:
  title: 通用
---

#### 货币转换方法  转为中文

```js
import { convertCurrency } from '@alitojs/utils';

console.log(convertCurrency('12345678.33')); // 壹仟贰佰叁拾肆万伍仟陆佰柒拾捌元叁角叁分
```

#### API

| 参数   | 说明   | 类型             | 默认值 | 是否必填 |
| ------ | ------ | ---------------- | ------ | -------- |
| 参数 1 | 货币值 | string \| number | -      | 是       |
