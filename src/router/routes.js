import Home from '@/pages/Home/Home.vue';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
import Detail from '@/pages/Detail';
import ShopCart from '@/pages/ShopCart';
import AddCartSuccess from '@/pages/AddCartSuccess';
import Center from '@/pages/Center';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';
import Trade from '@/pages/Trade';

export const routes = [
  {
    path: '/home',
    component: () => import('@/pages/Home/Home.vue'),
    meta: {flag: true}
  },
  {
    path: '/login',
    component: () => import('@/pages/Login'),
    meta: {flag: false}
  },
  {
    path: '/register',
    component: () => import('@/pages/Register'),
    meta: {flag: false}
  },
  {
    path: '/search/:keyword?',
    component: () => import('@/pages/Search'),
    meta: {flag: true},
    name: 'search'
  },
  {
    path: '/detail/:skuId',
    component: () => import('@/pages/Detail'),
    meta: {flag: true}
  },
  {
    path: '/addcartsuccesss/:skuNum',
    component: () => import('@/pages/AddCartSuccess'),
    meta: {flag: true},
    name: 'success'
  },
  {
    path: '/shopcar',
    component: () => import('@/pages/ShopCart'),
    meta: {flag: true}
  },
  {
    path: '/center',
    component: () => import('@/pages/Center'),
    meta: {flag: true},
    name: '个人中心',
    children: [
      {
        path: 'myorder',
        component: () => import('@/pages/Center/MyOrder/MyOrder.vue'),
        meta: {flag: true},
        name: '个人订单'
      },
      {
        path: 'teamorder',
        component: () => import('@/pages/Center/TeamOrder/TeamOrder.vue'),
        meta: {flag: true},
        name: '团购订单'
      },
      {
        path: '/center',
        redirect: '/center/myorder'
      }
    ]
  },
  {
    path: '/pay',
    component: () => import('@/pages/Pay'),
    meta: {flag: true},
    name: '支付',
    beforeEnter: (to, from, next) => {
      if(from.path == '/trade') {
        next();
      }else {
        next(false);
      }
    }
  },
  {
    path: '/paysuccess',
    component: () => import('@/pages/PaySuccess'),
    meta: {flag: true},
    name: '支付成功',
    beforeEnter: (to, from, next) => {
      if(from.path == '/pay') {
        next();
      }else {
        next(false);
      }
    }
  },
  {
    path: '/trade',
    component: () => import('@/pages/Trade'),
    meta: {flag: true},
    name: '用户订单页',
    beforeEnter: (to, from, next) => {
      if(from.path == '/shopcar') {
        next();
      }else {
        next(false);
      }
    }
  },
  {
    path: '/',
    redirect: '/home'
  }
]