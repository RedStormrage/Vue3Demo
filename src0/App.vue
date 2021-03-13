<template>
  <div>今天天气真不错</div>
</template>


<script lang="ts">
// 这里可以写TS代码
//这里的defineComponent 是一个函数， 目的是定义组件，内部可以传入一个配置对象
import { defineComponent } from 'vue';

// 暴露出去一个定义好的组件
export default defineComponent({
  // 组件名字
  name: 'App',
  setup() {
    console.log('是的')
  }
});
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
</style>
