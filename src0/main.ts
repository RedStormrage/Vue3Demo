// 程序的主入口文件，但是是一个TS文件
// 引入createApp函数，创建对应的应用，产生应用的实例
import { createApp } from 'vue'
// 引入App组件(所有组件的父级组件)
import App from './App.vue'
// 创建App应用返回对应的实例对象，调用mount方法进行挂载到id为app的div上去
createApp(App).mount('#app')
// Vue3中将很多的函数都放到了vue里进行封装，需要哪一个就引入即可
