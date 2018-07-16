<template>
<Frame title="商品明细">
<nav class="mui-bar mui-bar-tab">
  <a class="mui-tab-item mui-active" id="zixun">
    <span class="mui-icon mui-icon-chat"></span>
    <span class="mui-tab-label" style="font-family: '微软雅黑'; font-size: 12px;">咨询</span>
  </a>

  <a @click="buy" class="mui-tab-item"  style="color: #FFFFFF;background-color: red;" ref="buyBtnzanhuang">
    <span class="mui-icon mui-icon-gear"></span>
    <span class="mui-tab-label" style="font-family: '微软雅黑'; font-size: 12px;">立即订购</span>
  </a>
</nav>

<div class="mui-content">
    <img id="Goodsimg" src="https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg" width="100%" onerror="this.src='';this.onerror=null" />
    <span id="title" style="font-family: '微软雅黑'; font-size: 14px;">
        {{data.goods.goodsName}}
    </span>
    <h5 id="jieshao" style="font-family: '微软雅黑'; font-size: 12px; line-height: 20px;">{{data.goods.caption}}</h5>
    <span id="jiage" style="font-family: '微软雅黑'; font-size: 14px;">
        ¥ {{data.goods.price}} <span><s>市场价: ¥ 128-288</s></span>
    </span>
    <span>
        <ul class="mui-table-view" id="xiangqing">
                <li class="mui-table-view-cell">
                    <a class="mui-navigate-right" href="#peisongsong">
                        <h5 style="font-family: '微软雅黑'; font-size: 14px;">规格 <span id="guige">
                            
                        </span></h5>
    </a>
    </li>
    <li class="mui-table-view-cell">

      <h5 style="font-family: '微软雅黑'; font-size: 14px;">标记<span id="peisong">{{data.goods.tab}} </span></h5>

    </li>
    <li class="mui-table-view-cell">

      <h5> <span id="peisongshuoming" style="font-family: '微软雅黑'; font-size: 14px;">
                            <span class="mui-icon mui-icon-location"></span>注意看下单介绍喔</span></h5>

    </li>

    </ul>
    </span>

    <div class="mui-table-view-cell" style="width: 100%; height: 40px; background-color: #FFFFFF; margin-top: 8px; font-family: '华文彩云'; color: #929292;" >
      图文详细
    </div>
      <div id="details" style="margin-top: 8px; background-color: #FFFFFF;">
      {{data.goodsDesc.introduction}}
      <ul>
					<li v-for="img in data.goodsDesc.itemImages">
						<span>{{img.url}}</span>
					</li>
				</ul>
      </div>

    <div id="details" style="margin-top: 8px; background-color: #FFFFFF;"></div>
    
    <!--底部结束图片-->
    <div style="text-align:center">
      <img src="" />
    </div>
    <!--底部结束图片-->

  </div>
<div v-show="isShowUnitDialog" class="mui-backdrop mui-backdrop-actio mui-active fade" style=""></div>
<div v-show="isShowUnitDialog" ref="unitDialog" class="mui-popover mui-popover-action mui-popover-bottom mui-active fade" style="display: block;">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<img id="purchase_img" src="https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg" width="20%" style="float: left;">
					<span id="xiaojie" class="xiaojie" style="width:60%">招牌名片赞 数量800个</span>
					<p><font color="red" id="purchase_price">¥ 0.1元 或 1积分</font> </p>

				</li>
				<li class="mui-table-view-cell" style="padding: 2px auto;">
					<h5 style="float: left;">规格</h5>
					<ul class="mui-table-view mui-grid-view" id="chicuncun" style="padding: 2px auto;">


					<button v-for="unit in units" type="button" class="mui-btn mui-btn-grey mui-btn-outlined mui-btn-block chicun dianji" style="float: left;" tag="0">{{unit}}</button>
          </ul>
				</li>
				<li class="mui-table-view-cell">
					<h5 style="float: left;font-family: '微软雅黑'; font-size: 14px;">购买数量:{{num}}</h5>

					<div class="mui-numbox" data-numbox-step="1" data-numbox-min="1" data-numbox-max="10" style="float: right;">
						<button id="numSub" class="mui-btn mui-btn-numbox-minus" type="button"  @click="dec">-</button>
						<input id="num" class="mui-input-numbox" type="number" v-model="num">
						<button id="numUb" class="mui-btn mui-btn-numbox-plus" type="button" @click="inc">+</button>
					</div>
				</li>
			</ul>
			<ul class="mui-table-view" style="background-color: red;color: #FFFFFF;">
				<li class="mui-table-view-cell">
					<router-link to="/preorder" id="lijidinggou"><b style="font-family: '微软雅黑'; font-size: 14px;">立即订购</b></router-link>
				</li>
			</ul>
		</div>
</Frame>
		

</template>
<script>
/** 注意分不同商品指定不同的策略 */
import Frame from '@/components/Frame';

