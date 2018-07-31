<template>
<Frame title="个人资料">
  <form class="mui-input-group userinfo-form">
      
      <div class="mui-input-row">
          <label>QQ</label>
      <input type="text" v-model="qq" class="mui-input-clear">
      </div>
      <div class="mui-input-row">
          <label>邮箱</label>
      <input type="text" v-model="email" class="mui-input-clear">
      </div>
      <div class="mui-input-row">
          <label>手机号</label>
      <input type="text" v-model="mobile" class="mui-input-clear">
      </div>
      <div class="mui-input-row">
          <label>注册时间</label>
      <input type="text" v-model="reg_time" class="mui-input-clear" disabled>
      </div>
      
      <br/>
      <div class="mui-button-row">
        <button type="button" class="mui-btn mui-btn-danger btn-block" @click="save">保存资料</button>
      </div>
  </form>
</Frame>
</template>
<script>
import $ from 'axios';
import {user as USER_API} from '@/config/serverApi';
import Frame from '@/components/Frame.vue';
export default {
  components: {
    Frame
  },
  data() {
    return {
      qq: '',
      email: '',
      mobile: '',
      reg_time: ''
    };
  },
  methods: {
    save() {
      const {qq, email, mobile} = this;
      $.post(USER_API.updateUserInfo, {
        qq,
        email,
        mobile
      })
      .then(({data}) => {
        this.$loading.hide();
        this.$tip.show(data.msg);
      })
      .catch(err => {
        this.$loading.hide();
        this.$tip.show('网络连接失败！');
      })
    }
  },
  mounted() {
    this.$loading.show('获取用户数据中...');
    $.get(USER_API.getUserInfo)
      .then(({data}) => {
        this.$loading.hide();
        ['qq', 'email', 'mobile', 'reg_time'].forEach(r => {
          this[r] = data[r];
        });
      })
      .catch(err => {
        this.$loading.hide();
        this.$tip.show('网络连接失败！');
      })
  }
}
</script>
<style>
.userinfo-form {
  padding: 10px;
}
</style>