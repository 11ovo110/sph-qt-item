import Vue from 'vue';
import VueRouter from 'vue-router';

import {routes} from './routes';

Vue.use(VueRouter);


let push = VueRouter.prototype.push;
let replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location) {
  push.call(this, location, () => {}, () => {});
}

VueRouter.prototype.replace = function(location) {
  replace.call(this, location, () => {}, () => {});
}

export default new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior(to, from) {
    return {y: 0};
  }
})



