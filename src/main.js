import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

const mock = true;
if(mock){
  require('./mock/api.js');
}
//axios 默认设置
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 返回错误接口拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';
  }else{
    return res.msg;
  }
}, function(error){
  return Promise.reject(error);
})
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
