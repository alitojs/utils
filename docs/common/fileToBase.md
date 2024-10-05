---
nav: 工具类
title: 图片转base64
group:
  title: 文件
  order: 3
---

#### 图片转base64

```js
import { fileToBase } from '@alitojs/utils';

const fileChange = files => {
  const file = files.target.files[0];
  fileToBase(file).then(data => {
    console.log(data.result);
  })
};

```

#### API

| 参数   | 说明 | 类型 | 默认值 | 是否必填 |
| ------ | ---- | ---- | ------ | -------- |
| 参数 1 | 文件 | File | -      | 是       |
