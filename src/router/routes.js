import Home from '@/pages/Home/Home.vue';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
import ShopCart from '@/pages/ShopCart';
import AddCartSuccess from '@/pages/AddCartSuccess';

export const routes = [
  {
    path: '/home',
    comment: Home,
    meta: {flag: true}
  },
  {
    path: '/login',
    comment: Login,
    meta: {flag: false}
  },
  {
    path: '/register',
    comment: Register,
    meta: {flag: false}
  },
  {
    path: '/search/:keyword?',
    comment: Search,
    meta: {flag: true},
    name: 'search'
  },
]