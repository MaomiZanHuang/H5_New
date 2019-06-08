<template>
<!-- 弹屏广告 -->
<Frame title="QQ快捷登录">
  <div class="mui-container">
  <p class="info text-center">QQ快捷登录说明</p>
  <div class="tips">
    <ul class="mui-table-view"> 
      <li class="mui-table-view-cell mui-collapse mui-active bc-white">
        <a href="#">首次使用需绑定账号</a>
        <div class="mui-collapse-content qqlogin-tips">
          <p>首次使用需要先进行账号绑定(仅需绑定一次)。</p>
          <p>如果您没有账号，请先注册账号；已有账号请先使用账号密码登录；</p>
          <p style="color: red">登录成功后在【我的】>【个人资料】资料页里进行快捷登录绑定</p>
        </div>
      </li>
    </ul>
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
.info {
  background: #fff;
  padding: 1rem;
  font-size: 0.8rem;
}
.qqlogin-tips p {
  color: #000;
  line-height: 1rem;
}

</style>