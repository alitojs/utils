---
nav: 工具类
title: GPS84转GCJ02
group:
  title: 地图
---

#### GPS84 转 GCJ02(火星坐标系) 

```js
import { wgs84ToGcj02 } from '@alitojs/utils';

const obj = wgs84ToGcj02(lng, lat);

console.log(obj); // [lng, lat]
```

#### API

| 参数 | 说明 | 类型   | 默认值 | 是否必填 |
| ---- | ---- | ------ | ------ | -------- |
| lng  | 经度 | number | -      | 是       |
| lat  | 纬度 | number | -      | 是       |
