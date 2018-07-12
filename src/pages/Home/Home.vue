<template>
  <div>
		<Menu />
		<header id="header" class="mui-bar mui-bar-transparent" :style="{'background-color': 'rgba(249, 48, 76, '+alpha+')'}">
			<a class="mui-action-back mui-icon mui-icon-contact mui-pull-left" ></a>
			<h1 class="mui-title">千寻赞皇</h1>
		</header>

		<div class="mui-content">
			<!--轮播图-->
			<swiper :options="swiperOption">
        <swiper-slide  v-for="(banner,idx) in banners" :key="banner">
					<a href="#" :index="idx">
						<img :src="banner" style="width: 100%">
					</a>
				</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
			<!--轮播图-->

			<!--公告区域-->
			<div class="news">
				<span class="newsfrom">
					<i class="iconfont icon-xiaoxi2"></i> 公告
				</span>
				<marquee class="newslist" direction="up" scrollamount="1">
					<ul style="margin-top: -1px;">
						<li>
								<a href="/M/Notice/9944">卡商网官方：新增3个顶级域名注意...</a>
							</li><li>
								<a href="/M/Notice/7396">卡商网供货商规则变更</a>
							</li><li>
								<a href="/M/Notice/14644">卡商网免手续费加款</a>
							</li><li>
								<a href="/M/Notice/14548">卡商网提现变更通知201-2-1</a>
							</li><li>
								<a href="/M/Notice/14527">通知：老用户绑定QQ和微信登录示...</a>
							</li></ul>
				</marquee>
      	<a href="/M/QueryNotice" class="morenews">更多</a>
    </div>

			<!--公告区域-->
			

			<!--常见业务分类(仅显示7个)，多于7个隐藏起来-->
			<div id="qianggou" style="margin-top: 0px;">
				<ul class="mui-table-view mui-grid-view">
					<li v-for="cata in catas" class="mui-table-view-cell mui-col-xs-3 mui-col-sm-3 iconlist clip"
						@click="jmpToCatas" style="font-size:0.21875rem;">
						<img :src="cata.logo" style="width: 40px;height:45px">
						<div>{{cata.name}}</div>
					</li>
				</ul>
			</div>
			<!--广告活动-->
			<div class="adv">
				<img :src="adv.pic" :title="adv.alt"/>
			</div>
			<!--广告区域-->
			
			<!--日销量最佳-->
			<div class="block">
				<div class="header">
					<span class="mui-icon iconfont icon-msnui-bar-chart"></span>
					<span class="mui-tab-label">日销量最佳</span>
				</div>
				<div class="content goodlist">
					<li v-for="item in top5Goods">
						<div class="list-item">
							<div class="p">
								<a href="//detail.m.tmall.com/item.htm?id=534982361804&amp;abtest=11&amp;rn=2002506802a1e4a929a330dc601ec760&amp;sid=defacd7edd7e387330180d6ca9c39ea9" title="">
									<img class="p-pic" :src="item.pic" style="visibility: visible;">
									<span class="flag c-icon-pt"></span>
								</a>
							</div>
							<div class="d">
								<a href="//detail.m.tmall.com/item.htm?id=534982361804&amp;abtest=11&amp;rn=2002506802a1e4a929a330dc601ec760&amp;sid=defacd7edd7e387330180d6ca9c39ea9" title="">
									<h3 class="d-title">{{item.title}}</h3>
								</a>
								<p>{{item.desc}}</p>
								<p class="d-price">
									<em class="h">
										<span class="price-icon">¥</span>
										<span class="font-num">{{item.price}}</span>
									</em>
								</p>
								<div class="d-main">
									<p class="d-num"><span class="font-num">{{item.sale_amount}}</span>购买</p>
								</div>
							</div>
						</div>
						<div class="icons-group"></div>
					</li>
				</div>
			</div>

			<!--魅力榜-->
			<div class="block">
				<div class="header">
					<span class="mui-icon iconfont icon-aixin"></span>
					<span class="mui-tab-label">魅力榜</span>
				</div>
				<div class="content mui-row charm-ranklist">
					<div v-for="(user,idx) in top3CharmUsers" class="mui-card mui-col-xs-4">
						<div class="mui-card-header">第{{idx+1}}名</div>
						<div class="mui-card-content">
							<img :src="'http://q1.qlogo.cn/g?b=qq&nk='+user.qq+'&s=100&t=1449411350'">
							<p>{{user.nickname}}</p>
							<br/>
							<p>魅力值 <i class="iconfont icon-aixin" style="color:red">98</i></p>
						</div>
						<div class="mui-card-footer">
						今日刷赞{{user.zan_amt}}次;
						<br/>
						今日刷粉{{user.fan_amt}}次;
						</div>
					</div>
				</div>
			</div>

			<!--积分榜-->
			<div class="block">
				<div class="header">
					<span class="mui-icon iconfont icon-meili"></span>
					<span class="mui-tab-label">积分榜</span>
				</div>
				<div class="content">

				</div>
			</div>

		
		
		</div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import pic from '@/assets/logo.png';
import Menu from '@/pages/Index';

