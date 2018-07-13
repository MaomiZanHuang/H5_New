<template>
<Frame title="个人资料">
  <form class="mui-input-group userinfo-form">
      <div class="mui-input-row">
          <label>用户名</label>
      <input type="text" class="mui-input-clear" placeholder="请输入用户名">
      </div>
      <div class="mui-input-row">
          <label>QQ</label>
      <input type="text" class="mui-input-clear" placeholder="请输入用户名">
      </div>
      <div class="mui-input-row">
          <label>邮件</label>
      <input type="text" class="mui-input-clear" placeholder="请输入用户名">
      </div>
      <div class="mui-input-row">
          <label>手机号</label>
      <input type="text" class="mui-input-clear" placeholder="请输入用户名">
      </div>
      <br/>
      <div class="mui-button-row">
        <button type="button" class="mui-btn mui-btn-danger btn-block">保存资料</button>
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
.userinfo-form {
  padding: 10px;
}
</style>