<template>
<Frame title="订单支付">
<div class="mui-content">
	<div class="mui-card">
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
					<p class="price">单价: <i class="mui-icon iconfont icon-msg6 rmb">{{order.price.rmb}}</i>&nbsp;&nbsp;<i class="mui-icon iconfont icon-ji points">{{order.price.points}}</i></p>
					<p class="amt">数量: {{order.amt}}</p>
					<p class="account">充值QQ: {{order.concat.qq}}</p>
					<p class="remark">补充信息: {{order.remark}}</p>
				</div>
			</div>
		</div>
		<!--页脚，放置补充信息或支持的操作-->
		<div class="mui-card-footer">
			<p class="price" style="width: 100%;text-align: right;">总计: 
				<i class="mui-icon iconfont icon-msg6 rmb">{{order.total_fee.rmb}}</i>
				&nbsp;&nbsp;
				<i class="mui-icon iconfont icon-ji points">{{order.total_fee.points}}</i></p>
		</div>
	</div>
	<p class="text-center" style="line-height: 1.2rem">您的订单已创建，请及时支付！</p>
	<div class="btn-group">
		<button class="mui-btn mui-btn-block mui-btn-primary" @click="isShowPayDialog=true">积分支付({{order.total_fee.points}})</button>
		<button class="mui-btn mui-btn-block mui-btn-danger">在线支付({{order.total_fee.rmb}})</button>
		<br/>
		<br/>
		<button class="mui-btn mui-btn-block"  @click="cancelOrder">取消订单</button>
	</div>
	<NumberInput v-if="isShowPayDialog" @finish-input="pay" @close="closePayDialog">
		<div slot="header">
			订单金额: <i class="mui-icon iconfont icon-msg6"></i>{{order.total_fee.points}} <br/>
			支付方式: <b>积分</b>
		</div>
	</NumberInput>
</div>
</Frame>
</template>
<script>
/**预下单 */
import $ from 'axios';
import {order as ORDER_API} from '@/config/serverApi';
import {replaceVars} from '@/utils/index';
import Frame from '@/components/Frame';
import NumberInput from '@/components/NumberInput';

export default {
	components: {
		Frame,
		NumberInput
	},
	data() {
		return {
			isShowPayDialog: false,
			order: {
				order_id: '',
				goods_name: '',
				spec: '',
				price: {
					rmb: '',
					points: ''
				},
				total_fee: {
					rmb: '',
					points: ''
				},
				concat: {
					qq: ''
				},
				remark: ''

			}
		};
	},
	created() {
		window.vue = this;
		// 如果未传order_id就表示非法进入，则跳转回首页
		const order_id = this.$route.params.id;
		if (!order_id) {
			// 非法订单号进入404页面
			this.$router.replace('/404');
			return false;
		}
		this.$loading.show('加载中...');
		$.get(replaceVars(ORDER_API.getOrder, { id: order_id }))
			.then(({data}) => {
				this.$loading.hide();
				let { amt, order_id, goods_name, spec, price, total_fee, concat, remark } = data;
				price = JSON.parse(price);
				total_fee = {
					rmb: amt * price.rmb,
					points: amt * price.points
				};
				concat = JSON.parse(concat);
				Object.assign(this.order, {order_id, amt, goods_name, spec, price, total_fee, concat, remark})
			})
			.catch(err => {
				console.log(err);
				this.$loading.hide();
				this.$tip.show('网络连接失败！');
			});
	},
	methods: {
		pay(input) {
			this.isShowPayDialog = false;
			this.$loading.show('支付处理中...');
			$.post(replaceVars(ORDER_API.payOrderByPoints, {id: this.order.order_id}), {
				order_id: this.order.order_id,
				pay_pwd: input
			})
				.then(({data}) => {
					this.$loading.hide();
					this.$tip.show(data.msg);
					if (data.status) {
						setTimeout(() => {
							this.$router.push('/order');
						}, 1500);
					}
				})
				.catch(err => {
					this.$loading.hide();
					this.$tip.show('网络连接失败！');
				});
		},
		closePayDialog() {
			this.isShowPayDialog = false;
		},
		cancelOrder() {
			this.$loading.show('申请取消订单...');
			$.get(replaceVars(ORDER_API.cancelOrder, {id: this.order.order_id}))
				.then(({data}) => {
					this.$loading.hide();
					this.$tip.show(data.msg);

					setTimeout(() => {
						this.$router.push('/order');
					}, 1500);
				})
				.catch(err => {
					this.$loading.hide();
					this.$tip.show('网络连接失败！');
				});
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
.price .points {
  color: rgb(12, 125, 157);
}
</style>