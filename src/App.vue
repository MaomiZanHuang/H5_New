<template>
  <div id="app">
    <Activity v-if="showActivity" @close="showActivity = false"/>
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
import {timeFormat} from '@/utils/index';
import Index from './pages/Index';
import Activity from '@/components/Activity';

const INDEX_PATHS = ['/', '/square', '/order', '/user/index'];

export default {
  name: 'App',
  components: {
    Index,
    Activity
  },
  data() {
    return {
      showActivity: false
    };
  },
  watch: {
    ['$route'](to, from) {
      var path = to.path;
      if (INDEX_PATHS.indexOf(path) + 1) {
        this.setCurrentMenu(path);
      }
    }
  },
  methods: {
    ...mapActions(['setCurrentMenu', 'getUserPoints'])
  },
  mounted() {
    var path = this.$route.path;
    if (INDEX_PATHS.indexOf(path) + 1) {
      this.setCurrentMenu(path);
    }

    // 每次启动的时候刷新下用户积分
    this.getUserPoints()
      .then(r => {})
      .catch(err => {
        console.log(err);
        this.$tip.show('网络连接失败！');
      });

    // 规则:每天弹一次
    if (localStorage['last_showdate'] !== timeFormat(+new Date, 'yyyy-MM-dd')) {
      setTimeout(() => {
        this.showActivity = true;
      }, 5000);
      localStorage['last_showdate'] = timeFormat(+new Date, 'yyyy-MM-dd');
    }
  },
  computed: {
    ...mapState(['transitionName'])
  }
}
</script>

<style>
@import url('//at.alicdn.com/t/font_733952_qhv8793a7rd.css');
@import url('https://cdn.bootcss.com/mui/3.7.1/css/mui.min.css');
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
