import Vue from 'vue';
import Spin from './Spin.vue';

let SpinConstructor = Vue.extend(Spin);

 const Loading = function (options) {
  let instance = new SpinConstructor();
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  return instance.vm;
};

export default function () {
  Vue.prototype.$loading = Loading();
}