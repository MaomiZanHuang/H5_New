<template>
<div>
<!--底部导航栏-->
  <nav class="mui-bar mui-bar-tab">
    <router-link to="/" class="mui-tab-item mui-active">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link to="Suggest" class="mui-tab-item">
      <span class="mui-icon mui-icon-email"></span>
      <span class="mui-tab-label">推荐</span>
    </router-link>
    <router-link to="" class="mui-tab-item">
      <span class="mui-icon mui-icon-gear"></span>
      <span class="mui-tab-label">订单</span>
    </router-link>
    <router-link to="/user" class="mui-tab-item">
      <span class="mui-icon mui-icon-person"></span>
      <span class="mui-tab-label">我的</span>
    </router-link>
  </nav>
<!--底部导航栏结束-->
</div>
</template>
<style>
@import url('http://at.alicdn.com/t/font_671264_s8ia32h16ji6n7b9.css');
</style>