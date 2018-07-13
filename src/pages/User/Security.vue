<template>
<Frame title="账户安全">
  <div class="tabs-header">
    <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			<a class="mui-control-item" :class="currentTab === 'login_pwd' && 'mui-active'" @click="changeToTab('login_pwd')">
				登录密码修改
			</a>
			<a class="mui-control-item" :class="currentTab === 'pay_pwd' && 'mui-active'" @click="changeToTab('pay_pwd')">
				支付密码修改
			</a>
    </div>
  </div>
  <div class="mui-content">
    <form v-if="currentTab === 'login_pwd'"
      class="mui-input-group pwd-form">
      <div class="mui-input-row">
        <label>原登录密码</label>
        <input type="text" class="mui-input-clear" placeholder="请输入原登录密码">
      </div>
      <div class="mui-input-row">
        <label>新登录密码</label>
        <input type="text" class="mui-input-clear" placeholder="请输入新登录密码">
      </div>
      <div class="mui-input-row">
        <label>新登录密码</label>
        <input type="text" class="mui-input-clear" placeholder="请再次输入新登录密码">
      </div>
      <br/>
      <p class="text-center">如有忘记密码，请联系客服帮助解决谢谢~</p>
      <br/>
      <div class="mui-button-row">
        <button class="mui-btn btn-block mui-btn-primary">确认修改</button>
      </div>
    </form>
    <form v-if="currentTab === 'pay_pwd'"
      class="pwd-form mui-input-group">
      <div class="mui-input-row">
        <label>原支付密码</label>
        <input type="text" class="mui-input-clear" placeholder="请输入原支付密码">
      </div>
      <div class="mui-input-row">
        <label>新支付密码</label>
        <input type="text" class="mui-input-clear" placeholder="请输入新支付密码">
      </div>
      <div class="mui-input-row">
        <label>新支付密码</label>
        <input type="text" class="mui-input-clear" placeholder="请再次输入新支付密码">
      </div>
      <br/>
      <p class="text-center">如有忘记密码，请联系客服帮助解决谢谢~</p>
      <br/>
      <div class="mui-button-row">
        <button class="mui-btn btn-block mui-btn-primary">确认修改</button>
      </div>
    </form>
  </div>
</Frame>
</template>
<script>
import Frame from '@/components/Frame.vue';
export default {
  components: {
    Frame
  },
  data() {
    return {
      currentTab: 'login_pwd'
    }
  },
  methods: {
    changeToTab(tab) {
      this.currentTab = tab;
    }
  }
}
</script>
<style>
.pwd-form {
  padding: 10px;
}
</style>