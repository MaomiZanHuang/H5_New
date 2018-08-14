<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view class="child-view"></router-view>
      </keep-alive>
      <router-view v-else class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Index from './pages/Index';

const INDEX_PATHS = ['/', '/square', '/order', '/user/index'];
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
  mounted() {
    var path = this.$route.path;
    console.log('-------');
    if (INDEX_PATHS.indexOf(path) + 1) {
      this.setCurrentMenu(path);
    }
  },
  computed: {
    ...mapState(['transitionName'])
  }
}
</script>

<style>
@import url('//at.alicdn.com/t/font_733952_or6jqxxomr8.css');
@import url('//cdn.bootcss.com/mui/3.7.1/css/mui.min.css');
@import url('./assets/css/common.css');
@import url('./assets/css/reset.css');

.child-view {
  width: 100%;
  transition: all .3s ease;
}

.fade-enter-active{
  transition: all .5s ease;
}

//显示时间持续1.5s
.fade-leave-active{
  transition: all 1s ease;        
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
