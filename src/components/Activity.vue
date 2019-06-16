<template>
<!-- 支付宝红包活动页面 -->
<div class="activity-mask">
  <div class="activity-content">
      <div class="hongbao_content" :class="css" style="margin-top: -150%; ">
        <img class="bg" style="border-radius: 10px;" src="//ugc.qpic.cn/gbar_pic/1FkY6udt8mNe3GD5GSl5nvdtpDMAfIZVxXJicd5XnR9Xwy6SpQqRbKw/0">
				<div class="headimg"><img :src="APP_LOGO" :onerror="'this.src=\''+APP_LOGO+'\''"></div>
				<div>
					<div style="color: #fff;line-height: 20px;margin-top: 39px;" class="mui-row">
						<div class="mui-col-xs-5"><button class="mui-btn mui-btn-danger btn-block" @click="withdraw">红包提现</button></div>
						<div class="mui-col-xs-2"></div>
						<div class="mui-col-xs-5"><button class="mui-btn mui-btn-danger btn-block" @click="close">我知道了</button></div>
					</div>
					
					<!--APP带支付宝的-->
					<div class="text2" v-if="platform=== 'app_zfb'">
						<span style="display: block;font-size:20px;padding: 5px">
							您今天已经领取了，明天再来吧~<br/><br/>
							<button class="btn-block mui-btn mui-btn-warning" @click="useHb">立即使用红包</button>
						</span>
					</div>
					<!--APP不带支付宝的-->
					<div class="text2" v-if="platform=== 'app_nozfb'" style="text-align: center">
						需要使用支付宝才能领取红包哦~<br/><br/>
						<img :src="inviteQR" style="width: 50%" /><br/>
						
					</div>
					<!--手机WAP端-->
					<div class="text2" v-if="platform=== 'wap'" style="padding: 10px">
						<img src="//ugc.qpic.cn/gbar_pic/2wF3sr2LiaVuZUngRum14n6CcutPeMyWJL8IZjXO9icZ6IYZS0UG8lww/0" width="100%"/>
						<br/>
						<span style="color: #000;">
							<textarea ref="zkl">{{zfb.zkl}}</textarea>
							<button class="btn-block mui-btn mui-btn-warning" @click="copy">复制搜索码</button>
						</span>
					</div>
					<!--PC端-->
					<div class="text2" v-if="platform=== 'pc'">
						<span>
							使用支付宝扫一扫领取红包~<br/><br/>
							<img :src="zfb.qr" style="width: 50%" /><br/>
						</span>
					</div>
					
					<div style="font-size: 13px;margin-top: -120px;color: #fff; padding: 5px">
						提示: 领取到的红包可以充值抵扣或提现哦~
					</div>
					
					</div>
				</div>
    </div>
	</div>
</div>
</template>
<script>
const ZFBS = {
	telanx: {
		url: 'https://qr.alipay.com/c1x05442h0tzzssv8pfzbbe',
		zkl: '525419253',
		qr: '//ugc.qpic.cn/gbar_pic/2wF3sr2LiaVsFCtNIafGQhJUJjLTsP9JSyQjAaPXiaeIww7njeCbLXqw/0'
	},
	zxf: {
		url: 'https://qr.alipay.com/c1x084189xyv1j7xzyqbya3',
		zkl: '525419253',
		qr: '//ugc.qpic.cn/gbar_pic/1FkY6udt8mP8iciavJXFcuw3zyEPqepyibqibIRSicDvkSiawJQ9kKEVXHiaw/0'
	},
	maomi: {
		url: 'https://qr.alipay.com/c1x04815r7mui0ayuhu8zdb',
		zkl: '535151565',
		qr: '//ugc.qpic.cn/gbar_pic/1FkY6udt8mMUNPPCRvfrFednkZQ2rYTU7ibDHZAvtdzic8gMj2SfYl3g/0'
	},
	Anjou: {
		url: 'https://qr.alipay.com/c1x03847wlu2pzgfl5l1wbf',
		zkl: '534325754',
		qr: '//ugc.qpic.cn/gbar_pic/1FkY6udt8mP8iciavJXFcuw3zyEPqepyibqibIRSicDvkSiawJQ9kKEVXHiaw/0'
	}
};
const isWap = () => {
	return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);
};

var keys = Object.keys(ZFBS);
var random_key = keys[Math.floor(Math.random() * keys.length)];
var qr = ZFBS[random_key];

export default {
	data() {
		var lowWebview = false;
		var UA = navigator.userAgent.match(/Android\s(\S+)?;/);
		if (UA && UA.length >= 2) {
			var androidVersion = UA[1];
			if (parseFloat(androidVersion) < 5.0) {
				lowWebview = true;
			}
		}
		return {
			lowWebview,
			css: '',
			platform: 'pc',
			zfb: qr,
			inviteQR: '//ugc.qpic.cn/gbar_pic/2wF3sr2LiaVskQEficNdoyQdZbo87PJDZiagbo9iaFF5AXCdGh0Qaxw0aw/0'
		};
	},
  methods: {
		copy() {
			var zklEl = this.$refs.zkl;
			try {
        zklEl.select();
        zklEl.focus();
        document.execCommand('copy', false, null);
        this.$tip.show('已复制,打开支付宝首页输入搜索码即可领取哦~');
        zklEl.blur();
      } catch(err) {
        this.$tip.show('复制失败，您可以手动复制领取哦~');
        console.log(err);
      }
		},
		useHb() {
			this.css = this.lowWebview ? 'slideDownToBottom-L' : 'slideDownToBottom';
			setTimeout(() => {
				this.$emit('close');
				this.$router.push('/user/charge');
			}, 500);
		},
		close() {
			this.css = this.lowWebview ? 'slideDownToBottom-L' : 'slideDownToBottom';
			setTimeout(() => {
				this.$emit('close');
			}, 500);
		},
		withdraw() {
			this.close();
			setTimeout(() => {
				this.$router.push('/activity/zfb');
			}, 500);
		},
		app_zfb_show() {
			this.platform = 'wap';
		},
		app_nozfb_show() {
			this.status = 1;
			this.platform = 'app_nozfb';
		},
		wap_show() {
			this.status = 1;
			this.platform = 'wap';
		},
		pc_show() {
			this.status = 1;
			this.platform = 'pc';
		},
		// 针对APP端的直接跳转
		hasInstall(packageName, result) {
			if (packageName === 'com.eg.android.AlipayGphone' && result) {
				this.app_zfb_show();
			} else {
				this.app_nozfb_show();
			}
		}
  },
	created() {
		window.hasInstall = this.hasInstall;
		if (this.IS_APP) {
				window.zanhuang.jsAndroid(JSON.stringify({
					type: '检测是否安装应用',
					packageName: 'com.eg.android.AlipayGphone',
				}));
		} else {
			// 针对首页网页端和PC端
			if (isWap()) {
				this.wap_show();
			} else {
				this.pc_show();
			}
		}
			
	},
	mounted() {
		setTimeout(() => {
			this.css = 'slideDownToMiddle';
		}, 100);
	}
}
</script>
<style scoped>
.hongbao_content {
	transition: transform 0.6s cubic-bezier(0.49, 0.16, 0.35, 0.72);
}
.slideDownToMiddle {
	transform: translateY(120%);
}
.slideDownToMiddle-L {
	margin-top: 0% !important;
}
.slideDownToBottom 
{
	transform: translateY(350%);
}
.slideDownToBottom-L {
	margin-top: 350% !important;
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
	margin-top:130px;
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