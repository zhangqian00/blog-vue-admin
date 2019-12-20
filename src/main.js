// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store/index.js';
import router from './router'
import elementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(elementUi);
import '@/assets/css/global.css';
Vue.config.productionTip = false

import Axios from 'axios';
Vue.prototype.$ajax = Axios;
import Qs from 'qs';
import Config from '@/assets/api/api.js';
console.log(Config)
Vue.prototype.$httpConfig = Config;

import Moment from 'moment';
Vue.prototype.$moment = Moment;
Vue.filter('dateFormat',(val)=>{ // 全局过滤器
	if(val){
		return Moment(val).format('YYYY-MM-DD');
	}else {
		return '';
	}
});
Vue.filter('dateFormat2',(val)=>{ // 全局过滤器
	if(val){
		return Moment(val).format('YYYY-MM-DD hh:mm:ss');
	}else {
		return '';
	}
});

Axios.interceptors.request.use((config)=>{
	config.data = Qs.stringify(config.data);
	return config;
},(err)=>{
	return Promise.reject(err);
});
Axios.interceptors.response.use((res)=>{

	return res;
},(err)=>{
	return Promise.reject(err);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
