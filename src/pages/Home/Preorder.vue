<template>
<Frame title="订单支付">
<div class="mui-content">
	<div class="mui-card">
		<!--页眉，放置标题-->
		<div class="mui-card-header"><h5>订单号: 201807201525_2018030426</h5></div>
		<!--内容区-->
		<div class="mui-card-content" style="padding: 10px; font-size: 0.325rem">
			<div class="mui-row">
				<div class="mui-col-xs-4">
					<img src="https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-04-04/5ac4f1f9e49df.jpg" width="100%"/>
				</div>
				<div class="mui-col-xs-8 order-content" style="padding-left: 10px;">
					<h3>招牌名片赞</h3>
					<p>规格: 800赞</p>
					<p>单价: <i class="mui-icon iconfont icon-msg6">0.02</i>/<i class="mui-icon iconfont icon-ji points">100</i></p>
					<p>数量: 1</p>
					<p>充值QQ: 1540811286</p>
					<p>补充信息: 客服请快速帮忙充值，急用！！！</p>
				</div>
			</div>
		</div>
		<!--页脚，放置补充信息或支持的操作-->
		<div class="mui-card-footer">
			<p style="width: 100%;text-align: right;">总计: <i class="mui-icon iconfont icon-msg6">0.02</i>/<i class="mui-icon iconfont icon-ji points">100</i></p>
		</div>
	</div>
	<p class="text-center" style="line-height: 1.2rem">您的订单已创建，请及时支付！</p>
	<div class="btn-group">
		<button class="mui-btn mui-btn-block mui-btn-primary" @click="isShowPayDialog=true">积分支付(200)</button>
		<button class="mui-btn mui-btn-block mui-btn-danger">在线支付(0.02)</button>
		<br/>
		<br/>
		<button class="mui-btn mui-btn-block"  @click="cancelOrder">取消订单</button>
	</div>
	<NumberInput v-if="isShowPayDialog" @finish-input="pay" @close="closePayDialog">
		<div slot="header">
			订单金额: 50 <br/>
			支付方式: <i class="mui-icon iconfont icon-msg6"></i>积分
		</div>
	</NumberInput>
</div>
</Frame>
</template>
<script>
/**预下单 */
import Frame from '@/components/Frame';
import NumberInput from '@/components/NumberInput';

export default {
	components: {
		Frame,
		NumberInput
	},
	data() {
		return {
			isShowPayDialog: false
		};
	},
	created() {
		// 如果未传order_id就表示非法进入，则跳转回首页
		return false;
		this.$router.replace('/');
	},
	methods: {
		pay() {
			this.isShowPayDialog = false;
			this.$loading.show('支付处理中...');
			setTimeout(() => {
				this.$loading.hide();
				this.$tip.show('账户积分不足！账单支付失败！');
			}, 2000)
		},
		closePayDialog() {
			this.isShowPayDialog = false;
		},
		cancelOrder() {

		}
	}
}
</script>
<style>
.iconfont {
	line-height: 0.7rem;
	font-size: 0.4rem;
}
.order-content p {
	line-height: 0.6rem;
}
</style>