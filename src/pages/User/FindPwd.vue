<template>
<Frame title="找回密码">
<div class="brand">
  <div class="logo">
    <img src="http://pic.downcc.com/upload/2016-8/2016851622186787.jpg" />
  </div>
  <p class="name text-center">{{APP_NAME}}</p>
</div>
<form class="mui-input-group login-reg-form">
  <div class="mui-input-row mui-row">
    <label>绑定邮箱</label>
    <input type="text" class="mui-input" placeholder="请输入您的账号绑定的邮箱">
  </div>
  <div class="mui-input-row mui-row">
    <div class="mui-col-xs-8">
      <label>验证码</label>
      <input id=‘VerificationCode‘ type="text" class="mui-input" placeholder="请输入验证码">
    </div>
    <div class="mui-col-xs-4">
      <img height="44px" src="http://pubg.gotoip3.com/qwt/index.php/home/user/verifycode.html/" />
    </div>
  </div>

  <div class="mui-button-row plr-15">
    <button class="mui-btn mui-btn-primary btn-block" type="button" onclick="return false;">找回密码</button>
  </div>

  <div class="mui-button-row plr-15">
    <router-link to="/user/login" class="mui-btn btn-block" type="button">返回登录</router-link>
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
.plr-15 {
  padding: 0 15px;
}
</style>