import router from "./router";
import store from "./store";

router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token;
  let nickName = store.state.user.nickName;
  let num = Math.floor(Math.random() * 4);
  let number = Math.floor(Math.random() * 4);
  let str = ['🤔', '😎', '🤨', '🫠'];
  document.title = '尚品汇' + '-' + to.path + str[num] + str[number];
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
          alert('令牌过期或者有误')
          next({path: '/login'})
        }
      }
    }
  }else {
    next();
  }
})
