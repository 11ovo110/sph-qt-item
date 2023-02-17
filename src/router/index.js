import VueRouter from "vue-router";
import Vue from 'vue';
import { routes } from "./routes";
import store from "@/store";


Vue.use(VueRouter);

let push = VueRouter.prototype.push;
let replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location) {
  push.call(this, location, () => {}, () => {});
}

VueRouter.prototype.replace = function(location) {
  replace.call(this, location, () => {}, () => {});
}

let router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior(to, from) {
    return {y: 0};
  }
})

export default router;

router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token;
  let nickName = store.state.user.nickName;

  if (token) {
    if (to.path == "/login") {
      next({ path: "/home" });
    } else {
      if(nickName) {
        next();
      }else {
        try {
          await store.dispatch("getUserInfo");
          next();
        } catch (e) {
          await store.dispatch("loginOut");
          next({ path: "login" });
        }
      }
    }
  } else {
    next();
  }
});