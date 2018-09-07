<!---
包含查询订单和我的订单
如果未登录，我的订单显示空
-->
<template>
<Frame :hideBack="true" title="发 现">
  <div class="tabs-header" style="position: relative; z-index:999">
    <Menu />
    <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			<!--<a class="mui-control-item" :class="currentTab === 'success' && 'mui-active'"
        @click="changeToTab('success')">
				大家说
			</a>
      <a class="mui-control-item" :class="currentTab === 'fail' && 'mui-active'"
        @click="changeToTab('fail')">
				官方活动
			</a>
      -->
		</div>
  </div>
  <scroller :on-refresh="refresh" :on-infinite="infinite" style="position: relative;padding-top: 0px;">
  <!--我的订单页面-->
      <div class="query-order-results">
        <!-- CARD START -->
        <div class="mui-card" v-for="order in orders" style="margin-bottom: 10px">
          <!--页眉，放置标题-->
          <div class="mui-card-header" style="display: block">
            <span style="color:#00f">{{order.name}}<i v-show="order.is_offical" class="iconfont icon-renzheng" style="color: #ff0"></i></span>:
            <span>{{order.content}}</span>
          </div>
          <!--内容区-->
          <div class="mui-card-content" style="padding: 10px; font-size: 0.325rem">
            <div class="mui-row">
              <p style="text-align: center;"><img :src="order.img" style="max-height:280px"/></p>
            </div>
          </div>
          <!--页脚，放置补充信息或支持的操作-->
          <div class="mui-card-footer">
            <i class="iconfont icon-like" @click="order.likes++"> {{order.likes}}</i>
            <i class="iconfont icon-zan-copy" @click="order.hates++"> {{order.hates}}</i>
            <i class="iconfont icon-fenxiang" @click="order.shares++"> {{order.shares}}</i>
          </div>
        </div>
        <!--CARD END -->
        <!--EMPTY CARD -->
        <div v-if="orders.length === 0" style="padding-top: 20%">
          <p class="text-center"><i style="font-size: 1.5rem;" class="iconfont icon-kong"></i></p>
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
      page: -1,
      orders: [
        { is_offical: true, name: '拇指赞官方', content: '我在支付宝发了一个红包，扫码或打开支付宝首页搜索 525419253 ，即可领红包~', img: '//ugc.qpic.cn/gbar_pic/2wF3sr2LiaVtNYbMibrafuE5bsjrZ1UUKpR6hQgn0mL3gicTsXS65skMA/0', likes: '12300', hates: '3', shares: '2100' },
        { is_offical: false, name: '℡儍嗳o^-^', content: '我用拇指赞为QQ@73843384 怒刷1000真人名片赞，快来围观~', img: '//ugc.qpic.cn/gbar_pic/2wF3sr2LiaVu0ZC0Udl0DmPJJ22qbtjPbYCuKhL93NMBwrXEGs0lsuA/0', likes: '120', hates: '0', shares: '3' },
        { is_offical: false, name: '♀WO→忘了爱', content: '我用拇指赞为QQ@3041826382 充了永久QQ会员~', img: '//ugc.qpic.cn/gbar_pic/2wF3sr2LiaVtsqicDUrQGPOf8S1UMqBD9sdplZOBvqLlzaJXNvcYiaM0Q/0', likes: '102', hates: '5', shares: '1' },
        { is_offical: false, name: '闪舞Ice☆★~', content: '我用拇指赞为全民K歌@12892332 怒刷200朵高级鲜花，快来围观~', img: '//ugc.qpic.cn/gbar_pic/2wF3sr2LiaVvubJN5USFJgLbeBiacPh1fQ7djicWC4kWR74wblziaLy6SA/0', likes: '370', hates: '3', shares: '0' },
        { is_offical: false, name: '执著之☆雪', content: '我用拇指赞为全民K歌@3777299 刷了3000粉丝，快来围观~', img: '//ugc.qpic.cn/gbar_pic/2wF3sr2LiaVvubJN5USFJgNtMCrOnRa2KIfo7icTjuntZwLgHmAs0jCQ/0', likes: '1', hates: '0', shares: '5' },
        { is_offical: false, name: '雪紫∮冰雨', content: '我用拇指赞为QQ@4620032 怒刷1000真人名片赞，快来围观~', img: '//ugc.qpic.cn/gbar_pic/2wF3sr2LiaVu0ZC0Udl0DmPJJ22qbtjPbYCuKhL93NMBwrXEGs0lsuA/0', likes: '52', hates: '0', shares: '2' },
        { is_offical: false, name: '┢┦apΡy', content: '我用拇指赞为QQ@2733202 充了永久QQ会员，快来围观~', img: '//ugc.qpic.cn/gbar_pic/2wF3sr2LiaVtsqicDUrQGPOf8S1UMqBD9sdplZOBvqLlzaJXNvcYiaM0Q/0', likes: '37', hates: '8', shares: '0' },
        { is_offical: false, name: '_﹏ソ尐様ル', content: '我用拇指赞为QQ@892233314 怒刷1000真人名片赞，快来围观~', img: '//ugc.qpic.cn/gbar_pic/2wF3sr2LiaVu0ZC0Udl0DmPJJ22qbtjPbYCuKhL93NMBwrXEGs0lsuA/0', likes: '81', hates: '1', shares: '1' }
      ]
    };
  },
  methods: {
    infinite(done) {
      this.page++;
      this.queryOrder('infinite', done);
    },
    refresh(done) {
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
      console.log(type);
      if (this.page === 0) {
        this.$loading.show('正在查询中...');
      }
      setTimeout(() => {
        this.$loading.hide();
        fn(true);
      }, 1000);
      return false;
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
            let { amt, price, total_fee, concat, pay_type } = r;
            var _price = JSON.parse(price || '{}');
            // 针对充值的
            total_fee = {
              rmb: amt * _price.rmb,
              points: amt * _price.points
            };
            if ('charge' == pay_type) {
              _price = {
                points: parseFloat(price).toFixed(2)
              };
              total_fee = {
                points: parseFloat(amt * price).toFixed(2)
              };
            }
            concat = JSON.parse(concat || '{}');
            r.price = _price;
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
          if (typeof fn === 'function'){
            fn(true);
          }
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