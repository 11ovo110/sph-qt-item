import store from "./store";
import router from "./router";

router.beforeEach(async (to, from, next) => {
  let {token, nickName} = store.state.user;
  if(token) {
    if(to.path == '/login') {
      next({path: '/home'});
    }else {
      if(nickName) {
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
    next();
  }
})