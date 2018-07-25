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
			<a class="mui-control-item" :class="currentTab === 'my_order' && 'mui-active'" @click="changeToTab('my_order')">
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
            <label>验证码</label>
            <input id=‘VerificationCode‘ type="text" class="mui-input" placeholder="请输入验证码">
          </div>
          <div class="mui-col-xs-4">
            <img height="44px" src="http://pubg.gotoip3.com/qwt/index.php/home/user/verifycode.html/" />
          </div>
        </div>

        <div class="mui-input-row mui-row">
          <div class="mui-col-xs-8">
            <label>订单号</label>
            <input type="text" class="mui-input-clear" placeholder="QQ/邮箱/订单号查询">
          </div>
          
          <div class="mui-col-xs-4">
            <button class="mui-btn mui-btn-primary" style="width: 100%">查 询</button>
          </div>
        </div>
        
      </form>
      <p class="text-center" style="line-height: 20px">注:未登录只能查询最近三条订单信息，登录后可以查看更多~</p>
      
      <div class="query-order-results">
        <ul class="mui-table-view"> 
            <li class="mui-table-view-cell mui-collapse mui-active">
                <a class="mui-navigate-right" href="#">招牌赞[低价]   2018/07/06 12:00:32  已完成</a>
                <div class="mui-collapse-content">
                    <p>订单号 201801892893223</p>
                    <p>商品类型: 刷赞</p>
                    <p>商品名称: 招牌赞[低价]1000+</p>
                    <p>价格: 0.01</p>
                    <p>QQ: 1540811286</p>
                    <p>订单时间: 2018/07/06 12:00:32</p>
                    <p>状态: 未支付</p>
                </div>
            </li>
            <li class="mui-table-view-cell mui-collapse mui-active">
                <a class="mui-navigate-right" href="#">招牌赞[低价]   2018/07/06 12:00:32  已完成</a>
                <div class="mui-collapse-content">
                    <p>面板1子内容</p>
                </div>
            </li>
            <li class="mui-table-view-cell mui-collapse mui-active">
                <a class="mui-navigate-right" href="#">招牌赞[低价]   2018/07/06 12:00:32  已完成</a>
                <div class="mui-collapse-content">
                    <p>面板1子内容</p>
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
            <li class="mui-table-view-cell mui-collapse">
                <a class="mui-navigate-right" href="#">招牌赞[低价]   2018/07/06 12:00:32  已完成</a>
                <div class="mui-collapse-content">
                    <p>订单号 201801892893223</p>
                    <p>商品类型: 刷赞</p>
                    <p>商品名称: 招牌赞[低价]1000+</p>
                    <p>价格: 0.01</p>
                    <p>QQ: 1540811286</p>
                    <p>订单时间: 2018/07/06 12:00:32</p>
                    <p>状态: 未支付</p>
                </div>
            </li>
            <li class="mui-table-view-cell mui-collapse">
                <a class="mui-navigate-right" href="#">招牌赞[低价]   2018/07/06 12:00:32  已完成</a>
                <div class="mui-collapse-content">
                    <p>面板1子内容</p>
                </div>
            </li>
            <li class="mui-table-view-cell mui-collapse">
                <a class="mui-navigate-right" href="#">招牌赞[低价]   2018/07/06 12:00:32  已完成</a>
                <div class="mui-collapse-content">
                    <p>面板1子内容</p>
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
import Menu from '@/pages/Index.vue';
import Frame from '@/components/Frame.vue';

export default {
  components: {
    Menu,
    Frame
  },
  data() {
    return {
      currentTab: 'query_order'
    };
  },
  methods: {
    changeToTab(tab) {
      if (tab === this.currentTab) return false;
      this.currentTab = tab;
    }
  }
};
</script>
<style>
.mui-input-group {
  line-height: 40px;
}
</style>