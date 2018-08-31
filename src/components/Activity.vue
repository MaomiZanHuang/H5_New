<template>
<!-- 支付宝红包活动页面 -->
<div class="activity-mask">
  <div class="activity-content">
      <div class="hongbao_content" :class="css" style="margin-top: -150%; ">
        <img class="bg" src="http://download.lanrenmb.com/xin/wap/050908/index_files/hb_bg.png">
        <p style="color: #fff;line-height: 20px;margin-top: -39px;">拇指赞送您一个红包</p>
        <div class="headimg"><img :src="APP_LOGO"></div>
        <div class="text1"></div>
          <div class="text2"><span style="display: block;font-size:20px;">“{{tip}}”</span></div>
          <div class="hbbtn"><img class="btn_hongbao" @click="openHB" src="http://download.lanrenmb.com/xin/wap/050908/index_files/btn_hb.png"></div>
        </div>
    </div>
</div>
</template>
<script>
const TIPS = [
  '刷最NB的赞，就用拇指赞！',
  '小指一抖，Q赞到手！',
]
export default {
	data() {
		return {
			css: '',
			tip: TIPS[Math.floor(Math.random()*TIPS.length)]
		};
	},
  methods: {
    openHB() {
      // 跳转打开支付宝
			this.css = 'slideDownToBottom';
			setTimeout(() => {
				this.$emit('close');
				window.zanhuang.jsAndroid({
					type: '跳转URI',
					url: 'alipays://platformapi/startapp?appId=20000067&url=https://qr.alipay.com/c1x074163rqd5a0uxopxt23'
				});
			}, 500);
    }
  },
	mounted() {
		this.css = 'slideDownToMiddle';
	},
}
</script>
<style scoped>
.hongbao_content {
	transition: transform 0.8s cubic-bezier(0.49, 0.16, 0.35, 0.72);
}
.slideDownToMiddle {
	transform: translateY(150%);
}
.slideDownToBottom {
	transform: translateY(350%);
}
.activity-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999999;
  background: rgba(0, 0, 0, 0.5);
}
.activity-content {
  width: 350px;
  margin: 2rem auto;
}

.hongbao_content{
	width: 280px;
  margin: 0 auto;
  height: 400px;
  position: relative;
  text-align: center;
}
.hongbao_content .bg{
	width:280px;
	height:400px;
}
.hongbao_content .headimg{
	top: 0;
	position:absolute;
	z-index:1;
	width:100%;
	margin-top:40px;
	text-align:center;
}
.hongbao_content .headimg img{
	width:85px;
	height:85px;
	margin: 4px; border-top-left-radius: 85px; border-top-right-radius: 85px; border-bottom-right-radius: 85px; border-bottom-left-radius: 85px; 
}
.hongbao_content .text1,.hongbao_content .text2,.hongbao_content .text3{
	width:100%;
	font-size:18px;
	color:#fff;
	position:absolute;
	top:0;
	z-index:1;
	margin-top:130px;
	text-align:center;
}
.hongbao_content .text2{
	top:0;
	margin-top:160px;
	font-size:14px;
}
.hongbao_content .text3{
	top:0;
	margin-top:190px;
}
.hongbao_content .hbbtn{	
	width:100%;
	text-align:center;
	position:absolute;
	margin-top:240px;
	top:0;
	z-index:1;
}
.hongbao_content .hbbtn img{
	cursor:pointer;
	width:100px;
	height:100px;
}
.hongbao_content .close{
		width:100%;
		font-size:18px;
		color:#fff;
		position:absolute;
		top:0;
		z-index:1;
		margin-top:130px;
		text-align:center;
		margin-top: 10px;
		width: 15px;
		height: 15px;
		left: 10px;
		cursor: pointer;
	}
.hongbao,.hongbao_tishi{
		margin-top:40px;
		text-align:center;
		width:100%;
		height:400px;
		position: absolute;
		z-index:999;
		top:0px;
	}
	.hongbao_tishi{
		display:none;
		height:auto;
		margin-top:200px;
	}
	.hongbao_tishi .text{
		background:#fff;
		margin-right: 10%;
		margin-left: 10%;
		padding:15px;
		border-radius: 5px;
		font-size: 16px;
	}
	.hongbao_tishi a.down,a.channel{
		display: inline-block;
		width: 45%;
		margin-top: 15px;
		background: #3dca3d;
		border-radius: 4px;
		box-shadow: inset 0 0 2px 1px #0cc40c;
		color: #fff;
		height: 35px;
		line-height: 35px;
	}
	.hongbao_tishi a.channel{
		background:#ccc;
		box-shadow: inset 0 0 2px 1px #ccc;
	}
</style>