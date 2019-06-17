<template>
<Frame title="订单支付">
  <ul class="mui-table-view"> 
    <li class="mui-table-view-cell mui-collapse mui-active">
      <a href="#">订单号: {{pay.order_no}}                       充值: {{pay.points}}积分</a>
      <div class="mui-collapse-content text-center" v-if="pay.type === 'app'">
        <div class="mui-row">
          <p style="font-size:0.6rem;color:#f00">￥{{pay.price.toFixed(2)}}</p>
          <br/>
          <br/>
        </div>
        <div class="mui-row">
          <button class="mui-btn btn-block mui-btn-primary" @click="finishAppPay">我已完成支付</button>
          <br/>
          <br/>
        </div>
      </div>
      <!-- 非APP页面支付-->
      <div class="mui-collapse-content text-center" v-else>
        <div class="mui-row">
          <p v-if="pay.type ==='wx'" style="color:rgb(0,208,11)" class="mui-icon iconfont icon-weixinzhifu">
          如无法用微信扫码支付，请换其它方式<br/>
          <font color="red">(由于微信限制，只能通过扫码支付)</font>
          </p>
          <p v-if="pay.type ==='zfb'" style="color:rgb(0,166,233)" class="mui-icon iconfont icon-alipay">使用支付宝支付</p>
          <p v-if="pay.type ==='qq'" style="color:rgb(5,176,255)" class="mui-icon iconfont icon-qq">使用QQ钱包扫一扫</p>
        </div>
        
        <br/>
        
        <div class="mui-row">
          <p style="font-size:0.6rem;color:#f00">￥{{pay.price.toFixed(2)}}</p>
          <div class="">
            <img :src="pay.qr"  style="width: 3rem;height: 3rem" title="二维码已失效"/>
          </div>
          
          <p>剩余支付时间  <span style="color: #00f">{{leftPayTime}}</span></p>
        </div>
        <br/>
        <div class="mui-row" v-if="IS_APP && pay.type != 'zfb'">
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
        <div v-if="pay.type == 'qq'">
          <p style="color:rgb(5,176,255)">温馨提示:您还可以在QQ任一聊天界面发送支付链接{{pay.qr_text}},点击支付链接即可支付</p>
          <br/>
          <button class="mui-btn btn-block mui-btn-primary" @click="openQQAndPay">复制支付链接</button>
        </div>
        <br/>
        <div class="mui-row">
          <button class="mui-btn btn-block mui-btn-primary" @click="finishPay">我已完成支付</button>
          <br/>
          <br/>
        </div>
        <br/>
      </div>
    </li>

    <li class="mui-table-view-cell mui-collapse mui-active">
      <a href="#">注意事项:</a>
      <div class="mui-collapse-content mui-row">
        1.付完款,可能需要等待5~10s到账，点击【我已完成支付】进行确认
        <br/>
        <br/>
        2.如果充值完，未到账，请与客服联系！<br/>
      </div>
    </li>
  </ul>
</Frame>
</template>
<script>
import $ from 'axios';
import {mapState} from 'vuex';
import {replaceVars, localOrders} from '@/utils/index';

import {pay as PAY_API, user as USER_API} from '@/config/serverApi';
import Frame from '@/components/Frame.vue';

var timer, timer2;
export default {
  components: {
    Frame
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  data() {
    return {
      qr: +new Date,
      pay: {
        order_no: '20180620083435172',
        points: 100,
        price: 2,
        type: 'wx',
        qr: '',
        qr_text: ''
      },
      leftTime: 0
    };
  },
  computed: {
    leftPayTime() {
      const leftTime = this.leftTime;
      const cn = num => num > 9 ? num : '0' + num;
      var s = cn(leftTime % 60);
      var m = cn((leftTime - s) / 60);
      return [m, s].join(' : ');
    }
  },
  mounted() {
    this.pay = Object.assign({}, this.$route.params);
    localOrders.add({ id: this.pay.order_no, status: 0 });

    if (this.pay.type === 'app') {
      return false;
    }
    //设置定时查询策略，每隔5s钟进行一次查询
    var t = 50, delay = 5;
    this.leftTime = t * delay;

    timer = setInterval(() => {
      t--;
      if (t === 0) {
        // 二维码失效
        // this.pay.qr = '';
        clearInterval(timer);
      }
      this.queryOrder(false, t);
    }, 1000 * delay);
    timer2 = setInterval(() => {
      this.leftTime--;
      if (this.leftTime <= 0) {
        clearInterval(timer2);
      }
    }, 1000);
    
  },
  methods: {
    saveQR() {
      window.zanhuang.jsAndroid(JSON.stringify({
        type: '保存图片',
        picName: this.qr + '.png',
        picUrl: this.pay.qr
      }));
    },
    deleteQR() {
      window.zanhuang.jsAndroid(JSON.stringify({
        type: '删除图片',
        picName: this.qr + '.png',
      }));
    },
    finishAppPay() {
      this.queryAppOrder();
    },
    finishPay() {
      this.queryOrder(true, 0);
    },
    queryAppOrder() {
      $.get(replaceVars(PAY_API.queryAppOrder, {id: this.pay.order_no}))
        .then(({data}) => {
          this.$tip.show(data.status ? '已支付' : '未支付');
          if (data.status === 1) {
            this.$store.commit('setUserPoints', data.points);
            this.$router.push('/user/index');
          }
        })
        .catch(err => {
          this.$tip.show('网络连接失败！');
        });
    },
    queryOrder(showResult = false, t) {
      $.get(replaceVars(PAY_API.queryCardOrder,{id:this.pay.order_no}))
        .then(({data}) => {
          if (showResult) {
            this.$tip.show(data.status ? '已支付' : '未支付');
          }
          if (data.status === 1) {
            const card = data.card;
            this.activateCard(card);
            clearInterval(timer);
          }
        })
        .catch(err => {
          this.$tip.show('网络连接失败！');
        });
    },
    activateCard(card) {
      $.post(USER_API.chargeByCard, {card})
        .then(({data}) => {
          this.$tip.show(data.msg);
          if (data.status === 1) {
            this.deleteQR();
            this.$store.commit('setUserPoints', data.points);
            this.$router.push('/user/index');  
          }
        })
        .catch(err => {
          this.$tip.show('网络连接失败！请点击我已支付重试！');
        });
    },
    openQQAndPay() {
      window.zanhuang.copyText(this.pay.qr_text, true);
    }
  },
  beforeDestroy () {
    clearInterval(timer);
    clearInterval(timer2);
  }
}
</script>
<style scoped>
</style>