import Home from '@/pages/Home/Home.vue';
import Login from '@/pages/Login/Login.vue';
import Register from '@/pages/Register/Register.vue';
import Search from '@/pages/Search';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import shopCar from '@/pages/ShopCart';

export const routes = [
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
    path: '/detail/:skuId',
    component: Detail,
    meta: {flag: true},
    name: 'detail'
  },
  {
    path: '/addcartsuccess/:skuNum',
    component: AddCartSuccess,
    meta: {flag: true},
    name: 'success'
  },
  {
    path: '/shopcar',
    component: shopCar,
    meta: {flag: true}
  },
  {
    path: '/',
    redirect: '/home'
  }
]