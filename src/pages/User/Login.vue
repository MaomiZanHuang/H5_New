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
    <div class="login__logo"></div>
      <div class="login__check">
        <span style="margin-left:1.5rem;color: #FDFCFD; font-family: '微软雅黑'; font-size: 31px; ">千寻赞皇</span>
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
        <br><br>
        <span style="margin-left:0rem;color: #FDFCFD; font-family: '微软雅黑'; font-size: 9px; ">注册账号</span>
        <span style="margin-left:4.5rem;color: #FDFCFD; font-family: '微软雅黑'; font-size: 9px; ">忘记密码</span>
      </div>
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
  /* background: url(http://cdn.520cy.cn/images/cy.png) no-repeat; */
background: url(http://b359.photo.store.qq.com/psb?/V10rULDz1P9nMA/dH*1LrMCOgMjOvU46RHKMO.Rt0.DhqvK3B4ZEimwROg!/b/dGcBAAAAAAAA&bo=AAWqBgAFqgYRMAc!&rf=viewer_311) no-repeat;
  background-size: cover;
}
.container-form {
  background:rgba(30, 30, 30, 0.6);
  /* padding: 75% 45%; */
  border-radius: 1rem;

  /* background: linear-gradient(to bottom, rgba(146, 135, 187, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
  transition: opacity 0.1s, transform 0.3s cubic-bezier(0.17, -0.65, 0.665, 1.25), -webkit-transform 0.3s cubic-bezier(0.17, -0.65, 0.665, 1.25); */

    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -4.3rem;
    margin-top: -7.0rem;
    width: 8.6rem;
    height: 15rem;
    

}

.login__row {
  /* height: 5rem;
  padding-top: 1rem; */
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
  margin: 1.5rem 0 0rem;
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
  top: 5.5rem;
  left: 0.8rem;
  width: 6rem;
  height: 1rem;
  background: url(http://cdn.520cy.cn/images/点赞-1.png) no-repeat;
  background-size:40px 40px;

}


.login__form {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    padding: 0.5rem 0.7rem;
    /* text-align: center; */
}

.login__logo {
  position: absolute;
  top: 15%;
  left: 40%;
  width: 50%;
  height: 50%;
  margin: 0 auto;
  background: url(https://tc.sinaimg.cn/maxwidth.800/tc.service.weibo.com/t1_qpic_cn/eb8e3c7e6a7ca50d538fe1bd44fc76b7.jpg) no-repeat;
  background-size:80px 80px;

  
}

@-webkit-keyframes animRipple {
  to {
    -webkit-transform: scale(3.5);
            transform: scale(3.5);
    opacity: 0;
  }
}

@keyframes animRipple {
  to {
    -webkit-transform: scale(3.5);
            transform: scale(3.5);
    opacity: 0;
  }
}
@-webkit-keyframes rotate {
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate {
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@-webkit-keyframes animatePath {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes animatePath {
  to {
    stroke-dashoffset: 0;
  }
}

.login__icon.name path {
  stroke-dasharray: 73.50196075439453;
  stroke-dashoffset: 73.50196075439453;
  -webkit-animation: animatePath 2s 0.5s forwards;
          animation: animatePath 2s 0.5s forwards;
}
.login__icon.pass path {
  stroke-dasharray: 92.10662841796875;
  stroke-dashoffset: 92.10662841796875;
  -webkit-animation: animatePath 2s 0.5s forwards;
          animation: animatePath 2s 0.5s forwards;
}


</style>