<!---
包含查询订单和我的订单
如果未登录，我的订单显示空
-->
<template>
<Frame :hideBack="true" title="订 单">
  <div class="tabs-header" style="position: relative; z-index:999">
    <Menu />
    <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			<a class="mui-control-item" :class="currentTab === 'success' && 'mui-active'"
        @click="changeToTab('success')">
				成功订单
			</a>
      <a class="mui-control-item" :class="currentTab === 'fail' && 'mui-active'"
        @click="changeToTab('fail')">
				失败订单
			</a>
		</div>
  </div>
  <scroller :on-refresh="refresh" :on-infinite="infinite" style="position: relative;padding-top: 0px;">
  <!--我的订单页面-->
      <div class="query-order-results">
        <!-- CARD START -->
        <div class="mui-card" v-for="order in orders">
          <!--页眉，放置标题-->
          <div class="mui-card-header"><h5>订单号: {{order.order_id}}</h5></div>
          <!--内容区-->
          <div class="mui-card-content" style="padding: 10px; font-size: 0.325rem">
            <div class="mui-row">
              <div class="mui-col-xs-4">
                <img src="https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-04-04/5ac4f1f9e49df.jpg" width="100%"/>
              </div>
              <div class="mui-col-xs-8 order-content" style="padding-left: 10px;">
                <p class="title">{{order.goods_name}}</p>
                <p class="spec">规格: {{order.spec}}</p>
                <p class="price">单价: <!--<i class="mui-icon iconfont icon-msg6 rmb">{{order.price.rmb}}</i>&nbsp;&nbsp;--><i class="mui-icon iconfont icon-jifen points">{{order.price.points}}</i></p>
                <p class="amt">数量: {{order.amt}}</p>
                <p class="account">充值QQ: {{order.concat.qq}}</p>
                <p class="remark">补充信息: {{order.remark}}</p>
              </div>
            </div>
          </div>
          <!--页脚，放置补充信息或支持的操作-->
          <div class="mui-card-footer">
            <p>{{order.create_time}}</p>
            <p class="price" style="text-align: right;">总计: 
              <!--<i class="mui-icon iconfont icon-msg6 rmb">{{order.total_fee.rmb}}</i>
              &nbsp;&nbsp;-->
              <i class="mui-icon iconfont icon-jifen points">{{order.total_fee.points}}</i></p>
          </div>
        </div>
        <!--CARD END -->
        <!--EMPTY CARD -->
        <div v-if="orders.length === 0" style="padding-top: 20%">
          <p class="text-center"><i style="font-size: 2rem;" class="iconfont icon-kong"></i></p>
        </div>
      </div>
    </scroller>
</Frame>
</template>
<script>
import {mapState} from 'vuex';

import $ from 'axios';
import {timeFormat} from '@/utils/index';
import {order as ORDER_API} from '@/config/serverApi';

import Menu from '@/pages/Index.vue';
import Frame from '@/components/Frame.vue';
var g_infinite;

export default {
  components: {
    Menu,
    Frame
  },
  computed: {
     ...mapState({
       user: state => state.user
     })
   },
  data() {
    return {
      currentTab: 'success',
      page_size: 5,
      page: 0,
      orders: [
      ]
    };
  },
  methods: {
    infinite(done) {
      console.log('监听到滑动');
      this.page++;
      this.queryOrder('infinite', done);
    },
    refresh(done) {
      console.log('监听到更新');
      this.page = 0;
      this.infinite = g_infinite;
      this.queryOrder('refresh', done);
    },
    changeToTab(tab) {
      if (tab === this.currentTab) return false;
      this.infinite = g_infinite;
      this.page = 0;
      this.currentTab = tab;
      this.queryOrder('refresh');
    },
    queryOrder(type, fn) {
      if (this.page === 0) {
        this.$loading.show('正在查询中...');
      }
      $.post(ORDER_API.getUserOrders, {
        filter: this.currentTab,
        page: this.page,
        page_size: this.page_size
      })
        .then(({data}) => {
          this.$loading.hide();
          if (data.status === 0) {
            this.$tip.show(data.msg);
          }

          var orders = data.map(r => {
            let { amt, price, total_fee, concat } = r;
            price = JSON.parse(price || '{}');
            total_fee = {
              rmb: amt * price.rmb,
              points: amt * price.points
            };
            concat = JSON.parse(concat || '{}');
            r.price = JSON.parse(r.price);
            r.concat = concat;
            r.total_fee = total_fee;
            r.create_time = timeFormat(r.create_time, 'yyyy-MM-dd hh:mm:ss');
            return r;
          });

          if (type === 'refresh') {
            this.orders = orders;
          } else {
            this.orders = this.orders.concat(orders);
          }

          if (data.length < this.page_size) {
            this.infinite = undefined;
          }
          if (typeof fn === 'function'){
            fn(true);
          }
        })
        .catch(err => {
          this.$loading.hide();
          this.infinite = undefined;
          this.$tip.show('网络连接失败！');
          console.log(err);
        });
    }
  },
  mounted() {
    g_infinite = this.infinite;
    //this.queryOrder('refresh');
  }
};
</script>
<style scoped>
.iconfont {
	line-height: 0.7rem;
	font-size: 0.4rem;
}
.order-content p {
	line-height: 0.6rem;
}
.order-content .title {
  font-size: 0.4rem;
  color: #f00;
}
.order-content img {
  width: 100%;
  background-size: cover;
}

.price .rmb {
  color: rgb(255, 74, 66);
}

</style>