const MAX_NUM = 10;
const MIN_NUM = 1;
export default {
  components: {
    Frame
  },
  data() {
    return {
      isShowUnitDialog: false,
      units: ['数量800个', '数量1000个', '数量2000个', '数量5000个'],
      num: 1,
      data: {"itemList":[{"barcode":"","category":"招牌名片赞","categoryid":11,"communityAccountId":"","communityGoodsId":"","createTime":"2018-06-15 18:03:36","goodsId":10000068,"id":11000212,"image":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3242139572,2186831585&fm=27&gp=0.jpg","integral":1,"isDefault":"1","isEnableSelfMotion":"","num":0,"price":0.10,"quantity":"500","sellPoint":"","seller":"","sellerId":"","spec":"","status":"1","stockCount":0,"title":"数量800个","updateTime":"2018-06-15 18:03:36"},{"barcode":"","category":"招牌名片赞","categoryid":11,"communityAccountId":"","communityGoodsId":"","createTime":"2018-06-15 18:03:37","goodsId":10000068,"id":11000213,"image":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3242139572,2186831585&fm=27&gp=0.jpg","integral":2,"isDefault":"","isEnableSelfMotion":"","num":0,"price":0.20,"quantity":"500","sellPoint":"","seller":"","sellerId":"","spec":"","status":"1","stockCount":0,"title":"数量500个","updateTime":"2018-06-15 18:03:37"},{"barcode":"","category":"招牌名片赞","categoryid":11,"communityAccountId":"","communityGoodsId":"","createTime":"2018-06-15 18:03:37","goodsId":10000068,"id":11000214,"image":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3242139572,2186831585&fm=27&gp=0.jpg","integral":3,"isDefault":"","isEnableSelfMotion":"","num":0,"price":0.30,"quantity":"600","sellPoint":"","seller":"","sellerId":"","spec":"","status":"1","stockCount":0,"title":"数量600个","updateTime":"2018-06-15 18:03:37"},{"barcode":"","category":"招牌名片赞","categoryid":11,"communityAccountId":"","communityGoodsId":"","createTime":"2018-06-15 18:03:37","goodsId":10000068,"id":11000215,"image":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3242139572,2186831585&fm=27&gp=0.jpg","integral":4,"isDefault":"","isEnableSelfMotion":"","num":0,"price":0.40,"quantity":"700","sellPoint":"","seller":"","sellerId":"","spec":"","status":"1","stockCount":0,"title":"数量700个","updateTime":"2018-06-15 18:03:37"},{"barcode":"","category":"招牌名片赞","categoryid":11,"communityAccountId":"","communityGoodsId":"","createTime":"2018-06-15 18:03:37","goodsId":10000068,"id":11000216,"image":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3242139572,2186831585&fm=27&gp=0.jpg","integral":4,"isDefault":"","isEnableSelfMotion":"","num":0,"price":0.40,"quantity":"700","sellPoint":"","seller":"","sellerId":"","spec":"","status":"1","stockCount":0,"title":"数量700个","updateTime":"2018-06-15 18:03:37"}],"goods":{"auditStatus":"2","caption":"招牌名片赞 速度快 价格低","category1Id":2,"category2Id":11,"category3Id":0,"communityAccount":3,"communityGoodsId":1,"defaultItemId":0,"goodsName":"招牌名片赞","id":10000068,"integral":1,"isDelete":"","isEnableSelfMotion":"1","isEnableSpec":"1","isMarketable":"1","price":0.10,"sellerId":"猫小咪","smallPic":"https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg","tab":"日刷10万 请不要重复下单","typeTemplateId":0,"volume":0,"volumeDay":0,"volumeMonth":0},"goodsDesc":{"customAttributeItems":"","goodsId":10000068,"introduction":"\n\t运营社区：千寻赞皇官方\n\n\n\t充值产品：QQ名片赞\n\n\n\t充值方式：秒充值（20秒开始）\n\n\n\t充值速度：日刷6-8万\n","itemImages":"[{\"url\":\"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3242139572,2186831585&fm=27&gp=0.jpg\"},{\"url\":\"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=760079672,1174618124&fm=27&gp=0.jpg\"},{\"url\":\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529065621645&di=e9f771f3ed04624dc6f15d3fab8f66ba&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fac345982b2b7d0a202dc6d61cdef76094b369a30.jpg\"}]","packageList":"","saleService":"无","specificationItems":"[]"}},
    };
  },
  methods: {
    buy() {
      this.isShowUnitDialog = true;
    },
    inc() {
      this.num < MAX_NUM && this.num++;
    },
    dec() {
      this.num > MIN_NUM && this.num--;
    }
  },
  mounted() {
    let unitDialogEl = this.$refs.unitDialog;
    let _this = this;
    let buyEl = this.$refs.buyBtn;
    window.unitDialogEl = unitDialogEl;
    document.body.addEventListener('click', e => {
      if (!unitDialogEl.contains(e.target) && e.target !== buyEl) {
        _this.isShowUnitDialog = false;
      }
    });
  }
}
</script>

<style scoped>
@import url('swiper/dist/css/swiper.min.css');

#title {
	margin-left: 20px;
	font-weight: bold;
}

#jieshao {
	margin: 12px 12px;
	font-size: 16px;
}
.mui-btn {
				font-size: 16px;
				padding: 8px;
				/*margin: 3px;*/
			}
#jiage {
	font-size: 18px;
	margin-left: 20px;
	color: red;
}

#jiage span {
	color: #ccc;
}

#xiangqing li {
	/*padding-top: 30px;*/
	/*line-height: 50px;*/
}

#guige {
	padding-left: 20px;
	color: #000000;
}

#peisong {
	padding-left: 20px;
	color: #000000;
}

#peisongshuoming {
	color: #000000;
}

.wuxing {
	float: right;
}
.pingjianeirong{
	margin-top: 10px;
	/*padding: 0;*/
}
.pingjiatu{
	margin-top: 10px;
}
.xiaojie{
	color: #000000;
}
#chicuncun  button{
	color: darkgrey;
	font-size: 12px;
	width: 48%;
	margin-left: 5px;
}
#chicuncun{
	margin-left: 0;
	padding-left: 0;
}
.dianji{
	color: darkred;
	border-color: darkred;
}

.fade {
  transition: all .5s ease;
}
</style>