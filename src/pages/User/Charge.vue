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
          <!--支付宝调用万普的-->
          <button class="mui-btn btn-block mui-btn-primary mui-icon iconfont icon-alipay" @click="payByAlipay">支付宝支付</button>
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
import {mapState} from 'vuex';
import {user as USER_API} from '@/config/serverApi';
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
      card: '',
      types: [
        { price: 1, points: 100, title: '100积分' },
        { price: 2, points: 200, title: '200积分' },
        { price: 5, points: 500, title: '500积分' },
        { price: 10, points: 1000, title: '1000积分' },
        { price: 20, points: 2000, title: '2000积分' },
        { price: 50, points: 5000, title: '5000积分' },
        { price: 100, points: 10000, title: '10000积分' },
        { price: 200, points: 20000, title: '20000积分' }
      ],
      selectPrice: {
        price: 1,
        points: 100,
        title: '100积分'
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
    payByAlipay() {
      var f=document.createElement("form");
      f.action= 'http://www.cardbuy.net/Gateway/RedirectTo';
      f.target="_blank";
      f.method="post";//指定为post
      f.innerHTML='<input type="hidden" name="url" id="url" value="https://mapi.alipay.com/gateway.do?_input_charset=utf-8&amp;_input_charset=utf-8&amp;body=180802617708115045&amp;exter_invoke_ip=14.127.178.87&amp;notify_url=http://www.cardbuy.net/Gateway/AliPayNotify&amp;out_trade_no=180802617708115045&amp;partner=2088621876204570&amp;payment_type=1&amp;return_url=http://www.cardbuy.net/Gateway/AliPayReturn&amp;seller_email=whahash@qq.com&amp;service=create_direct_pay_by_user&amp;show_url=http://www.cardbuy.net&amp;subject=180802617708115045&amp;total_fee=15&amp;sign=aabc0215afb96fa851e369592e3b0e90&amp;sign_type=MD5">';
      document.body.appendChild(f);  
      f.submit()
    }
  }
}
</script>
<style scoped>

</style>