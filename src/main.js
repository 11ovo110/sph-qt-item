import Vue from 'vue';
import App from './App.vue';

import Footer from '@/components/Footer/Footer.vue';
import Header from '@/components/Header/Header.vue'
import TypeNav from '@/components/TypeNav/TypeNav.vue'
import { SwiperSlide, Swiper } from 'vue-awesome-swiper';
import Pagination from '@/components/Pagination';
import 'swiper/css/swiper.min.css';
import '@/mock';
import router from './router';
import store from './store';
import './permission';
import * as ajax from '@/api';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload'

import loadimage from '@/assets/enter.gif';
import errorimage from '@/assets/leave.gif';


Vue.use(VueLazyload, {
  error: errorimage,
  loading: loadimage,
})

Vue.prototype.$ajax = ajax;

Vue.use(ElementUI);
Vue.component(Footer.name, Footer);
Vue.component(Header.name, Header);
Vue.component(TypeNav.name, TypeNav);
Vue.component(Pagination.name, Pagination);

Vue.component('Swiper', Swiper);
Vue.component('SwiperSlide', SwiperSlide);

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
}).$mount('#app');