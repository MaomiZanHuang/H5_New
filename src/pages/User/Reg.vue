<template>
<Frame title="用户注册" forceBackTo="/user/index">
<div class="brand">
  <div class="logo">
    <img src="http://pic.downcc.com/upload/2016-8/2016851622186787.jpg" />
  </div>
  <p class="name text-center">千寻赞皇</p>
</div>
<form class="mui-input-group login-reg-form">
  <div class="mui-input-row mui-row">
    <label>账 号</label>
    <input id=‘VerificationCode‘ type="text" class="mui-input" placeholder="QQ/邮箱/手机号">
  </div>
  <div class="mui-input-row mui-row">
    <label>邮 箱</label>
    <input type="text" class="mui-input" placeholder="找回密码邮箱">
  </div>
  <div class="mui-input-row mui-row">
    <label>密 码</label>
    <input type="text" class="mui-input" placeholder="4~12位字母或数字">
  </div>
  <div class="mui-input-row mui-row">
    <div class="mui-col-xs-8">
      <label>验证码</label>
      <input type="text" class="mui-input" placeholder="请输入验证码">
    </div>
    <div class="mui-col-xs-4">
      <img height="44px" src="http://pubg.gotoip3.com/qwt/index.php/home/user/verifycode.html/" />
    </div>
  </div>
  <div class="mui-button-row plr-15">
    <button class="mui-btn mui-btn-primary btn-block" type="button" onclick="return false;">注 册</button>
  </div>
  <div class="mui-button-row plr-15">
    <button class="mui-btn btn-block" type="button">已有账号?直接登录
    </button>
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

.plr-15 {
  padding: 0 15px;
}
.login-reg-form {
  padding: 0.8rem 0;
}
</style>