<template>
<Frame title="填写订单">
<div class="mui-content">
	<div class="mui-input-group">
		<div class="mui-input-row">
			<label style=" font-family: '微软雅黑'; font-size: 14px;">QQ号</label>
			<input type="text" oninput="qq(event)" placeholder="请填写您的QQ号" style=" font-family: '微软雅黑'; font-size: 12px;" id="qq">
		</div>
	</div>

	<ul class="mui-table-view">
		<li class="mui-table-view-cell">
			QQ头像：
			<img id="headportrait" class="mui-pull-right kaoyou" src="http://q1.qlogo.cn/g?b=qq&nk=851656783&s=100&t=1449411350" style="width: 50%; height: 50%;" />
		</li>
		<li class="mui-table-view-cell" style="font-family: '微软雅黑'; font-size: 14px;">
			付款方式： <span class=" kaoyou">
										
											<br />
									
									</span>
			<ul id="chicuncun" style="padding: 2px ">
				<button type="button" class="mui-btn mui-btn-grey mui-btn-outlined mui-btn-block chicun dianji" style="float: left;" tag="1">现金购买</button>
				<button type="button" class="mui-btn mui-btn-grey mui-btn-outlined mui-btn-block chicun" style="float: left;" tag="2">积分购买</button>

			</ul>
		</li>
		<li class="mui-table-view-cell" style="font-family: '微软雅黑'; font-size: 14px;">

			备注 <span class=" kaoyou">
										
											<br />
											<input type="text" id="beizhu" style="font-family: '微软雅黑'; font-size: 12px;" placeholder="特别要求请留言,客服会视情况处理">
									
									</span>

		</li>
		<li class="mui-table-view-cell">

			<img id="itemImg" src="." width="20%" style="float: left;">
			<span style="width:80%;text-align: left;padding-left: 22px;float: right;font-family: '微软雅黑'; font-size: 14px;">
						<p id="itemName" style="font-family: '微软雅黑'; font-size: 16px; color:black;">QQ名片赞 </p>
				<p style="font-family: '微软雅黑'; font-size: 14px;"><font id="itemPrice" color="red">¥ 178</font></p>
				<p id="itemNum" style="font-family: '微软雅黑'; font-size: 14px;">数量:1</p>
				<p id="itemSpecName" style="font-family: '微软雅黑'; font-size: 14px;">规格:1.0磅(约13x13cm)</p>
			</span>

		</li>
		<li class="mui-table-view-cell" style="font-family: '微软雅黑'; font-size: 14px;">

			商品金额 <span id="totalMoney" class="mui-pull-right" style="color: red;">¥ 100.00</span>

		</li>
		<li class="mui-table-view-cell" style="font-family: '微软雅黑'; font-size: 14px;">

			其他 <span class="mui-pull-right " style="color: red;">¥ 0.00</span>

		</li>
		<li class="mui-table-view-cell" style="font-family: '微软雅黑'; font-size: 14px;">

			优惠 <span class="mui-pull-right" style="color: greenyellow;">-¥ 0.00</span>

		</li>

	</ul>
		</div>
		<br />
		<br />
		<br />
		<nav class="mui-bar mui-bar-tab" style="font-family: '微软雅黑'; font-size: 14px;">
			<a class="mui-tab-item mui-active" style="color: #000000;">

				<span class="mui-tab-label">应付总额:</span>
			</a>
			<a class="mui-tab-item">

				<span id="should" class="mui-tab-label">¥100.00</span>
			</a>

			<a class="mui-tab-item" style="background-color: red;color: #fff;font-weight: bold;" id="tijiaodingdan">

				<span id="submitOrder" class="mui-tab-label">提交订单</span>
			</a>
</nav>
</Frame>
</template>
<script>
/**预下单 */
import Frame from '@/components/Frame';

export default {
	components: {
		Frame
	}
}
</script>