import Vue from 'vue';
import App from './App.vue';
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
import TypeNav from '@/components/TypeNav/TypeNav.vue';

import '@/mock';

import { SwiperSlide, Swiper } from 'vue-awesome-swiper';
import 'swiper/css/swiper.min.css';

import store from './store';

import router from './router';

Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);
Vue.component(TypeNav.name, TypeNav);

Vue.component('Swiper', Swiper);
Vue.component('SwiperSlide', SwiperSlide);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');