//入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router';
import './plugins/element.js'
//导入全局样式表
import './assets/css/global.css'
//导入字体图标
import './assets/fonts/iconfont.css'
//导入 axios
import axios from 'axios'
//配置路由请求路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
//axios其你去拦截器
axios.interceptors.request.use(function(config){
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config;
},function(error){
  console.log(error)
})


Vue.prototype.$http = axios
Vue.use(VueRouter)
//
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
