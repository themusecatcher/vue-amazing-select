# vue-amazing-selector

## 安装插件

```
npm install vue-amazing-selector
或：yarn add vue-amazing-selector
```

## 引入并注册插件

```
import Vue from 'vue'
import VueAmazingSelector from 'vue-amazing-selector'
import 'vue-amazing-selector/lib/selector.css' // 引入样式
Vue.use(VueAmazingSelector)
```

## 基本用法示例

```
<VueAmazingSelector
  :selectData="selectData"
  :selectedValue="selectedValue"
  name="name"
  value="value"
  placeholder="请选择城市"
  :disabled="false"
  :width="160"
  :height="36"
  :num="6"
  @getValue="getValue"
/>
```

## Props

属性 | 说明 | 类型 | 默认值
:--- | :--- | :--- | :---
selectData | 下拉列表数据 | Array | []
selectedValue | 下拉初始默认值 | String/Number | ''
name | 下拉列表每项的name名称 | String | name
value | 下拉列表每项的value名称 | String | value
placeholder | 下拉框默认文字 | String | 请选择
disabled | 是否禁用 | Boolean | false
width | 下拉框的宽度 | Number | 200
height | 下拉框的高度 | Number | 36
num | 下拉列表最多展示的条数 | Number | 6

## Events

事件名 | 说明 | 返回值
:--- | :--- | :---
getValue | 选择某项下拉后的回调函数 | name, value, index（key值，value值，索引值）
