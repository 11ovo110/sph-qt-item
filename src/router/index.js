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
      component: Home,
      meta: {
        flag: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        flag: false
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        flag: false
      }
    },
    {
      name: 'search',
      path: '/search/:keyword?',
      component: Search,
      meta: {
        flag: true
      }
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})