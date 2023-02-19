import store from "./store";
import router from "./router";

let whitelist = ['/center', '/center/myorder', '/center/teamorder', '/trade', '/pay', '/paysuccess', '/shopcar']; 

router.beforeEach(async (to, from, next) => {
  let { token, nickName } = store.state.user;
  if (token) {
    if (to.path == "/login") {
      next({ path: "/home" });
    } else {
      if (nickName) {
        next();
      } else {
        try {
          await store.dispatch("getUserInfo");
          next();
        } catch (e) {
          await store.dispatch("loginOut");
          alert("账户登录失效");
          next();
        }
      }
    }
  } else {
    if (whitelist.includes(to.path)) {
      next({
        path: "/login",
        query: {
          redirect: to.path,
        },
      });
    } else {
      next();
    }
  }
});