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
					<i class="iconfont icon-xiaoxi2" style="font-size: 0.325rem"></i> 公告
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
						<img :src="cata.logo" style="width: 40px;height:40px">
						<div style="margin-top: 10px;">{{cata.name}}</div>
					</li>
				</ul>
			</div>
			<!--广告活动-->
			<div class="adv">
				<img src="https://cdn.520cy.cn/images/appbazaar.png" >
				<!-- <img :src="adv.pic" :title="adv.alt"/> -->
			</div>
			<!--广告区域-->

			<!--活动导航-->
			<div id="qianggou" style="margin-top: 0px;">
				<ul class="mui-table-view mui-grid-view" id="activity">
					<li class="mui-table-view-cell mui-media mui-col-xs-6">
						<div class="mui-media-body" style="position: absolute; background:#FFFFFF; top:25%; color:#000000;  height:35%; margin-top:0%; width:115px; font-family:'黑体'; font-size: 16px;">活动活动</div>\
						<div class="mui-media-body1" style="position: absolute; background:#FFFFFF; top:65%; color:#AAAAAA;  height:35%; margin-top:0%; width:115px; font-family:'微软雅黑'; font-size: 10px;">活动</div>
						<img class="mui-media-object" src="https://cdn.520cy.cn/Uploads/image/2018-06-13/4229a650ae.png" style="width: 40px; margin-left: 100px;">
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-6">
						<div class="mui-media-body" style="position: absolute; background:#FFFFFF; top:25%; color:#000000;  height:35%; margin-top:0%; width:115px; font-family:'黑体'; font-size: 16px;">活动活动</div>\
						<div class="mui-media-body1" style="position: absolute; background:#FFFFFF; top:65%; color:#AAAAAA;  height:35%; margin-top:0%; width:115px; font-family:'微软雅黑'; font-size: 10px;">活动</div>
						<img class="mui-media-object" src="https://cdn.520cy.cn/Uploads/image/2018-06-13/4229a650ae.png" style="width: 40px; margin-left: 100px;">
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-6">
						<div class="mui-media-body" style="position: absolute; background:#FFFFFF; top:25%; color:#000000;  height:35%; margin-top:0%; width:115px; font-family:'黑体'; font-size: 16px;">活动活动</div>\
						<div class="mui-media-body1" style="position: absolute; background:#FFFFFF; top:65%; color:#AAAAAA;  height:35%; margin-top:0%; width:115px; font-family:'微软雅黑'; font-size: 10px;">活动</div>
						<img class="mui-media-object" src="https://cdn.520cy.cn/Uploads/image/2018-06-13/4229a650ae.png" style="width: 40px; margin-left: 100px;">
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-6">
						<div class="mui-media-body" style="position: absolute; background:#FFFFFF; top:25%; color:#000000;  height:35%; margin-top:0%; width:115px; font-family:'黑体'; font-size: 16px;">活动活动</div>\
						<div class="mui-media-body1" style="position: absolute; background:#FFFFFF; top:65%; color:#AAAAAA;  height:35%; margin-top:0%; width:115px; font-family:'微软雅黑'; font-size: 10px;">活动</div>
						<img class="mui-media-object" src="https://cdn.520cy.cn/Uploads/image/2018-06-13/4229a650ae.png" style="width: 40px; margin-left: 100px;">
					</li>
					<div style="position: absolute; left:50% ; background:#EEEEEE; top:0%;  height:100%;  width:1px; "></div>
					<div style="position: absolute; ; background:#EEEEEE; top:50%;  height:1%;  width:100%; "></div>
					
				</ul>
			</div>
			<!--活动导航-->
			
			<!--日销量最佳-->
			<div class="block">
				<div class="header">
					<span class="mui-icon iconfont icon-msnui-bar-chart"></span>
					<span class="mui-tab-label">日销量最佳</span>
					<router-link to="/hotgoods" class="fright">更多>></router-link>
				</div>
				<!-- <div class="content goodlist">
					<li v-for="item in top5Goods" @click="buyGoods(item.id)">
						<div class="list-item">
							<div class="p">
								<a href="#" title="">
									<img class="p-pic" :src="item.pic" style="visibility: visible;">
									<span class="flag c-icon-pt"></span>
								</a>
							</div>
							<div class="d">
								<a href="#" title="">
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
				</div> -->
			</div>

			<!--商品列表-->
			<div id="goodsList" class="mui-table-view mui-grid-view own-gray-color" style="margin-top: 0.3rem;">
				<li v-for="item in top5Goods" @click="buyGoods(item.id)" class="mui-table-view-cell mui-media mui-col-xs-6">
					<div class= "bgDiv">
						<img class="mui-media-object" src="https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg" onerror="this.src='../images/pic-null.png';this.onerror=null"/>
						<div class="mui-media-body">
							<p class="mui-ellipsis-2">{{item.title}}</p>
							<p class="price-one">¥ {{item.price}}</p>
							<p class="price-two">{{item.sale_amount}}购买</p>
						</div>
					</div>
				</li>
			</div>
			<!--商品列表-->

			<!--积分榜-->
			<!-- <div class="block">
				<div class="header">
					<span class="mui-icon iconfont icon-meili"></span>
					<span class="mui-tab-label">积分榜</span>
				</div>
				<div class="content">

				</div>
			</div> -->

			<!--底部结束图片-->
			<div style="text-align:center;height:120px">
				<img src="@/assets/base_img.png" />
			</div>
			<!--底部结束图片-->

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
				{ name: '免费业务', logo: 'https://cdn.520cy.cn/images/免费.png' },
				{ name: '刷赞', logo: 'https://cdn.520cy.cn/images/点赞.png' },
				{ name: 'QQ业务', logo: 'https://cdn.520cy.cn/images/QQ会员.png' },
				{ name: '短视频', logo: 'https://cdn.520cy.cn/images/抖音短视频.png' },
				{ name: '影视会员', logo: 'https://cdn.520cy.cn/images/影视.png' },
				{ name: '刷粉', logo: 'https://cdn.520cy.cn/images/粉丝.png' },
				{ name: '游戏代刷', logo: 'https://cdn.520cy.cn/images/游戏.png' },
				{ name: '杂七杂八', logo: 'https://cdn.520cy.cn/images/杂七杂八.png' }
			],
			// 中间独立打广告
			adv: {
				href: '#', // #表示不跳转
				pic: 'https://cdn.520cy.cn/Uploads/image/2018-06-13/18589257baeaac9958d6be7fd5ad0919afa9fa.jpg',
				alt: '千寻软件市场'
			},
			// 展示当天销量前5的商品
			top5Goods: [
				{ id: 0, title: '招牌名片赞', desc: '1000赞起刷，最低0.01，秒到账', price: '0.01', pic: 'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg', sale_amount: 2009},
				{ id: 1, title: '招牌名片赞', desc: '1000赞起刷，最低0.01，秒到账', price: '0.01', pic: 'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg', sale_amount: 2009},
				{ id: 2, title: '招牌名片赞', desc: '1000赞起刷，最低0.01，秒到账', price: '0.01', pic: 'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg', sale_amount: 2009},
				{ id: 2, title: '招牌名片赞', desc: '1000赞起刷，最低0.01，秒到账', price: '0.01', pic: 'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg', sale_amount: 2009},
				{ id: 2, title: '招牌名片赞', desc: '1000赞起刷，最低0.01，秒到账', price: '0.01', pic: 'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg', sale_amount: 2009}
			]
    }
  },
	mounted() {
		const MAX_SCROLL_HEIGHT = 44;
		document.addEventListener("scroll", () => {
		let th = (document.body.scrollTop || window.scrollY) / 5;
			this.alpha = th / MAX_SCROLL_HEIGHT;
		});
	},
	methods: {
		jmpToCatas() {
			this.$router.push('/catas');
		},
		buyGoods(id) {
			this.$router.push('/goods/' + id);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('swiper/dist/css/swiper.min.css');


/*列表样式*/
.mui-table-view:after {
		height: 0px;
	}
	/*图片显示的时候设置为自动 因为 从服务器来的图片大小相同*/
	
	.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
		line-height: auto;
		max-width: auto;
		height: auto;
		border-top-right-radius: 4px;
		border-top-left-radius: 4px;
	}
	
	.mui-table-view-cell {
		margin-bottom: 10px;
	}
	
	.bgDiv {
		border: 1px solid rgba(204, 204, 204, 0.7);
		border-radius: 5px;
		background-color: white;
		width: 100%;
	}
	
	.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
		margin-top: 2px;
		margin-bottom: 5px;
		height: auto;
	}
	
	.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body p {
		white-space: pre;
		color: black;
	}
	
	.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body p.mui-ellipsis-2 {
		height: 30px;
	}
	
	.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body .price-one {
		margin-top: 12px;
		float: left;
		font-size: 1.1em;
		margin-left: 7%;
		color: red;
		margin-bottom: 10px;
	}
	
	.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body .price-two {
		margin-top: 12px;
		float: right;
		font-size: 1.1em;
		margin-right: 7%;
	}


/*去mui掉顶边和底部边框*/
.mui-table-view:after {
	height: 0px;
}
.mui-table-view:before {
	height: 0px;
} 

.mui-bar-tab .mui-tab-item.mui-active {
	color: #f9304c;
}

body {
	background-color: #EFEFF4;
}


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
	width: 60px;
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
	padding: 0 0 0 0.1875rem;
	width: 40px;
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
