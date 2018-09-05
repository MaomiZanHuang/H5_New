<!--支付宝红包提现页面-->
<template>
<Frame title="红包提现活动">
<ul class="mui-table-view"> 
    <li class="mui-table-view-cell mui-collapse mui-active">
      <a href="#">活动说明</a>
      <div class="mui-collapse-content">
      红包活动是支付宝官方推出的活动，用户每天都可以领取红包用于消费抵扣~<br/>
      没领取到?<a href="#" @click="repick">戳我重新领取</a>
      </div>
    </li>

    <li class="mui-table-view-cell mui-collapse mui-active">
      <a href="#">红包如何提现或充值积分?</a>
      <div class="mui-collapse-content mui-row">
        <p>1.扫描下方二维码，使用余额宝红包付款，<font color="red">付款额度为所领取红包额度，红包抵扣，实际支付0</font></p>
        <p class="text-center" style="padding: 0.2rem">
          <img src="http://ugc.qpic.cn/gbar_pic/2wF3sr2LiaVs98SJS4wwgxrIApI8tv6pueWvaAW80D8xicz0Enrv9rnA/0" style="width: 3rem;height: 3rem" title="二维码已失效"/>
        </p>
        <div class="mui-row" v-if="IS_APP">
          <div class="mui-col-xs-1"></div>
          <div class="mui-col-xs-4">
            <button class="mui-btn btn-block" @click="saveQR">保存二维码</button>
          </div>
          <div class="mui-col-xs-2"></div>
          <div class="mui-col-xs-4">
            <button class="mui-btn btn-block" @click="deleteQR">删除二维码</button>
          </div>
        </div>
      <br/>
      <p>2.联系客服QQ 1540811286 付款截图发给客服。</p>
      <br/>
      <ul>
        <li>充值积分请留下您的<font color="red">拇指赞账号</font></li>
        <li>提现请留下您的<font color="red">支付宝账号</font></li>
      </ul>
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
  data() {
    return {
      qr: 'telanx_zfb'
    };
  },
  methods: {
    saveQR() {
      window.zanhuang.jsAndroid(JSON.stringify({
        type: '保存图片',
        picName: this.qr + '.png',
        picUrl: 'http://ugc.qpic.cn/gbar_pic/2wF3sr2LiaVs98SJS4wwgxrIApI8tv6pueWvaAW80D8xicz0Enrv9rnA/0'
      }));
    },
    deleteQR() {
      window.zanhuang.jsAndroid(JSON.stringify({
        type: '删除图片',
        picName: this.qr + '.png',
      }));
    },
    repick() {
      localStorage['last_showdate'] = null;
      location.reload();
    }
  }
}
</script>
<style scoped>
p, li {
  line-height: 0.4rem;
}
</style>