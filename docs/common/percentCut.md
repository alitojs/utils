---
nav: 工具类
title: 百分比切割
group:
  title: 通用
---

#### 百分比切割

```js
import { percentCut } from '@alitojs/utils';


console.log(percentCut('99.87','before')); // 99
console.log(percentCut('99.87','end')); // 87
console.log(percentCut('0.87','before')); // 0
console.log(percentCut('99','end')); // 00
```

#### API

| 参数   | 说明 | 类型              | 默认值   | 是否必填 |
| ------ | ---- | ----------------- | -------- | -------- |
| 参数 1 | 分数 | string \| number  | -        | 是       |
| 参数 2 | 类别 | `before` \| `end` | `before` | 否       |
