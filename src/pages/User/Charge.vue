<template>
<Frame title="积分充值">
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
          <div class="mui-col-xs-9" style="font-size: 0.425rem;color:red;padding-left: 3%;">￥{{selectPrice.price.toFixed(2)}}</div>
        </div>
        <br/>
        <br/>
        <div class="mui-row">
          <button class="mui-btn btn-block mui-btn-success mui-icon iconfont icon-weixinzhifu" @click="payByWxpay">微信支付</button>
          <br/>
          <br/>
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
        联系客服QQ 2882023 完成充值
      </div>
    </li>
  </ul>
</Frame>
</template>
<script>
import $ from 'axios';
import {mapState} from 'vuex';

import {pay as PAY_API, user as USER_API} from '@/config/serverApi';
import Frame from '@/components/Frame.vue';
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
      pay: {
        qr: ''
      },
      card: '',
      types: [
        { price: 0.1, points: 100, title: '100积分', card: 54436 },
        { price: 0.2, points: 200, title: '200积分', card: 54437 },
        { price: 5, points: 500, title: '500积分', card: 54438 },
        { price: 10, points: 1000, title: '1000积分', card: 54439 },
        { price: 20, points: 2000, title: '2000积分', card: 54440 },
        { price: 50, points: 5000, title: '5000积分', card: 54441 },
        { price: 100, points: 10000, title: '10000积分', card: 54442 },
        { price: 200, points: 20000, title: '20000积分', card: 54443 }
      ],
      selectPrice: {
        price: 1,
        points: 100,
        title: '100积分',
        card: 54436
      }
    };
  },
  methods: {
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
      this.createOrder('zfb');
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
  }
}
</script>
<style scoped>
</style>