---
title: 业务选择器组件
nav: mobile组件
group:
  title: 通用
---

#### 业务选择器组件

author: 孔德忠

k-select-biz-component 是一个功能丰富的业务选择器组件，支持单选/多选、远程数据加载、搜索、分页加载等功能。组件提供文本展示和选择两种模式，并支持查看详情功能。

#### 组件路径
> **组件已经全局注册过，无须再次引入**

`@/components/eqds/k-form/k-select-biz-component/k-select-biz-component`

#### 使用示例

**基础用法**

```vue
<template>
  <k-select-biz-component
    v-model="selectedValue"
    list-url="/api/user/list"
    display-key="realname"
    value-key="username"
    :multiple="false"
    placeholder="请选择用户"
    @change="handleChange" />
</template>

<script>
export default {
  data() {
    return {
      selectedValue: '',
    };
  },
  methods: {
    handleChange(value, item) {
      console.log('选中值:', value);
      console.log('选中项:', item);
    },
  },
};
</script>
```

**自定义**

```vue
<k-select-biz-component
  v-model="model.topicId"
  name="考评表"
  value-key="id"
  :multiple="false"
  :list-url="getUrl()"
  query-param-text="考评表名称"
  placeholder="请选择考评表"
  :disabled="model.assessTypeId ? false : true"
  :columns="[
    { title: '考评表名称', dataIndex: 'name' },
    { title: '申报开始日期', dataIndex: 'beginDate' },
    { title: '申报结束日期', dataIndex: 'endDate' },
  ]"
  @change="changeTopic" />
```

#### Props 参数

| 参数                | 说明                                     | 类型          | 默认值     | 是否必填 |
| ------------------- | ---------------------------------------- | ------------- | ---------- | -------- |
| value               | 绑定值（v-model）                        | String/Number | `''`       | 否       |
| multiple            | 是否多选                                 | Boolean       | `true`     | 否       |
| name                | 组件名称                                 | String        | `''`       | 否       |
| listUrl             | 数据列表接口地址                         | String        | -          | 是       |
| valueUrl            | 根据 value 获取显示文本的接口地址        | String        | `''`       | 否       |
| displayKey          | 显示字段的键名                           | String        | `'name'`   | 否       |
| valueKey            | 值字段的键名                             | String        | `'id'`     | 否       |
| labelKey            | 标签字段的键名                           | String        | `'label'`  | 否       |
| queryParamCode      | 查询条件字段名                           | String        | `'name'`   | 否       |
| queryParamText      | 查询条件文字                             | String        | `''`       | 否       |
| border              | 是否显示边框                             | Boolean       | `false`    | 否       |
| disabled            | 是否禁用                                 | Boolean       | `false`    | 否       |
| placeholder         | 占位提示文字                             | String        | `'请选择'` | 否       |
| columns             | 列配置数组                               | Array         | `[]`       | 否       |
| mode                | 模式（text: 仅显示文字, select: 选择器） | String        | `'select'` | 否       |
| config              | 其他配置项                               | Object        | `{}`       | 否       |
| detailUrlMobile     | 详情页面路径（以 /pages 开头）           | String        | `''`       | 否       |
| isOnlyConfirmSearch | 是否仅在点击搜索时请求数据               | Boolean       | `true`     | 否       |
| changeValueGetData  | 值改变时是否通过请求回显数据             | Boolean       | `true`     | 否       |

#### Events 事件

| 事件名 | 说明           | 回调参数                             |
| ------ | -------------- | ------------------------------------ |
| input  | 值变化时触发   | (value: String/Number)               |
| change | 选择变化时触发 | (value: String/Number, item: Object) |

#### Methods 方法

| 方法名      | 说明                 | 参数                |
| ----------- | -------------------- | ------------------- |
| init        | 初始化组件           | -                   |
| search      | 搜索数据             | (keyword: String)   |
| getDictList | 获取数据列表         | (pageNo, pageSize)  |
| initValue   | 初始化回显值         | -                   |
| getLabel    | 根据 ID 获取显示文本 | (id: String/Number) |
| open        | 打开选择器           | -                   |


#### 注意事项

1. **接口数据格式要求**：

   - 接口需返回 `{ success: true, result: { records: [], current, total, size } }` 格式
   - 或 `{ success: true, result: [] }` 格式

2. **多选值格式**：组件内部使用逗号分隔的字符串存储多选值（如 `"1,2,3"`）

3. **详情功能**：设置 `detailUrlMobile` 后，会在选择器右侧显示"详情"按钮，点击可跳转到详情页

4. **回显机制**：组件会根据 `value` 自动请求接口获取对应的显示文本

5. **分页加载**：支持下拉加载更多数据，默认每页 5 条

6. **禁用状态**：设置 `disabled` 为 `true` 时，无法打开选择器且不显示清除按钮
