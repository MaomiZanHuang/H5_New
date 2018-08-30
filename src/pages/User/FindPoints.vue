<template>
<Frame title="找回积分">
<p style="padding: 10px;">说明：积分找回只会保存最近5条订单记录！</p>
<ul class="mui-table-view">
    <li class="mui-table-view-cell" v-for="order in orders">
    订单号: {{order.id}}
    
    状态: 
      <span class="text-grey" v-if="order.status === 0">未找回</span>
      <span class="text-green" v-if="order.status === 1">找回成功</span>
      <span class="text-red" v-if="order.status === 2">未付款或已充值</span>
  </li>
</ul>
<button v-if="orders.length" class="mui-btn mui-btn-primary btn-block" @click="find">一键找回</button>
<p v-else class="text-center" style="line-height: 100px">
您暂时没有需要找回的积分订单！
</p>
</Frame>
</template>
<script>
import $ from 'axios';
import Frame from '@/components/Frame.vue';
import {localOrders} from '@/utils/index';
import {order as OrderAPI, user as USER_API} from'@/config/serverApi';
const STATUS_MAP = {
  0: '未找回',
  1: '找回成功',
  2: '找回失败: 未支付或已找回'
};

var orders = localOrders.getAll().map(x => x.id);
export default {
  components: {
    Frame
  },
  data() {
    return {
      orders: localOrders.getAll()
    };
  },
  methods: {
    getNextOrder(id) {
      return $.get(OrderAPI.findPoints+"?id=" + id);
    },
    find() {
      console.log(orders);
      if (!orders.length) return false;
      var order_no = orders.pop();

      this.getNextOrder(order_no)
        .then(({data}) => {
          if (!data.status) {
            // 未支付
            this.updateOrderStatus(order_no, 2);
            this.find();
          }
          if (data.card) {
            this.activateCard(data.card, order_no);
          }  
        })
        .catch(err => {
          this.$tip.show('网络连接失败！请稍后重试！');
          console.log(err);
        });
    },
    updateOrderStatus(order_no, status) {
      console.log('更新订单' + order_no + '状态:' + status);
      // status 0 未找回 1找回成功 2找回失败， 同步更新到localOrders
      // 如果是1或者2的话，直接从localOrders里面删除
      var idx = this.orders.map(x => x.id).indexOf(order_no);
      this.orders[idx].status = status;
      localOrders.del(order_no);
    },
    activateCard(card, order_no) {
      $.post(USER_API.chargeByCard, {card})
        .then(({data}) => {
          this.$tip.show(data.msg);
          if (data.status === 1) {
            // 更新卡号状态
            this.updateOrderStatus(order_no, 1);
          } else {
            // 已充值或不存在
            this.updateOrderStatus(order_no, 2);
          }
          this.find();
        })
        .catch(err => {
          this.$tip.show('网络连接失败！');
        });
    }
  },
  mounted() {
    orders = localOrders.getAll().map(x => x.id);
  }
}
</script>
<style>
.text-grey {
  color: #aaa;
}
.text-red {
  color: #f00;
}
.text-green {
  color: #0f0;
}
</style>