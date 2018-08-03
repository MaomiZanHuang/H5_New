<!---
包含查询订单和我的订单
如果未登录，我的订单显示空
-->
<template>
<Frame :hideBack="true" title="订 单">
  <Menu />
  <div class="tabs-header">
    <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			<a class="mui-control-item" :class="currentTab === 'query_order' && 'mui-active'" @click="changeToTab('query_order')">
				查询订单
			</a>
			<a v-if="user.user" class="mui-control-item" :class="currentTab === 'my_order' && 'mui-active'" @click="changeToTab('my_order')">
				我的订单
			</a>
				</div>
  </div>
  <div class="mui-content">
    <!--订单查询页面--->
    <div v-show="currentTab === 'query_order'">
      <form class="mui-input-group">
        <div class="mui-input-row mui-row">
          <div class="mui-col-xs-8">
            <input type="text" class="mui-input" placeholder="请输入验证码">
          </div>
          <div class="mui-col-xs-4">
            <img height="100%" src="http://pubg.gotoip3.com/qwt/index.php/home/user/verifycode.html" />
          </div>
        </div>

        <div class="mui-input-row mui-row">
          <div class="mui-col-xs-8">
            
            <input type="text" v-model="keywords" class="mui-input-clear" placeholder="QQ/邮箱/订单号查询">
          </div>
          
          <div class="mui-col-xs-4">
            <button class="mui-btn mui-btn-primary" style="width: 100%" @click="queryOrder">查 询</button>
          </div>
        </div>
        
      </form>
      <p class="text-center" style="line-height: 40px">注:未登录只能查询最近三条订单信息，登录后可以查看更多~</p>
      
      <div class="query-order-results">
        <ul class="mui-table-view"> 
            <li v-for="order in orders" class="mui-table-view-cell mui-collapse mui-active">
                <a class="mui-navigate-right" href="#">【{{order.status}}】订单号{{order.order_id}}     {{order.create_time}}</a>
                <div class="mui-collapse-content order-detail">
                    <p>商品名称: {{order.goods_name}}</p>
                    <p>规格: {{order.spec}}}</p>
                    <p>单价: {{order.price.rmb}} {{order.price.points}}</p>
                    <p>下单数量: {{order.amt}}</p>
                    <p>下单QQ: {{order.concat.qq}}</p>
                    <p>订单完成时间: {{order.create_time}}</p>
                    <p>状态: {{order.status}}</p>
                </div>
            </li>
        </ul>
      </div>
    </div>


  <!--我的订单页面-->
    <div class="" v-show="currentTab === 'my_order'">
      注:仅显示已完成订单，未支付成功的订单不予显示。
      <div class="query-order-results">
        <ul class="mui-table-view"> 
            <li v-for="order in orders" class="mui-table-view-cell mui-collapse">
                <a class="mui-navigate-right" href="#">【{{order.status}}】订单号{{order.order_id}}     {{order.create_time}}</a>
                <div class="mui-collapse-content">
                    <p>商品名称: {{order.goods_name}}</p>
                    <p>规格: {{order.spec}}}</p>
                    <p>单价: {{order.price.rmb}} {{order.price.points}}</p>
                    <p>下单数量: {{order.amt}}</p>
                    <p>下单QQ: {{order.concat.qq}}</p>
                    <p>订单完成时间: {{order.create_time}}</p>
                    <p>状态: {{order.status}}</p>
                </div>
            </li>
        </ul>
        <div class="mui-content-padded">
				<ul class="mui-pager">
					<li>
						<a href="#">
							上一页
						</a>
					</li>
					<li>
						<a href="#">
							下一页
						</a>
					</li>
				</ul>
			</div>
      </div>
    </div>
  </div>
</Frame>
</template>
<script>
import {mapState} from 'vuex';
import $ from 'axios';
import {guest as GUEST_API} from '@/config/serverApi';

import Menu from '@/pages/Index.vue';
import Frame from '@/components/Frame.vue';

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
      currentTab: 'query_order',
      keywords: '',
      orders: [
      ]
    };
  },
  methods: {
    changeToTab(tab) {
      if (tab === this.currentTab) return false;
      this.currentTab = tab;
    },
    queryOrder(e) {
      e.preventDefault();
      this.$loading.show('正在查询中...');
      $.post(GUEST_API.getOrderByVisitor, {keywords: this.keywords})
        .then(res => {
          this.$loading.hide();
          if (res.data.status === 0) {
            this.$tip.show(res.data.msg);
          }
          const {concat, price} = res.data;
          
          this.orders = res.data;
        })
        .catch(err => {
          this.$loading.hide();
          this.$tip.show('网络连接失败！');
          console.log(err);
        });
    }
  },
  mounted() {
  }
};
</script>
<style>
.mui-input-group {
  line-height: 40px;
}
.order-detail p {
  line-height: 0.5rem;
}
</style>