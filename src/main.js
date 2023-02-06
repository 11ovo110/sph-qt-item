import Vue from 'vue';
import App from './App.vue';

// 引入全局组件
import Footer from '@/components/Footer/Footer.vue';
import Header from '@/components/Header/Header.vue';
import TypeNav from '@/components/TypeNav/TypeNav.vue';

// 注册全局组件
Vue.component(Footer.name, Footer);
Vue.component(Header.name, Header);
Vue.component(TypeNav.name, TypeNav);

// 引入路由
import router from './router';

new Vue({
  render: h => h(App),
  router
}).$mount('#app');