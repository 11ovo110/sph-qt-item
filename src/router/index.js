import VueRouter from "vue-router";
import Vue from 'vue';
import { routes } from "./routes";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior(to, from) {
    return {y: 0};
  }
})