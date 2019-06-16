<template>
<Frame title="用户登录" forceBackTo='/user/index'>
<div class="container-bg">
  <div class="container container-form">
    <div class="login__logo">
      <img :src="APP_LOGO" />
    </div>
      <div class="login__form">
        <div class="login__row">
          <svg class="login__icon name svg-icon" viewBox="0 0 20 20">
            <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8" />
          </svg>
          <input type="text" v-model="user" placeholder="账号(QQ号,5-10位数字)"/>
        </div>
        <div class="login__row">
          <svg class="login__icon pass svg-icon" viewBox="0 0 20 20">
            <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0" />
          </svg>
          <input type="password" v-model="pwd" placeholder="密码(4~10位数字+字母)"/>
        </div>
        <button type="button" class="login__submit" @click="login">登 录</button>
        <br><br>
        <div class="form-bottom">
          <router-link to="/user/reg" class="fleft">注册账号</router-link>
          <router-link to="/user/findpwd" class="fright">忘记密码</router-link>
        </div>
        </div>
      </div>
  </div>
</div>




</Frame>
</template>
<script>
import $ from 'axios';
import Frame from '@/components/Frame.vue';
import {user as USER_API} from '@/config/serverApi';
export default {
  components: {
    Frame
  },
  data() {
    return {
      user: '',
      pwd: ''
    }
  },
  methods: {
    login() {
      const {user, pwd} = this;
      if (user.trim() === '' || pwd.trim() === '') {
        this.$tip.show('账号密码不能为空！');
        return false;
      }
      this.$loading.show('登陆中,请稍后...');
      $.post(USER_API.login, {
        user,
        pwd
      })
      .then(({data}) => {
        this.$loading.hide();
        this.$tip.show(data.msg);
        if (data.status) {
          localStorage['jwt'] = data.token;
          this.$store.commit('setUser', data.user);
          // 更新store中的user字段
          this.$router.push('/user/index');
        }
      })
      .catch(err => {
        this.$loading.hide();
        this.$tip.show('网络连接失败！');
      });
    }
  }
}
</script>
<style scoped>
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
  background-color: rgb(62, 83, 202);
  background-size: cover;
}
.container-form {
  background:rgba(30, 30, 30, 0.6);
  width: 100%;
  height: 100%;
  padding: 35px;
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
  font-size: 0.425rem;
  border-radius: 3rem;
}

input, button {
  outline: none;
  border: none;
}




.login__logo {
  width: 2rem;
  height: 2rem;
  margin: 10px auto 20px auto;
}
.login__logo img {
  height: 2rem;
  width: 2rem;
}

.form-bottom a {
  font-size: 0.35rem;
  color: #FFF;
}

</style>