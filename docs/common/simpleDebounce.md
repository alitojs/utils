---
nav: 工具类
title: 防抖
group:
  title: 通用
---

#### 防抖

```js
import { simpleDebounce } from '@alitojs/utils';

simpleDebounce(() => {
  console.log('hello world');
}, 1000)
```

#### API

| 参数   | 说明         | 类型     | 默认值 | 是否必填 |
| ------ | ------------ | -------- | ------ | -------- |
| 参数 1 | 方法         | function | -      | 是       |
| 参数 2 | 防抖的毫秒数 | number   | 100    | 否       |
