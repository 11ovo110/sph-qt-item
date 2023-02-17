import router from "./router";
import store from "./store";

router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token;
  let nickName = store.state.user.nickName;
  document.title = '尚品汇' + '-' + to.path + '😎😎😎';
  if(token) {
    if(to.path == '/login') {
      next({path: '/home'});
    }else {
      if(nickName) {
        next();
      }else {
        try{
          await store.dispatch('getUserInfo');
          next();
        }catch(e) {
          await store.dispatch('loginOunt');
          next({path: '/login'})
        }
      }
    }
  }else {
    next();
  }
})
