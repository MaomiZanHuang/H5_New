import Vue from 'vue';
import Tip from './Tip.vue';

let TipCtr = Vue.extend(Tip);

 const TipInstall = function (options) {
  let instance = new TipCtr();
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  return instance.vm;
};

export default function () {
  Vue.prototype.$tip = TipInstall();
}