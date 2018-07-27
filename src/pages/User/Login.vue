<template>
<Frame title="用户登录" forceBackTo='/user/index'>
<div class="brand">
  <div class="logo">
    <img src="http://pic.downcc.com/upload/2016-8/2016851622186787.jpg" />
  </div>
  <p class="name text-center">千寻赞皇</p>
</div>
<form class="mui-input-group login-reg-form">
  <div class="plr-15">
    <input class="mui-input" placeholder="请输入账号">
    <input class="mui-input" placeholder="请输入密码">
  </div>
  <div class="mui-button-row plr-15">
    <button class="mui-btn mui-btn-primary btn-block" type="button" onclick="return false;">登 录</button>
  </div>

  <div class="mui-button-row plr-15">
    <router-link to="/user/findpwd" class="mui-btn btn-block" type="button" onclick="return false;">找回密码</router-link>
  </div>
</form>
</Frame>
</template>
<script>

import Frame from '@/components/Frame.vue';
export default {
  components: {
    Frame
  }
}
</script>
<style>
.brand {
  padding: 15px;
}
.brand .logo{
  display: flex;
  justify-content: center;
  padding: 15px;
}
.brand .logo img {
  width: 2rem;
  height: 2rem;
}
.login-reg-form {
  padding: 15px 0;
}
.login-reg-form input {
  font-size: .46rem;
  width: 7.73333333rem;
  height: .48rem;
  margin: 0 0 .17333333rem .12rem;
  outline: none;
  border: 0;
  color: #333;
  position: relative;
    width: 100%;
    margin: 1.2rem 0 0;
    border-bottom: 1px solid #ff5000;
}
.plr-15 {
  padding: 0 15px;
}
</style>