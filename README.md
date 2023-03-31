# vue-amazing-selector

## An Amazing Select Component For Vue2

## Install & Use

```sh
npm install vue-amazing-selector
#or
yarn add vue-amazing-selector
```

Import and register component

**Global**

```js
import Vue from 'vue'
import VueAmazingSelector from 'vue-amazing-selector'

Vue.use(VueAmazingSelector)
```

**Local**

```vue
<template>
  <VueAmazingSelector
    :options="options"
    label="label"
    value="value"
    placeholder="请选择"
    :disabled="false"
    :width="160"
    :height="36"
    :num="6"
    v-model="selectedValue"
    @change="onChange" />
</template>
<script>
import { VueAmazingSelector } from 'vue-amazing-selector'

export default {
  components: {
    VueAmazingSelector
  }
}
</script>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
options | 选项数据 | Array | []
label | 选择器字典项的文本字段名 | String | label
value | 选择器字典项的值字段名 | String | value
placeholder | 选择框默认文字 | String | 请选择
disabled | 是否禁用下拉 | Boolean | false
allowClear | 是否支持清除 | Boolean | false
width | 选择框宽度 | Number | 200
height | 选择框高度 | Number | 36
num | 下拉面板最多能展示的下拉项数，超过后滚动显示 | Number | 6
selectedValue | （v-model）当前选中的option条目 | /Number/String | null

## Events

事件名 | 说明 | 返回值
:--- | :--- | :---
change | 选择某项下拉后的回调函数 | value, label, index（value值，label文本值，index索引值）
