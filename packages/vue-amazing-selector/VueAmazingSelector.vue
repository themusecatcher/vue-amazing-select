<template>
  <div class="vue-amazing-selector" id="vue-amazing-selector" :style="`height: ${height}px;`">
    <div
      :class="['m-select-wrap', { 'hover': !disabled, 'focus': showOptions, 'disabled': disabled }]"
      :style="`width: ${width - 2}px; height: ${height - 2}px;`"
      @click="disabled ? e => e.preventDefault() : openSelect()">
      <div
        :class="['u-select-input', { 'placeholder': !selectedName }]"
        :style="`line-height: ${height - 2}px;width: ${width - 37}px; height: ${height - 2}px;`"
        :title="selectedName"
      >{{ selectedName || placeholder }}</div>
      <svg @click="openSelect" :class="['triangle', { 'rotate': showOptions }]" viewBox="64 64 896 896" data-icon="down" aria-hidden="true" focusable="false" class=""><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
    </div>
    <transition name="fade">
      <div
        v-show="showOptions"
        class="m-options-panel"
        :style="`top: ${height + 6}px; line-height: ${height - 12}px; max-height: ${ num * (height - 2) }px; width: ${width}px;`">
        <p
          :class="['u-option', {'option-selected': item[name]===selectedName, 'option-hover': !item.disabled&&item[value]===hoverValue, 'option-disabled': item.disabled }]"
          :title="item[name]"
          @mouseenter="onEnter(item[value])"
          @click="item.disabled ? e => e.preventDefault() : getValue(item[name], item[value], index)"
          v-for="(item, index) in selectData" :key="index"
        >
          {{ item[name] }}
        </p>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'VueAmazingSelector',
  props: {
    selectData: {
      type: Array,
      default: () => {
        return []
      }
    },
    selectedValue: { // 下拉初始默认值
      type: [Number, String],
      default: ''
    },
    name: { // 下拉字典项的name值
      type: String,
      default: 'name'
    },
    value: { // 下拉字典项的value值
      type: String,
      default: 'value'
    },
    placeholder: { // 下拉框默认文字
      type: String,
      default: '请选择'
    },
    disabled: { // 是否禁用下拉
      type: Boolean,
      default: false
    },
    width: { // 下拉框宽度
      type: Number,
      default: 200
    },
    height: { // 下拉框高度
      type: Number,
      default: 36
    },
    num: { // 下拉面板最多能展示的下拉项数，超过滚后动显示
      type: Number,
      default: 6
    }
  },
  data () {
    return {
      selectedName: '',
      hoverValue: '', // 鼠标悬浮项的value值
      showOptions: false
    }
  },
  methods: {
    blur (e) {
      let el = document.getElementById('vue-amazing-selector')
      // 当点击事件的e.path不包括目标指定元素时，并且下拉面板为展开状态
      if (!e.path.includes(el) && this.showOptions) {
        this.showOptions = false
      }
      // 自动清理自己，避免内存泄漏
      this.$once('hook:beforeDestroy', function () {
        removeEventListener('mousedown', this.blur)
      })
    },
    onEnter (value) {
      this.hoverValue = value
    },
    openSelect () {
      this.showOptions = !this.showOptions
    },
    getValue (name, value, index) { // 选中下拉项后的回调
      this.selectedName = name
      this.hoverValue = value
      this.showOptions = false
      this.$emit('getValue', name, value, index)
    }
  },
  watch: {
    selectedValue (to) {
      this.hoverValue = to
      for (let item of this.selectData) {
        if (item[this.value] === to) {
          this.selectedName = item[this.name]
          break
        }
      }
    }
  },
  mounted () {
    addEventListener('mousedown', this.blur) // 添加blur监听事件
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
.vue-amazing-selector {
  position: relative;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  color: rgba(0,0,0,.65);
}
// 渐变过渡效果
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.m-select-wrap {
  position: relative;
  display: inline-block;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  .u-select-input {
    display: block;
    text-align: left;
    margin-left: 11px;
    margin-right: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .placeholder {
    color: #bfbfbf;
  }
  .triangle {
    position: absolute;
    top: 50%;
    right: 12px;
    width: 12px;
    height: 12px;
    fill: rgba(0,0,0,.25);
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transition: all 0.3s ease-in-out;
    pointer-events: none;
  }
  .rotate {
    transform: translateY(-50%) rotate(180deg);
    -webkit-transform: translateY(-50%) rotate(180deg);
  }
}
.hover { // 悬浮时样式
  &:hover {
    border-color: @themeColor;
  }
}
.focus { // 激活时样式
  border-color: @themeColor;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 20%);
}
.disabled { // 下拉禁用样式
  color: rgba(0,0,0,.25);
  background: #f5f5f5;
  user-select: none;
  cursor: not-allowed;
}
.m-options-panel {
  position: absolute;
  z-index: 999;
  overflow: auto;
  background: #FFF;
  padding: 4px 0;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,15%);
  .u-option { // 下拉项默认样式
    text-align: left;
    position: relative;
    display: block;
    padding: 5px 12px;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    transition: background .3s ease;
  }
  .option-selected { // 被选中的下拉项样式
    font-weight: 600;
    background: #fafafa;
  }
  .option-hover { // 悬浮时的下拉项样式
    background: #e6f7ff;
  }
  .option-disabled { // 禁用某个下拉选项时的样式
    color: rgba(0,0,0,.25);
    user-select: none;
    cursor: not-allowed;
  }
}
</style>
