<template>
<Frame title="商品明细">
<nav class="mui-bar mui-bar-tab" style="font-family: '微软雅黑'; font-size: 14px;">
			<a class="mui-tab-item mui-active" style="color: #000000;">

				<span class="mui-tab-label">应付总额:</span>
			</a>
			<a class="mui-tab-item price-points">
        <p><i class="mui-icon iconfont icon-msg6 price"> {{(form.amt * form.selectSpec.rmb).toFixed(2)}}</i></p>
		    <p><i class="mui-icon iconfont icon-ji points"> {{(form.amt * form.selectSpec.points).toFixed(2)}}</i></p>
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
      <p><i class="mui-icon iconfont icon-msg6 price"> {{form.selectSpec.rmb}}</i></p>
		  <p><i class="mui-icon iconfont icon-ji points"> {{form.selectSpec.points}}</i></p>
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
                :class="unit.id == form.selectSpec.id ? 'mui-btn-danger' : 'mui-btn-grey'"
                class="mui-btn mui-btn-outlined mui-btn-block guige-btn" style="float: left;" 
                tag="0"
                @click="form.selectSpec = unit"
              >{{unit.title}}</button>
            </ul>
          </li>
          <li class="mui-table-view-cell">
            <h5 style="float: left;font-family: '微软雅黑'; font-size: 14px;">购买数量:{{form.amt}}</h5>

            <div class="mui-numbox" data-numbox-step="1" data-numbox-min="1" data-numbox-max="99" style="float: right;">
              <button id="numSub" class="mui-btn mui-btn-numbox-minus" type="button"  @click="dec">-</button>
              <input id="num" class="mui-input-numbox" type="number" v-model="form.amt">
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
          <input type="text" class="mui-input-clear" v-model="form.qq" placeholder="请输入QQ号" />
        </div>
        <div class="mui-input-row">
          <label>其它说明</label>
          <textarea v-model="form.remark" rows="2" placeholder="特别要求请留言(选填)"></textarea>
        </div>

      </li>
      
    </ul>
    <ul class="mui-table-view" style="background-color: red;color: #FFFFFF;">
      <li class="mui-table-view-cell" @click="createOrder">
        <a><b style="font-family: '微软雅黑'; font-size: 14px;">立即下单</b></a>
      </li>
    </ul>
  </div>
</Frame>
		

</template>
<script>
/** 注意分不同商品指定不同的策略 */
import $ from 'axios';
import Frame from '@/components/Frame';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import {replaceVars} from '@/utils/index';
import {goods as GOODS_API, order as ORDER_API} from '@/config/serverApi';

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
      form: {
        amt: 1,
        selectSpec: {},
        remark: '',
        qq: ''
      },
      isShowUnitDialog: false,
      goods: {
        title: '招牌名片赞',
        logo: '',
        pics: [
          'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-04-04/5ac4f1f9e49df.jpg',
          'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f65b7e59f.jpg',
          'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f6c02d8b0.jpg'
        ],
        detail: '商品详细',
        specs: []  
      }
    };
  },
  created() {
    window.vue = this;
    const goods_id = this.$route.params.id;
    $.get(replaceVars(GOODS_API.getGoods, {id: goods_id}))
      .then(({ data }) => {
        if (!data.pics) {
          data.pics = [data.logo];
        }
        this.goods = data;
        
        this.$nextTick(() => {
          this.form.selectSpec = data.specs[0];
        })
      })
      .catch(err => {
        this.$tip.show('网络连接失败！请稍后重试！');
      })
  },
  methods: {
    buy() {
      this.isShowUnitDialog = true;
    },
    inc() {
      this.form.amt < MAX_NUM && this.form.amt++;
    },
    dec() {
      this.form.amt > MIN_NUM && this.form.amt--;
    },
    createOrder() {
      $.post(ORDER_API.createOrder, {
        goods_id: this.$route.params.id,
        // 规格
        spec_id: this.form.selectSpec.id,
        // 数量
        amt: this.form.amt,
        // 下单数据，JSON,常用包括qq,kuaishou之类的
        concat: JSON.stringify({ qq: this.form.qq }),
        // 留言备注
        remark: this.form.remark
      })
        .then(({data}) => {
          this.$tip.show(data.msg);
          if (data.status === 1) {
            this.$router.push('/preorder/' + data.order.order_id);
          }
        })
        .catch(err => {
          console.log(err);
          this.$tip.show('创建订单失败！网络连接失败！');
        })
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