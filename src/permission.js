import router from "./router";
import store from "./store";

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
          alert('账号登陆失效');
          next({path: '/login'});
        }
      }
    }
  }else {
    next();
  }
}) 