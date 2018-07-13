<template>
<div>
<!--底部导航栏-->
  <nav class="mui-bar mui-bar-tab">
    <router-link to="/" class="mui-tab-item" :class="currentMenu === '/' && 'mui-active'">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link to="/square" class="mui-tab-item" :class="currentMenu === '/square' && 'mui-active'">
      <span class="mui-icon iconfont icon-msnui-bar-chart"></span>
      <span class="mui-tab-label">广场</span>
    </router-link>
    <router-link to="/order" class="mui-tab-item" :class="currentMenu === '/order' && 'mui-active'">
      <span class="mui-icon iconfont icon-order"></span>
      <span class="mui-tab-label">订单</span>
    </router-link>
    <router-link to="/user" class="mui-tab-item" :class="currentMenu === '/user' && 'mui-active'">
      <span class="mui-icon mui-icon-person"></span>
      <span class="mui-tab-label">我的</span>
    </router-link>
  </nav>
<!--底部导航栏结束-->
</div>
</template>
<script>
import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState(['currentMenu'])
  },
  mounted() {
    window.vue = this;
  }
}
</script>
<style>
</style>