<template>
<Frame title="用户登录" forceBackTo='/user/index'>

<!-- <div class="brand">
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
</form> -->


<div class="container-bg">
  <div class="container container-form">
    <!-- <form class="mui-input-group">
      <div class="mui-input-row" >
        <label><span class="mui-icon iconfont icon-zhanghao"></span></label>
        <input type="text" class="mui-input-clear" value="13881111755" placeholder="请输入手机号或邮箱" />
      </div>
      <div class="mui-input-row">
        <label><span class="mui-icon iconfont icon-mimaxiugai"></span></label>
        <input type="password" class="mui-input-clear" value="123456" placeholder="请输入密码" />
      </div>
    </form> -->
      <div class="login__check">
        <div style="margin-left: 25%;margin-top:5%"><span style="color: #FDFCFD; font-family: '微软雅黑'; font-size: 31px; ">千寻赞皇</span></div>
      </div>
<div class="login__form">
<div class="login__row">
          <svg class="login__icon name svg-icon" viewBox="0 0 20 20">
            <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8" />
          </svg>
          <input type="text" placeholder="Username"/>
        </div>
        <div class="login__row">
          <svg class="login__icon pass svg-icon" viewBox="0 0 20 20">
            <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0" />
          </svg>
          <input type="password" placeholder="Password"/>
        </div>
        <button type="button" class="login__submit">登 录</button>
</div>

   <!--  <button type="button" id="tijiao" class="mui-btn mui-btn-blue  mui-btn-block" style="background:#FF3366;margin: 12px auto; border:1px solid #f44d42; font-family: '微软雅黑'; font-size: 14px;">登录</button> -->

  </div>
</div>




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

.container-bg {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  background: url(http://cdn.520cy.cn/images/cy.png) no-repeat;
 /*  background: url(http://b359.photo.store.qq.com/psb?/V10rULDz1P9nMA/dH*1LrMCOgMjOvU46RHKMO.Rt0.DhqvK3B4ZEimwROg!/b/dGcBAAAAAAAA&bo=AAWqBgAFqgYRMAc!&rf=viewer_311) no-repeat; */
  background-size: cover;
}
.container-form {
  background:rgba(30, 30, 30, 0.6);
  padding: 60px 20px;
  border-radius: 1rem;

  background: -webkit-linear-gradient(top, rgba(146, 135, 187, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
  background: linear-gradient(to bottom, rgba(146, 135, 187, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
}

.login__row {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

 input[type=password], input[type=text] {
    margin-bottom: 0px; 
    background:transparent; 
    border:none;
    color: #FDFCFD;
    padding-left: 1.2rem;
}

svg {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  overflow: visible;
}

.svg-icon {
  cursor: pointer;
}
.svg-icon path {
  stroke: rgba(255, 255, 255, 0.9);
  fill: none;
  stroke-width: 1;
}

.login__icon {
  margin-bottom: -0.7rem;
}

.login__submit {
  width: 100%;
  height: 1.1rem;
  margin: 2rem 0 0rem;
  color: rgba(255, 255, 255, 0.8);
  background: #FF3366;
  font-size: 0.3rem;
  border-radius: 3rem;
}

input, button {
  outline: none;
  border: none;
}

.login__check {
  position: absolute;
  top: 3rem;
  width: 6rem;
  height: 1rem;
  background: url(http://cdn.520cy.cn/images/点赞-1.png) no-repeat;
  background-size:40px 40px;
  
}
/* .login__check:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 100%;
  width: 1rem;
  height: 5.2rem;
  background: #fff;
  box-shadow: inset -0.2rem -2rem 2rem rgba(0, 0, 0, 0.2);
} */
.login__form {
    margin-top: 85%;
}

</style>