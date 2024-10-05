---
nav: 工具类
title: 在线图片转文件
group:
  title: 文件
  order: 3
---

#### 在线图片转文件

```js
import { dataUrlToFile } from '@alitojs/utils';

dataURLtoFile(file, fileName, 'png').then(res => {
  console.log(res);
})

```

#### API

| 参数   | 说明 | 类型 | 默认值 | 是否必填 |
| ------ | ---- | ---- | ------ | -------- |
| 参数 1 | url | string | -      | 是       |
| 参数 2 | 文件名 | string | -      | 是       |
| 参数 3 | 文件类型 | File | png     | 否      |
