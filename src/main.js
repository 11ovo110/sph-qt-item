import Vue from 'vue'
import App from './App.vue'
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

Vue.config.productionTip = false;
Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);

new Vue({
  render: h => h(App),
}).$mount('#app')
