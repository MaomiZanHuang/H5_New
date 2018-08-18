<!---
账单表
-->
<template>
<Frame title="我的账单">
  <scroller :on-refresh="refresh" :on-infinite="infinite" style="position: relative;padding-top: 0px;">
  <!--我的订单页面-->
      <div class="query-order-results">
        <!-- CARD START -->
        <ul class="mui-table-view">
          <li v-for="bill in orders" class="mui-table-view-cell bill">
            [{{bill.time}}] {{bill.remark}}     余额:{{bill.balance}}
              <span class="mui-badge" :class="bill.income ? 'mui-badge-danger' : 'mui-badge-success'">{{bill.change_amt_str}}</span>
          </li>
      </ul>
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
import {user as USER_API} from '@/config/serverApi';

import Menu from '@/pages/Index.vue';
import Frame from '@/components/Frame.vue';
var g_infinite;

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
      page_size: 10,
      page: 0,
      orders: [
      ]
    };
  },
  methods: {
    infinite(done) {
      console.log('触发下拉');
      this.page++;
      this.queryOrder('infinite', done);
    },
    refresh(done) {
      console.log('触发上拉');
      this.page = 0;
      this.infinite = g_infinite;
      this.queryOrder('refresh', done);
    },
    queryOrder(type, fn) {
      if (this.page === 0) {
        this.$loading.show('正在查询中...');
      }
      $.post(USER_API.getUserBill, {
        page: this.page,
        page_size: this.page_size
      })
        .then(({data}) => {
          this.$loading.hide();
          if (data.status === 0) {
            this.$tip.show(data.msg);
          }

          var orders = data.map(r => {
            
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
          fn(true);
          this.infinite = undefined;
          this.$tip.show('网络连接失败！');
          console.log(err);
        });
    }
  },
  mounted() {
    g_infinite = this.infinite;
    this.queryOrder('refresh');
  }
};
</script>
<style scoped>
.bill {
  padding: 0.6rem 10px;
}
</style>