<template>
<!-- 支付宝红包活动页面 -->
<div class="activity-mask">
  <div class="activity-content">
      <div class="hongbao_content" :class="css" style="margin-top: -150%; ">
        <img class="bg" style="border-radius: 10px;" src="//ugc.qpic.cn/gbar_pic/1FkY6udt8mNe3GD5GSl5nvdtpDMAfIZVxXJicd5XnR9Xwy6SpQqRbKw/0">
				<div class="headimg"><img :src="tip.pic" :onerror="'this.src=\''+APP_LOGO+'\''"></div>

        <div v-if="status ===0">
					<p style="color: #fff;line-height: 20px;margin-top: -39px;">{{tip.name}}送您一个红包</p>
					<div class="text1"></div>
					<div class="text2"><span style="display: block;font-size:20px;padding: 5px">“{{tip.tip}}”</span></div>
					<div class="hbbtn"><img style="border-radius: 50%" class="btn_hongbao" @click="openHB" src="//ugc.qpic.cn/gbar_pic/1FkY6udt8mNe3GD5GSl5nqicCF2NFjep7eR1qCbVTjOdxxw5AKvRXDg/0"></div>
				</div>

				<div v-else>
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
						复制口令，打开支付宝即可领取红包~<br/><br/>
						<span style="color: #000;">
							<textarea ref="zkl">{{zfb.zkl}}</textarea>
							<button class="btn-block mui-btn mui-btn-warning" @click="copy">复制口令</button>
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
const TIPS = [
  {
		name: '拇指赞',
		tip: '刷最NB的赞，就用拇指赞！',
		pic: ''
	},
  {
		name: '拇指赞',
		tip: '小指一抖，Q赞到手！',
		pic: ''
	},
	{
		name: '赵云',
		tip: '心怀不惧，方能翱翔于天际。',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg'
	},
	{
		name: '孙悟空',
		tip: '道行太浅，老实回家做宅男',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg'
	},
	{
		name: '老夫子',
		tip: '努力的人，应该像好色那样好学',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg'
	},
	{
		name: '张良',
		tip: '伤心不是哭的理由，傻才是。',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg'
	},
	{
		name: '李白',
		tip: '努力有用的话还要天才干什么。',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg'
	},
	{
		name: '韩信',
		tip: '爱恨痴狂，比不过沧海一笑。',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg'	
	},
	{
		name: '花木兰',
		tip: '离家太远会忘记故乡，杀人太多会忘掉自己。',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg'
	},
	{
		name: '貂蝉',
		tip: '花有再开的那天，人有重逢的时候吗？',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg'
	},
	{
		name: '兰陵王',
		tip: '刀锋所划之地，便是疆土',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg'
	},
	{
		name: '项羽',
		tip: '天不容我，我必逆天！',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg'
	},
	{
		name: '安琪拉',
		tip: '生命就像人家的玩偶，修修补补又是一年',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg'
	},
	{
		name: '王昭君',
		tip: '凛冬已至，故乡的梅花开了吗',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg'
	},
	{
		name: '鲁班七号',
		tip: '正在思考，如何攻克地心引力',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg'
	},
	{
		name: '孙膑',
		tip: '人家这么可爱，当然是男孩子',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg'
	},
	{
		name: '孙尚香',
		tip: '夜晚徘徊的可怜家伙，能够收获的只有炮火',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg'
	},
	{
		name: '阿轲',
		tip: '想叫就叫吧，反正是最后一声了',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg'
	},
	{
		name: '妲己',
		tip: '请尽情吩咐妲己，主人',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg'
	},
	{
		name: '亚瑟',
		tip: '王者背负，王者审判，王者不可阻挡',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg'
	},
	{
		name: '后羿',
		tip: '周日被我射熄火了，所以今天是周一',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg'
	},
	{
		name: '宫本武藏',
		tip: '太无敌而找不到对手也是种无敌的忧伤',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg'
	},
	{
		name: '庄周',
		tip: '蝴蝶是我，我就是蝴蝶',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg'
	},
	{
		name: '芈月',
		tip: '征服了男人也就征服了世界',
		pic: '//game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg'
	}
];
const ZFBS = {
	telanx: {
		url: 'https://qr.alipay.com/c1x05442h0tzzssv8pfzbbe',
		zkl: '长按复制此消息，打开支付宝领红包！P6vf5J53rB',
		qr: '//ugc.qpic.cn/gbar_pic/2wF3sr2LiaVsFCtNIafGQhJUJjLTsP9JSyQjAaPXiaeIww7njeCbLXqw/0'
	},
	zxf: {
		url: 'https://qr.alipay.com/c1x084189xyv1j7xzyqbya3',
		zkl: '长按复制此消息，打开支付宝领红包！un4WWF36dv',
		qr: '//ugc.qpic.cn/gbar_pic/1FkY6udt8mP8iciavJXFcuw3zyEPqepyibqibIRSicDvkSiawJQ9kKEVXHiaw/0'
	},
	maomi1: {
		url: 'https://qr.alipay.com/c1x04815r7mui0ayuhu8zdb',
		zkl: '长按复制此消息，打开支付宝领红包！UE8TR5656y',
		qr: '//ugc.qpic.cn/gbar_pic/1FkY6udt8mMUNPPCRvfrFednkZQ2rYTU7ibDHZAvtdzic8gMj2SfYl3g/0'
	},
	maomi2: {
		url: 'https://qr.alipay.com/c1x06974xlit7kazfuchfc7',
		zkl: '长按复制此消息，打开支付宝领红包！QHYSr365Ez',
		qr: '//ugc.qpic.cn/gbar_pic/1FkY6udt8mMUNPPCRvfrFednkZQ2rYTU7ibDHZAvtdzic8gMj2SfYl3g/0'
	},
	Anjou: {
		url: 'https://qr.alipay.com/c1x03847wlu2pzgfl5l1wbf',
		zkl: '长按复制此消息，打开支付宝领红包！hjErck54BR',
		qr: '//ugc.qpic.cn/gbar_pic/1FkY6udt8mP8iciavJXFcuw3zyEPqepyibqibIRSicDvkSiawJQ9kKEVXHiaw/0'
	}
};
const isWap = () => {
	if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ){
		return true;
	} else {
		return false;
	}
};

var keys = Object.keys(ZFBS);
var random_key = keys[Math.floor(Math.random() * keys.length)];
var qr = ZFBS[random_key];

export default {
	data() {
		return {
			css: '',
			status: 0,  // 0未拆开 1拆开了
			platform: 'pc',
			zfb: qr,
			tip: TIPS[Math.floor(Math.random()*TIPS.length)],
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
        this.$tip.show('已复制,打开支付宝即可领取哦~');
        zklEl.blur();
      } catch(err) {
        this.$tip.show('复制失败，您可以手动复制领取哦~');
        console.log(err);
      }
		},
		useHb() {
			this.css = 'slideDownToBottom';
			setTimeout(() => {
				this.$emit('close');
				this.$router.push('/user/charge');
			}, 500);
		},
    openHB() {
			// 针对安装和没安装支付宝处理
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
		close() {
			this.css = 'slideDownToBottom';
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
			window.zanhuang.jsAndroid(JSON.stringify({
				type: '跳转URI',
				url: 'alipays://platformapi/startapp?appId=20000067&url=' + qr.url
			}));
			setTimeout(() => {
				this.status = 1;
			}, 500);
			this.platform = 'app_zfb';
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