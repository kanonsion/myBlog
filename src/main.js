import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/scss/index.scss';
import mavonEditor from 'mavon-editor';
import svgIcon from '@/components/svgIcon';

Vue.component('svg-icon', svgIcon);

Vue.config.productionTip = false;
Vue.use(ElementUI).use(mavonEditor);
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
