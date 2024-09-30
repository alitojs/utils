---
nav: 工具类
title: GCJ02转GPS84
group:
  title: 地图
  order: 3
---

#### GCJ02(火星坐标系) 转GPS84

```js
import { gcj02toWgs84 } from '@alitojs/utils';

const obj = gcj02toWgs84(lng, lat);

console.log(obj); // [lng, lat]
```

#### API

| 参数 | 说明 | 类型   | 默认值 | 是否必填 |
| ---- | ---- | ------ | ------ | -------- |
| lng  | 经度 | number | -      | 是       |
| lat  | 纬度 | number | -      | 是       |
