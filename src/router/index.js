import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home/Home.vue';
import Login from '@/pages/Login/Login.vue'
import Register from '@/pages/Register/Register.vue';
import Search from '@/pages/Search/Search.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})