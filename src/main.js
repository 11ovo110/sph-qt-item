import Vue from "vue";
import App from './App.vue';
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
import TypeNav from '@/components/TypeNav/TypeNav.vue';
import router from "./router";
import store from "./store";

import { SwiperSlide, Swiper } from "vue-awesome-swiper";
import 'swiper/css/swiper.min.css';

Vue.component('Swiper', Swiper);
Vue.component('SwiperSlide', SwiperSlide)

Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);
Vue.component(TypeNav.name, TypeNav);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');