export default {
  name: 'hello',
	components: {
		Menu,
		swiper,
		swiperSlide
	},
  data () {
    return {
			alpha: 0,
			swiperOption: {
				slidesPerView: 1,
				spaceBetween: 0,
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			},
			banners: [
				'https://cdn.520cy.cn/Uploads/image/2018-06-13/18589257baeaac9958d6be7fd5ad0919afa9fa.jpg',
				'https://cdn.520cy.cn/Uploads/image/2018-06-13/18589257baeaac9958d6be7fd5ad0a19afa9fa.jpg',
				'https://cdn.520cy.cn/Uploads/image/2018-06-13/1766b850ace8ee884ff8.png'
			],
			catas: [
				{ name: '免费业务', logo: 'http://img5.imgtn.bdimg.com/it/u=171739527,3841594568&fm=200&gp=0.jpg' },
				{ name: '刷赞', logo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1228238028,1047793957&fm=27&gp=0.jpg' },
				{ name: 'QQ业务', logo: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2322919269,2472384179&fm=27&gp=0.jpg' },
				{ name: '短视频', logo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1958064775,2572669376&fm=27&gp=0.jpg' },
				{ name: '影视会员', logo: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=349613919,565425255&fm=27&gp=0.jpg' },
				{ name: '刷粉', logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530778059166&di=f1f3c08b172bf879be93c269c0bc7658&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104e9571c743432f875a399db949b.jpg%401280w_1l_2o_100sh.png' },
				{ name: '游戏代刷', logo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3768522051,1032657102&fm=27&gp=0.jpg' },
				{ name: '杂七杂八', logo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3648330687,678565372&fm=27&gp=0.jpg' }
			],
			// 中间独立打广告
			adv: {
				href: '#', // #表示不跳转
				pic: 'https://cdn.520cy.cn/Uploads/image/2018-06-13/18589257baeaac9958d6be7fd5ad0919afa9fa.jpg',
				alt: '千寻软件市场'
			},
			// 展示当天销量前5的商品
			top5Goods: [
				{ title: '招牌名片赞', desc: '1000赞起刷，最低0.01，秒到账', price: '0.01', pic: 'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg', sale_amount: 2009},
				{ title: '招牌名片赞', desc: '1000赞起刷，最低0.01，秒到账', price: '0.01', pic: 'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg', sale_amount: 2009},
				{ title: '招牌名片赞', desc: '1000赞起刷，最低0.01，秒到账', price: '0.01', pic: 'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg', sale_amount: 2009}
			],
			// 展示当天刷赞+刷粉最高的前3个用户
			top3CharmUsers: [
				{ nickname: 'Telanx', qq: '1241818518', zan_amt: '12,00000', fan_amt: '3000' },
				{ nickname: '猫咪Ceko', qq: '851656783', zan_amt: '12,00000', fan_amt: '3000' },
				{ nickname: '未知网友', qq: '851656785', zan_amt: '12,00000', fan_amt: '3000' },
			]
    }
  },
	mounted() {
		const MAX_SCROLL_HEIGHT = 44;
		document.addEventListener("scroll", () => {
		let th = document.body.scrollTop / 5;
			this.alpha = th / MAX_SCROLL_HEIGHT;
		});
	},
	methods: {
		jmpToCatas() {
			this.$router.push('/catas');
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('swiper/dist/css/swiper.min.css');
.adv {
	padding: 10px 0;
}
.adv img{
	width: 100%;
	height: 100px;
}

.news {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 95%;
		width: 9.5625rem;
    height: 0.625rem;
    border-radius: 0.625rem;
		margin: 0.15625rem auto;
		padding: 0px 0.1875rem;
    background: #fff;
    overflow: hidden;
}
.newsfrom {
	width: 80px;
	color: #f00;
	font-size: 0.328125rem;
}
.newsdes {
    font-size: 0.328125rem;
    padding: 0 0.1875rem;
    color: #f47979;
}

.newslist {
    flex-grow: 1;
    overflow: hidden;
    font-size: 0.28125rem;
    align-self: flex-start;
    height: 20px;
}

.newslist ul li {
    height: 20px;
    line-height: 20px;
		list-style: none;
}

.newslist ul li a {
    color: #656565;
}

.morenews {
	font-size: 0.28125rem;
	color: #040404;
	padding: 0 0.1875rem;
	border-left: 1px solid #040404;
}

.block {
	font-size: 0.28rem;
}
.block .header {
	padding: 5px;
}
.block .content {
	width: 100%;
	background: #fff;
	min-height: 20px;
}

.goodlist>li {
	min-height: 60px;
	padding: 12px 6px;
	border-bottom: 1px solid #dbdbdb;
	position: relative;
	list-style: none;
}
.goodlist>li .list-item {
	display: -webkit-box;
}
.goodlist>li .p {
	  display: inline-block;
    text-align: center;
    overflow: hidden;
		width: 75px;
    height: 75px;
    margin-right: 10px;
    margin-left: 8px;
}
.goodlist>li .d {
	margin: 4px 15px 6px 0;
	-webkit-box-flex: 1;
}
.goodlist .d .d-title {
	  line-height: 22px;
    margin-bottom: 3px;
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    color: #ea5959;
		font-size: 0.382rem;
}
.mui-card {
	margin: 0;
	padding: 5px;
}
.mui-card-content {
	padding: 5px;
	text-align: center;
}

.charm-ranklist img {
	width: 2rem;
	height: 2rem;
	border-radius: 1rem;
}
.mui-card-footer {
	font-size: 0.21875rem;
}
</style>
