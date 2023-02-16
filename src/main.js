import Vue from 'vue';
import App from './App.vue';

import Footer from '@/components/Footer/Footer.vue';
import Header from '@/components/Header/Header.vue'
import TypeNav from '@/components/TypeNav/TypeNav.vue'

Vue.component(Footer.name, Footer);
Vue.component(Header.name, Header);
Vue.component(TypeNav.name, TypeNav);

new Vue({
  render: h => h(App)
}).$mount('#app');