<template>
<Frame title="积分充值">
  <router-link to="/user/findpoints"><button class="mui-btn btn-block mui-btn-warning">充值未到账请戳这里找回积分</button></router-link>
  <ul class="mui-table-view"> 
    <li class="mui-table-view-cell mui-collapse mui-active">
      <a href="#">充值方式一: 在线充值</a>
      <div class="mui-collapse-content">
        <div class="mui-row">
          <div class="mui-col-xs-3" style="font-size: 0.425rem;">充值账户:</div>
          <div class="mui-col-xs-9" style="font-size: 0.425rem;color:red;padding-left: 3%;">{{user.user}}</div>
        </div>
        
        <br/>
        <div class="mui-row">
          <div class="mui-col-xs-3" style="font-size: 0.425rem">充值积分:</div>
          <div class="mui-col-xs-9" style="">
              <button v-for="type in types"
                type="button"
                style="width: 30%; margin-left: 3%;margin-bottom: 0.5rem;color: #c7c7cc"
                :class="type.price === selectPrice.price ? 'mui-btn-danger' : 'mui-btn-grey'"
                class="mui-btn mui-btn-outlined"
                @click="selectPrice = type">
                {{type.title}}
              </button>
            </div>
        </div>
        <br/>
        <div class="mui-row">
          <div class="mui-col-xs-3" style="font-size: 0.425rem;">所需金额:</div>
          <div class="mui-col-xs-9" style="font-size: 0.425rem;color:red;padding-left: 3%;">￥{{(selectPrice.price || 0).toFixed(2)}}</div>
        </div>
        <br/>
        <br/>
        <div class="mui-row">
          
          <button class="mui-btn btn-block mui-btn-success mui-icon iconfont icon-weixinzhifu" @click="payByWxpay">微信支付</button>
          <br/>
          <br/>
          <p style="color: red;line-height: 0.5rem;">温馨提示:即日起使用支付宝付款，可以用领取到的红包抵扣哦~<br/>比如领取到0.98元红包，充值1元=100积分只需要花0.02元哦~</p><br/>
          <button class="mui-btn btn-block mui-btn-primary mui-icon iconfont icon-alipay" @click="payByAlipay">支付宝支付</button>
          <br/>
          <br/>
          <button class="mui-btn btn-block mui-icon iconfont icon-qq" style="background:rgb(104, 190, 248);color: #fff;" @click="payByQQpay">QQ支付</button>
        </div>
        <br/>
      </div>
    </li>

    <li class="mui-table-view-cell mui-collapse mui-active">
      <a href="#">充值方式二: 客服充值</a>
      <div class="mui-collapse-content mui-row">
        联系客服QQ 851656783 完成充值
      </div>
    </li>
  </ul>
</Frame>
</template>
<script>
import $ from 'axios';
import {mapState, mapActions} from 'vuex';

import {pay as PAY_API, user as USER_API} from '@/config/serverApi';
import Frame from '@/components/Frame.vue';
export default {
  components: {
    Frame
  },
  computed: {
    ...mapState({
      user: state => state.user,
      types: state => state.charge_options
    })
  },
  data() {
    return {
      pay: {
        qr: ''
      },
      card: '',
      selectPrice: {}
    };
  },
  methods: {
    ...mapActions(['getChargeOptions']),
    chargeByCard() {
      if (this.card.length !== 24) {
        this.$tip.show('卡密格式不正确！');
        return false;
      }
      this.$loading.show('充值中,请稍后...');
      $.POST(USER_API.chargeByCard, {card: this.card})
        .then(({data}) => {
          this.$loading.hide();
          this.$tip.show(data.msg);
          if (data.status) {
            this.$store.commit('setUserPoints', data.points);
          }
        })
        .catch(err => {
          this.$loading.hide();
          this.$tip.show('网络连接失败！');
        });
    },
    payByWxpay(){
      this.createOrder('wx');
    },
    payByAlipay() {
      if (!this.IS_APP) {
        this.createOrder('zfb');
        return false;
      }
      // APP里直接调用
      const {price, card, points, id} = this.selectPrice;
      const contact = this.user.user || 'telanx';
      this.$loading.show('创建订单中...');
      $.post(PAY_API.create, {id, price, points})
        .then(({data}) => {
          this.$loading.hide();
          if (!data.status) {
            this.$tip.show(data.msg);
            return false;
          }

          this.$router.push({
            name: 'pay',
            params: {
              type: 'app',
              order_no: data.order.order_id,
              price,
              points,
              qr: '',
              qr_img: ''
            }
          });
          window.zanhuang.jsAndroid(JSON.stringify({
            type: '支付',
            orderNum: data.order.order_id,
            uid: encodeURIComponent(contact),
            money: price,
            goodsName: '充值' + points + '积分',
            goodsDesc: price + '元=' + points + '积分',
            notifyUrl: this.APP_WAPSPAY_NOTIFYURL
          }));
        })
        .catch(err => {
          this.$loading.hide();
          this.$tip.show('网络连接失败！');
        });
    },
    payByQQpay() {
      this.createOrder('qq');
    },
    createOrder(type) {
      const {price, card, points} = this.selectPrice;
      const contact = this.user.user || 'telanx';
      this.$loading.show('创建订单中,请稍后...');
      $.post(PAY_API.getCardOrder, {
        type,
        price,
        goodid: card,
        contact
      })
      .then(({data}) => {
        this.$loading.hide();
        if (!data.status) {
          this.$tip.show(data.msg);
          return false;
        } else {
          this.$router.push({
            name: 'pay',
            params: {
              type,
              order_no: data.order_no,
              price,
              points,
              qr: data.qr,
              qr_img: data.qr_img
            }
          });
        }

        if (type === 'zfb') {
          var f=document.createElement("form");
          f.style="display:none";
          f.action = data.action;
          f.target="_blank";
          f.method="post";//指定为post
          f.innerHTML = data.input;
          document.body.appendChild(f);  
          f.submit();
        }
      })
      .catch(err => {
        this.$loading.hide();
        console.log(err);
        this.$tip.show('网络连接失败！');
      });
    }
  },
  mounted() {
    console.log('进入mounted');
    this.getChargeOptions().then(r => {
      this.selectPrice = this.types[0];
    }).catch(err => {
      console.log(err);
      this.$tip.show('获取充值选项失败！请重新打开充值页面！');
    });
  }
}
</script>
<style scoped>
</style>