<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Index from './pages/Index';

const INDEX_PATHS = ['/', '/square', '/order', '/user'];
export default {
  name: 'App',
  components: {
    Index
  },
  methods: {
    ...mapActions(['setCurrentMenu'])
  },
  watch: {
    ['$route'](to, from) {
      var path = to.path;
      if (INDEX_PATHS.indexOf(path) + 1) {
        this.setCurrentMenu(path);
      }
    }
  },
  computed: {
    ...mapState(['transitionName'])
  }
}
</script>

<style>
@import url('//at.alicdn.com/t/font_733952_enqh34b665b.css');
.child-view {
  width: 100%;
  transition: all .3s;
}

.fade-enter-active{
  transition: all .5s;
}

//显示时间持续1.5s
.fade-leave-active{
  transition: all 1s;        
}

.fade-enter, .fade-leave-active{
    opacity: 0;
}

.slide-left-enter, .slide-right-leave-active{
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0); 
} 
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0); 
  transform: translate(-100%, 0); 
}

.position-absolute {
  position: absolute;
}
</style>
