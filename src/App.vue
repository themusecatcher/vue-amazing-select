<template>
  <div id="app">
    <div class="m-area">
      <VueAmazingSelector
        :options="options"
        label="label"
        value="value"
        placeholder="请选择城市"
        :disabled="false"
        :width="160"
        :height="36"
        :num="6"
        allowClear
        v-model="selectedValue"
        @change="onChange" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      options: [
        {
          label: '北京市',
          value: 1
        },
        {
          label: '上海市上海市上海市上海市',
          value: 2,
          disabled: true
        },
        {
          label: '郑州市',
          value: 3
        },
        {
          label: '纽约市纽约市纽约市纽约市',
          value: 4
        },
        {
          label: '旧金山',
          value: 5
        },
        {
          label: '悉尼市',
          value: 6
        },
        {
          label: '伦敦市',
          value: 7
        },
        {
          label: '巴黎市',
          value: 8
        }
      ],
      selectedValue: 1
    }
  },
  watch: {
    selectedValue (to) {
      console.log('selectedValue:', to)
    }
  },
  mounted () {
    setTimeout(() => { // 模拟接口调用
      this.selectedValue = 3
    }, 1000)
  },
  methods: {
    onChange (value, label, index) {
      console.log('item:', value, label, index)
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.m-area {
  margin: 0 auto;
  background: #FFFFFF;
  width: 1200px;
}
</style>
