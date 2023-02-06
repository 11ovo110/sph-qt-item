import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/home/Home.vue';
import Login from '@/pages/login/Login.vue';
import Register from '@/pages/register/Register.vue';
import Search from '@/pages/search/Search.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {flag: true}
    },
    {
      path: '/login',
      component: Login,
      meta: {flag: false}
    },
    {
      path: '/register',
      component: Register,
      meta: {flag: false}
    },
    {
      path: '/search/:keyword?',
      component: Search,
      meta: {flag: true},
      name: 'search'
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})