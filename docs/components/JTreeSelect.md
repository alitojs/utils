---
title: 异步树选择器
nav: 自定义组件
group:
  title: 通用
---

#### JTreeSelect 异步树选择组件

author: 孔德忠

该组件是一个基于 `a-tree-select` 封装的异步树选择器。它通过配置一个字典字符串，从后端动态加载树形数据，并支持异步加载子节点、数据回显、搜索、多选等功能。

#### 预览效果

![树选择器预览](https://gw.alipayobjects.com/zos/alicdn/O5_DBd2_url/TreeSelect.svg)

#### 组件路径

`@/components/jeecg/JTreeSelect` 

#### 基础用法

通过 `dict` 属性配置数据源，`v-model` 绑定选择的值。

```vue
<template>
  <j-tree-select
    v-model="selectedValue"
    dict="sys_depart,depart_name,id"
    placeholder="请选择部门"
  />
</template>

<script>
export default {
  data() {
    return {
      selectedValue: ''
    }
  }
}
</script>
```

#### 高级用法

使用多选、自定义 `pid` 字段、传递默认根节点 `pid` 以及额外的查询条件。

```vue
<template>
  <j-tree-select
    v-model="selectedKeys"
    dict="sys_category,name,id"
    pid-field="pid"
    pid-value="0"
    :multiple="true"
    :condition='{"type":"1"}'
    placeholder="请选择多个分类"
  />
</template>

<script>
export default {
  data() {
    return {
      // 多选时，v-model 的值为以逗号分隔的字符串
      selectedKeys: ''
    }
  }
}
</script>
```

#### API 参数

##### Props

| 参数名 <img width=180/> | 说明  | 类型 <img width=80/>  | 默认值 <img width=80/> | 是否必填 |
| :---  | :--- | :---  | :--- | :--- |
| `v-model/value` | 组件绑定的值。单选时为单个 `id` 字符串，多选时为以逗号分隔的 `id` 字符串。 | `String` | `''` | 否 |
| `dict` | 核心配置字符串，格式为：`'表名,文本字段,值字段'` | `String` | `''` | 是 |
| `placeholder` | 输入框提示文字 | `String` | `'请选择'` | 否 |
| `pidField` | 后端接口用于查询子节点的父级 ID 字段名。 | `String` | `'pid'` | 否 |
| `pidValue` | 根节点的父级 ID 的值，用于加载一级节点。 | `String` | `''` | 否 |
| `multiple` | 是否支持多选。 | `Boolean` | `false` | 否 |
| `disabled` | 是否禁用组件。 | `Boolean` | `false` | 否 |
| `condition` | 额外的查询条件，必须是 JSON 格式的字符串。例如：`'{"status":"1"}'` | `String` | `''` | 否 |
| `showSearch` | 是否显示搜索框。 | `Boolean` | `false` | 否 |
| `treeNodeFilterProp` | 搜索时过滤的节点属性。 | `String` | `'title'` | 否 |
| `hasChildField` | 后端返回数据中，用于判断节点是否含有子节点的字段名。如果提供，组件会根据此字段判断是否为叶子节点。 | `String` | `''` | 否 |
| `loadTriggleChange` | 在初始加载数据回显时，是否触发一次 `change` 事件（仅单选模式有效）。 | `Boolean` | `false` | 否 |


##### Events

| 事件名 | 说明 | 回调参数 |
| :--- | :--- | :----- |
| `change` | 选中节点时触发。 | **单选模式**: `(value, label)` <br/> - `value`: 选中的值 (id) <br/> - `label`: 选中的文本 <br/><br/> **多选模式**: `(value)` <br/> - `value`: 以逗号分隔的选中值字符串 |
| `search` | 在搜索框中输入文本时触发。 | `(value)`: 输入的搜索文本 |

##### Methods

可以通过 `ref` 调用组件的实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| :--- | :--- | :--- | :--- |
| `getCurrTreeData` | 获取当前组件加载的树形数据。 | - | `Array` |
| `loadRoot` | 手动重新加载根节点数据。 | - | - |