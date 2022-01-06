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

属性 | 说明 | 参数
|-------- | ----- | -----|
selectData | 下拉列表数据 | -
selValue | 下拉列表默认选中 | -
name | 下拉列表数据的key名称 | -
value | 下拉列表数据的value名称 | -
placeholder | 下拉框的placeholder | -
disabled | 是否禁用 | -
width | 下拉框的宽度 | -
num | 下拉列表最多展示的条数 | -
