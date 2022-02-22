<template>
  <div id="app">
    <div class="m-area">
      <VueAmazingSelecter
        :selectData="selectData"
        :selValue="selValue"
        name="name"
        value="value"
        placeholder="请选择城市"
        :disabled="false"
        :width="160"
        :num="6"
        @getValue="getValue" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selectData: [
        {
          name: '北京市',
          value: 1
        },
        {
          name: '上海市',
          value: 2
        },
        {
          name: '郑州市',
          value: 3
        },
        {
          name: '纽约市',
          value: 4
        },
        {
          name: '旧金山',
          value: 5
        },
        {
          name: '悉尼市',
          value: 6
        },
        {
          name: '伦敦市',
          value: 7
        },
        {
          name: '巴黎市',
          value: 8
        }
      ],
    }
  },
  created () {
    // 初始化下拉框
    this.selValue = this.selectData[0].value
  },
  watch: {
    val (to, from) {
      console.log(from + '=>' + to)
    }
  },
  methods: {
    getValue (name, value, index) {
      console.log('item:', name, value, index)
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
