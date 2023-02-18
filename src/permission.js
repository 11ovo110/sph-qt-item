import store from "./store";
import router from "./router";

let Whitelist = ['/pay', '/paysuccess', '/trade', '/addcarsuccess', '/center', '/center/myorder', '/center/teamorder'];

router.beforeEach(async (to, from, next) => {
  let {token, nickName} = store.state.user;
  if(token) {
    if(to.path == '/login') {
      next({path: '/home'});
    }else {
      console.log(111);
      if(nickName) {
        console.log(111);
        next();
      }else {
       try {
        await store.dispatch('getUserInfo');
        next();
       }catch(e) {
        await store.dispatch('loginOut');
        alert('账户登录失效');
        next();
       }
      }
    }
  }else {
    if(Whitelist.includes(to.path)) {
      next(false);
    }else {
      next();
    }
  }
})