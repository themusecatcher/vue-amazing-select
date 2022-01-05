<template>
  <div class="m-select-wrap" :style="`width: ${width}px;`">
    <input
      :class="['u-select-input', { 'disabled': disabled }]"
      :style="`width: ${width - 32}px;`"
      type="text"
      :disabled="disabled"
      :placeholder="placeholder"
      readonly
      :title="selectName"
      @click="openSelect"
      @blur="onBlur"
      v-model="selectName" />
    <div :class="['triangle-down', { 'rotate': rotate, 'disabled': disabled }]" @click="openSelect"></div>
    <div :class="['m-options-panel', showOptions ? 'show': 'hidden']" :style="`max-height: ${ num * 40 }px; width: ${width - 2}px;`">
      <p class="u-option" :title="item[name]" @mousedown="getValue(item[name], item[value], index)" v-for="(item, index) in selectData" :key="index">
        {{ item[name] }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VueAmazingSelecter',
  props: {
    selectData: {
      type: Array,
      default: () => {
        return []
      }
    },
    selValue: { // 将该prop值作为selV的初始值
      default: undefined
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    width: { // 下拉框宽度
      type: Number,
      default: 200
    },
    num: { // 下拉面板最多要展示的条数，查过滚动显示
      type: Number,
      default: 8
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: { // 下拉字典项的key值
      type: String,
      default: 'name'
    },
    value: { // 下载字典项的value值
      type: String,
      default: 'name'
    }
  },
  computed: {
    selectName () {
      let selName
      this.selectData.forEach(item => {
        if (item[this.value] === this.selectValue) {
          selName = item[this.name]
        }
      })
      return selName
    },
    selectValue: {
      get () {
        return this.selV
      },
      set (newVal) {
        this.selV = newVal
      }
    }
  },
  data () {
    return {
      selV: this.selValue,
      rotate: false,
      showOptions: false
    }
  },
  methods: {
    openSelect () {
      this.showOptions = !this.showOptions
      this.rotate = !this.rotate
    },
    getValue (key, value, index) {
      this.selectValue = value
      this.$emit('getValue', key, value, index)
    },
    onBlur () {
      this.showOptions = false
      this.rotate = false
    }
  }
}
</script>
<style lang="less" scoped>
@themeColor: #1890ff; // 自定义主题色
input:focus {
	outline: none;
}
input, p {
  margin: 0;
  padding: 0;
}
.m-select-wrap {
  display: inline-block;
  width: 290px;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  position: relative;
  font-weight: 400;
  color: #444444;
  .u-select-input {
    padding-left: 10px;
    width: 258px;
    height: 38px;
    border: 1px solid #d7d7d7;
    cursor: pointer;
    padding-right: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:focus {
      border: 1px solid @themeColor;
    }
  }
  .triangle-down { // 下三角
    width: 12px;
    height: 7px;
    font-size: 0;
    background: url('./images/triangle.png') no-repeat center top;
    position: absolute;
    top: 17px;
    right: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
  .rotate {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
  }
  .disabled {
    cursor: default;
    pointer-events: none;
  }
  .m-options-panel {
    position: absolute;
    overflow-y: auto;
    background: #FFFFFF;
    width: 288px;
    border: 1px solid @themeColor;
    border-top: none;
    top: 40px;
    left: 0;
    color: #444;
    .u-option {
      padding: 0 20px;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap; // 溢出显示省略号
      cursor: pointer;
    }
    .u-option:hover {
      // background: #EEEEEE;
      background: rgba(64,169,255,.1)
    }
  }
  .show {
    display: block;
  }
  .hidden {
    display: none;
  }
}
</style>
