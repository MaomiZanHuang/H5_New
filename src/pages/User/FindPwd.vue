<template>
<Frame title="找回密码">
<div class="brand">
  <div class="logo">
    <img :src="APP_LOGO" />
  </div>
  <p class="name text-center">{{APP_NAME}}</p>
</div>
<ul data-v-21b33e4c="" class="mui-table-view">
  <li class="mui-table-view-cell mui-collapse mui-active bc-white">
    <a href="#">QQ找回密码</a>
    <div class="mui-collapse-content">
      请使用QQ注册的账号联系客服找回
      <p>
            客服QQ: &nbsp; <b>851656783</b>
            <img v-if="IS_APP" @click="joinQQ" border="0" src="//wpa.qq.com/pa?p=2:851656783:51" alt="点击这里给我发消息" title="点击这里给我发消息"/>
            <a v-else target="_blank" href="//wpa.qq.com/msgrd?v=3&uin=851656783&site=qq&menu=yes"><img border="0" src="//wpa.qq.com/pa?p=2:851656783:51" alt="点击这里给我发消息" title="点击这里给我发消息"/></a>
              </p>
    </div>
  </li> 
</ul>
</Frame>
</template>
<script>

import Frame from '@/components/Frame.vue';
export default {
  components: {
    Frame
  },
  methods: {
    joinQQ() {
      window.zanhuang.jsAndroid(JSON.stringify({
        type: 'QQ聊天',
        qq: '851656783'
      }));
    }
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