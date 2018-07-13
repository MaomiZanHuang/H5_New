<template>
<div>
<!--底部导航栏-->
  <nav class="mui-bar mui-bar-tab">
    <router-link to="/" class="mui-tab-item" :class="activeTab === '/' && 'mui-active'">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link to="/suggest" class="mui-tab-item" :class="activeTab === '/suggest' && 'mui-active'">
      <span class="mui-icon mui-icon-email"></span>
      <span class="mui-tab-label">推荐</span>
    </router-link>
    <router-link to="/order" class="mui-tab-item" :class="activeTab === '/order' && 'mui-active'">
      <span class="mui-icon mui-icon-gear"></span>
      <span class="mui-tab-label">订单</span>
    </router-link>
    <router-link to="/user" class="mui-tab-item" :class="activeTab === '/user' && 'mui-active'">
      <span class="mui-icon mui-icon-person"></span>
      <span class="mui-tab-label">我的</span>
    </router-link>
  </nav>
<!--底部导航栏结束-->
</div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: '/'
    };
  },
  watch: {
    ['$route'](to, from, next) {
      this.activeTab = to.path;
      console.log('route change!');
    }
  }
}
</script>
<style>
@import url('http://at.alicdn.com/t/font_671264_s8ia32h16ji6n7b9.css');
</style>