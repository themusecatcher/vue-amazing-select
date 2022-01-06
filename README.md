# vue-amazing-select

## 安装插件

```
npm install vue-amazing-selecter
或：yarn add vue-amazing-selecter
```

## 引入并注册插件

```
import Vue from 'vue'
import VueAmazingSelecter from 'vue-amazing-selecter'
import 'vue-amazing-selecter/lib/selecter.css' // 引入样式
Vue.use(VueAmazingSelecter)
```

## 基本用法

```
<VueAmazingSelecter
  :selectData="selectData"
  :selValue="selValue"
  name="name"
  value="value"
  placeholder="请选择城市"
  :disabled="false"
  :width="160"
  :num="6"
  @getValue="getValue"
/>
```

## API

属性 | 说明 | 类型 | 默认值
:--- | :--- | :--- | :---
selectData | 下拉列表数据 | Array | []
selValue | 下拉列表默认选中 | String/Number | undefined
name | 下拉列表数据的key名称 | String | name
value | 下拉列表数据的value名称 | String | value
placeholder | 下拉框的placeholder | String | 请选择
disabled | 是否禁用 | Boolean | false
width | 下拉框的宽度 | Number | 200
num | 下拉列表最多展示的条数 | Number | 8

事件名 | 说明 | 返回值
:--- | :--- | :---
getSelectedData | 选择某项下拉后的回调函数 | name, value, index（key值，value值，索引值）
