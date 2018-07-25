<template>
<Frame title="商品明细">
<nav class="mui-bar mui-bar-tab" style="font-family: '微软雅黑'; font-size: 14px;">
			<a class="mui-tab-item mui-active" style="color: #000000;">

				<span class="mui-tab-label">应付总额:</span>
			</a>
			<a class="mui-tab-item price-points">
        <p><i class="mui-icon iconfont icon-msg6 price"> {{(num * selectSpec.price).toFixed(2)}}</i></p>
		    <p><i class="mui-icon iconfont icon-ji points"> {{(num * selectSpec.points).toFixed(2)}}</i></p>
			</a>

			<a class="mui-tab-item" style="background-color: red;color: #fff;font-weight: bold;" id="tijiaodingdan">

				<span id="submitOrder" class="mui-tab-label" @click="buy" ref="buyBtn">立即购买</span>
			</a>
</nav>

<div class="mui-content">
  <swiper :options="swiperOption" :style="{height:'400px'}">
    <swiper-slide  v-for="(pic,idx) in goods.pics" :key="pic">
      <a href="#" :index="idx">
        <img :src="pic" style="width: 100%;height: 100%">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  <div class="mui-row goods-header">
    <div class="mui-col-xs-8 goods-title">{{goods.title}}</div>
    <div class="mui-col-xs-4 price-points">
      <p><i class="mui-icon iconfont icon-msg6 price"> {{selectSpec.price}}</i></p>
		  <p><i class="mui-icon iconfont icon-ji points"> {{selectSpec.points}}</i></p>
    </div>
  </div>
  
    <span>
        <ul class="mui-table-view" id="xiangqing">
          <li class="mui-table-view-cell">
            <a class="">
              <h5 style="font-family: '微软雅黑'; font-size: 14px;">规格</h5>
            </a>
            <ul class="mui-table-view mui-grid-view" style="padding: 2px auto;">
              <button v-for="unit in goods.specs"
                type="button"
                :class="unit.id == selectSpec.id ? 'mui-btn-danger' : 'mui-btn-grey'"
                class="mui-btn mui-btn-outlined mui-btn-block guige-btn" style="float: left;" 
                tag="0"
                @click="selectSpec = unit"
              >{{unit.title}}</button>
            </ul>
          </li>
          <li class="mui-table-view-cell">
            <h5 style="float: left;font-family: '微软雅黑'; font-size: 14px;">购买数量:{{num}}</h5>

            <div class="mui-numbox" data-numbox-step="1" data-numbox-min="1" data-numbox-max="99" style="float: right;">
              <button id="numSub" class="mui-btn mui-btn-numbox-minus" type="button"  @click="dec">-</button>
              <input id="num" class="mui-input-numbox" type="number" v-model="num">
              <button id="numUb" class="mui-btn mui-btn-numbox-plus" type="button" @click="inc">+</button>
            </div>
				</li>
    </ul>
    </span>

    <div class="mui-table-view-cell" style="width: 100%; height: 40px; background-color: #FFFFFF;color: #929292;" >
      商品详细
    </div>
    <div class="goods-details" style="padding: 10px; background-color: #FFFFFF;">
    {{goods.detail}}
    <ul>
        
					
				</ul>
      </div>

    <div id="details" style="margin-top: 8px; background-color: #FFFFFF;"></div>
    
    <!--底部结束图片-->
    <div style="text-align:center">
      <img src="" />
    </div>
    <!--底部结束图片-->

  </div>

<div v-show="isShowUnitDialog" class="mui-backdrop mui-backdrop-actio mui-active fade"></div>
<div v-show="isShowUnitDialog" ref="unitDialog" class="mui-popover mui-popover-action mui-popover-bottom mui-active"  style="display: block;">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell">
        <img id="purchase_img" src="https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg" width="20%" style="float: left;">
        <span id="xiaojie" class="xiaojie" style="width:60%">招牌名片赞 数量800个</span>
        <p><font color="red" id="purchase_price">¥ 0.1元 或 1积分</font> </p>

      </li>
      <li class="mui-table-view-cell" style="padding: 2px auto;">
        <div class="mui-input-row">
          <label>下单QQ</label>
          <input type="text" class="mui-input-clear" placeholder="请输入QQ号" />
        </div>
        <div class="mui-input-row">
          <label>其它说明</label>
          <textarea id="textarea" rows="2" placeholder="特别要求请留言(选填)"></textarea>
        </div>

      </li>
      
    </ul>
    <ul class="mui-table-view" style="background-color: red;color: #FFFFFF;">
      <li class="mui-table-view-cell">
        <router-link to="/preorder" id="lijidinggou"><b style="font-family: '微软雅黑'; font-size: 14px;">立即下单</b></router-link>
      </li>
    </ul>
  </div>
</Frame>
		

</template>
<script>
/** 注意分不同商品指定不同的策略 */
import Frame from '@/components/Frame';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

const MAX_NUM = 99;
const MIN_NUM = 1;
export default {
  components: {
    Frame,
    swiper,
    swiperSlide
  },
  data() {
    return {
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
      num: 1,
      selectSpec: {},
      isShowUnitDialog: false,
      goods: {
        title: '招牌名片赞',
        logo: '',
        pics: [
          'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-04-04/5ac4f1f9e49df.jpg',
          'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f65b7e59f.jpg',
          'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f6c02d8b0.jpg'
        ],
        detail: '日刷10w，请勿重复下单！秒到账，欢迎下单！',
        specs: [
          { id:0, title: '数量800个', price: 0.02, points: 200 },
          { id: 1, title: '数量1000个', price: 0.03, points: 500 },
          { id: 2, title: '数量2000个', price: 0.05, points: 1000 },
          { id: 3, title: '数量5000个', price: 0.1, points: 2000 }
        ]  
      }
    };
  },
  computed: {
    specPoint() {},
    specPrice() {
      return this.selectSpec
    }
  },
  methods: {
    buy() {
      console.log('购买');
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
    document.body.addEventListener('click', e => {
      if (!unitDialogEl.contains(e.target) && e.target !== buyEl) {
        _this.isShowUnitDialog = false;
      }
    });

    this.selectSpec = this.goods.specs[0];
  }
}
</script>

<style scoped>
@import url('swiper/dist/css/swiper.min.css');
.goods-header {
  padding: 10px;
	font-weight: bold;
  background: #fff;
  line-height: 25px;
  font-size: 0.325rem;
  margin-bottom: 10px;
}

.mui-btn {
  font-size: 16px;
  padding: 8px;
  /*margin: 3px;*/
}

.guige-btn {
  margin-left: 10%;
  width: 40%;
}
.guige-btn:not(.mui-btn-danger) {
	  float: left;
    color: #abc;
}

.price-points i {
	font-weight: 300;
  line-height: 0.7rem;
  font-size: 0.4rem;
}
.price-points .price {
  color: rgb(255, 74, 66);
}
 .price-points .points {
  color: rgb(12, 125, 157);
 }

</style>