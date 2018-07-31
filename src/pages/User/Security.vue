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
        <input type="text" v-model="pwd0" class="mui-input-clear" placeholder="请输入原登录密码">
      </div>
      <div class="mui-input-row">
        <input type="text" v-model="pwd1" class="mui-input-clear" placeholder="请输入新登录密码">
      </div>
      <div class="mui-input-row">
        <input type="text" v-model="pwd2" class="mui-input-clear" placeholder="请再次输入新登录密码">
      </div>
      <br/>
      <p class="text-center">如有忘记密码，请联系客服帮助解决谢谢~</p>
      <br/>
      <div class="mui-button-row">
        <button class="mui-btn btn-block mui-btn-primary" @click="changeLoginPwd">确认修改</button>
      </div>
    </form>
    <form v-if="currentTab === 'pay_pwd'"
      class="pwd-form mui-input-group"  style="padding: 50px 10px">
      <button class="mui-btn btn-block mui-btn-primary" style="height: 1.2rem" @click="show_pay_dialog = true">修改支付密码</button>
      <br/>
      <br/>
      <p class="text-center">如有忘记密码，请联系客服帮助解决谢谢~</p>
      <br/>
      <NumberInput v-if="currentTab === 'pay_pwd' && show_pay_dialog" @finish-input="finishInputPayPwd" @close="closePayDialog">
        <div slot="header" style="padding: 10px;font-size: 0.7rem;">
          {{tip}}
        </div>
      </NumberInput>
    </form>
  </div>
</Frame>
</template>
<script>
import $ from 'axios';
import {user as USER_API} from '@/config/serverApi';
import Frame from '@/components/Frame.vue';
import NumberInput from '@/components/NumberInput.vue';
export default {
  components: {
    Frame,
    NumberInput
  },
  data() {
    return {
      currentTab: 'login_pwd',
      pwd0: '',
      pwd1: '',
      pwd2: '',
      pay_pwd0: '',
      pay_pwd2: '',
      status: 0,
      show_pay_dialog: false,
    }
  },
  computed: {
    tip() {
      var tip = '请设置新支付密码';
      switch(this.status) {
        case 0:
          break;
        case 1:
          tip = '请再次输入新支付密码';
          break;
        case 2:
          tip = '请输入原支付密码';
          break;
      }
      return tip;
    }
  },
  methods: {
    changeToTab(tab) {
      this.currentTab = tab;
    },
    changeLoginPwd() {
      const {pwd0, pwd1, pwd2} = this;
      if (pwd1 !== pwd2) {
        this.$tip.show('两次新密码输入不一致！');
        return false;
      }
      if (pwd1.trim() === '' || pwd0.trim() === '' || pwd2.trim() === '') {
        this.$tip.show('密码不能为空！');
        return false;
      }
      this.$loading.show('正在更改密码！');
      $.post(USER_API.updateLoginPwd, {
        pwd0,
        pwd1,
        pwd2
      })
      .then(({data}) => {
        this.$loading.hide();
        this.$tip.show(data.msg);
        if (data.status) {
          setTimeout(() => {
            this.$router.push('/user/login');
          }, 1500);
        }
      })
      .catch(err => {
        this.$loading.hide();
        this.$tip.show('网络连接失败！');
      });
    },
    changePayPwd() {
      this.$loading.show('正在更改支付密码...');
      $.post(USER_API.updatePayPwd, {
        pwd0: this.pay_pwd0,
        pwd2: this.pay_pwd2
      })
      .then(({data}) => {
        this.$loading.hide();
        this.$tip.show(data.msg);
        
        this.status = 0;
      })
      .catch(err => {
        this.$loading.hide();
        this.$tip.show('网络连接失败！');
        
        this.status = 0;
      });
    },
    finishInputPayPwd(input) {
      if (this.status === 0) {
        this.pay_pwd2 = input;
        this.status = 1;
      } else if (this.status === 1) {
        if (input !== this.pay_pwd2) {
          this.status = 0;
          this.show_pay_dialog = false;
          this.$tip.show('两次密码输入不一致！');
          return false;
        }
        this.status = 2;
      }else if (this.status === 2) {
        this.pay_pwd0 = input;
        this.changePayPwd();
        this.show_pay_dialog = false;
      }
    },
    closePayDialog () {
      this.show_pay_dialog = false;
    }
  }
}
</script>
<style>
.pwd-form {
  padding: 10px;
}
</style>