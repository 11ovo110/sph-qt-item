import VueRouter from "vue-router";
import Vue from 'vue';
import Home from '@/pages/Home/Home.vue';
import Login from '@/pages/Login/Login.vue';
import Register from '@/pages/Register/Register.vue';
import Search from '@/pages/Search/Search.vue';

Vue.use(VueRouter);

let push = VueRouter.prototype.push;
let replace = VueRouter.prototype.replace;

Vue.prototype.push = function(location) {
  push.call(this, location, () => {}, () => {});
}

Vue.prototype.replace = function(location) {
  replace.call(this, location, () => {}, () => {});
}

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
