<template>
<Frame title="商品明细">
<nav class="mui-bar mui-bar-tab" style="font-family: '微软雅黑'; font-size: 14px;">
			<a class="mui-tab-item mui-active" style="color: #000000;">

				<span class="mui-tab-label">应付总额:</span>
			</a>
			<a class="mui-tab-item price">
        <!--<p><i class="mui-icon iconfont icon-msg6 rmb"> {{(form.amt * form.selectSpec.rmb).toFixed(2)}}</i></p>-->
		    <p><i class="mui-icon iconfont icon-iconfont-copy points"> {{(form.amt * form.selectSpec.points).toFixed(2)}}</i></p>
			</a>

			<a @click="buy" ref="buyBtn" class="mui-tab-item" style="background-color: red;color: #fff;font-weight: bold;" id="tijiaodingdan">

				立即购买
			</a>
</nav>

<div class="mui-content">
  <swiper :options="swiperOption" :style="{height:'400px'}">
    <swiper-slide  v-for="(pic,idx) in goods.pics" :key="pic">
      <div :index="idx" style="text-align: center; height: 100%">
        <img :src="pic" style="height: 100%">
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  <div class="mui-row goods-header">
    <div class="mui-col-xs-8 goods-title">{{goods.title}}</div>
    <div class="mui-col-xs-4 price">
      <!--<p><i class="mui-icon iconfont icon-msg6 rmb"> {{form.selectSpec.rmb}}</i></p>-->
		  <p style="text-align: right"><i class="mui-icon iconfont icon-iconfont-copy points"> {{form.selectSpec.points}}</i></p>
    </div>
  </div>
  
      <div class="goods-sku" style="background: #fff;padding: 10px;    margin-bottom: 10px;">
        <div class="mui-row">
          <div class="mui-col-xs-2">
            <h5 style="font-family: '微软雅黑'; font-size: 14px;">规格</h5>
          </div>
          <div class="mui-col-xs-10">
            <button v-for="unit in goods.specs"
              type="button"
              :class="unit.id == form.selectSpec.id ? 'mui-btn-danger' : 'mui-btn-outlined'"
              class="mui-btn mui-btn-block guige-btn" style="float: left;" 
              tag="0"
              @click="form.selectSpec = unit"
            >{{unit.title}}</button>
          </div>
        </div>
        <div class="mui-row">
          <div class="mui-col-xs-2">
            <h5 style="font-family: '微软雅黑'; font-size: 14px;">购买数量</h5>
          </div>
          <div class="mui-col-xs-10">
            <div class="mui-numbox" data-numbox-step="1" data-numbox-min="1" data-numbox-max="99" style="margin-left: 8.333%;">
              <button id="numSub" class="mui-btn mui-btn-numbox-minus" type="button"  @click="dec">-</button>
              <input id="num" class="mui-input-numbox" type="number" v-model="form.amt">
              <button id="numUb" class="mui-btn mui-btn-numbox-plus" type="button" @click="inc">+</button>
            </div>
          </div>
        </div>
    </div>

    <div class="goods-details" style="padding: 10px;width: 100%; background-color: #FFFFFF;color: #929292;" >
      <div class="title" style="font-size: 14px;line-height: 0.6rem;">商品详细</div>
      <div class="content" style="border-top: solid 1px #c8c7cc;padding-top: 0.2rem;line-height: 0.4rem">
        <div v-html="goods.detail"></div>
      </div>
    </div>

    <!--底部结束图片-->
    <div style="text-align:center">
      <img src="" />
    </div>
    <!--底部结束图片-->

  </div>

<div v-show="isShowUnitDialog" class="mui-backdrop mui-backdrop-actio mui-active fade"></div>
<div v-show="isShowUnitDialog" ref="unitDialog" class="mui-popover mui-popover-action mui-popover-bottom mui-active"  style="display: block;">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell order-content mui-row">
        <div class="mui-col-xs-3"><img src="https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg"></div>
        <div class="mui-col-xs-1"></div>
        <div class="mui-col-xs-8" style="text-align: left">
          <p class="title">{{goods.title}}({{form.selectSpec.title}})</p>
          <p class="price">
            单价:
            <!--<i class="mui-icon iconfont icon-msg6 rmb">{{form.selectSpec.rmb}}</i>
            &nbsp;&nbsp;-->
            <i class="mui-icon iconfont icon-iconfont-copy points">{{form.selectSpec.points}}</i></p>
          <p class="amt">
            数量: {{form.amt}}
          </p>
          <p class="price">
            总计:
            <!--<i class="mui-icon iconfont icon-msg6 rmb">{{(form.amt * form.selectSpec.rmb).toFixed(2)}}</i>
            &nbsp;&nbsp;-->
            <i class="mui-icon iconfont icon-iconfont-copy points">{{(form.amt * form.selectSpec.points).toFixed(2)}}</i>
          </p>
        </div>
      </li>
      <li class="mui-table-view-cell">
        <component :is="formCmp" :user="user" ref="FormCmp"/>
      </li>
      
    </ul>
    <ul class="mui-table-view" style="background-color: red;color: #FFFFFF;list-style: none;">
      <li  @click="createOrder" style="font-family: '微软雅黑'; font-size: 14px; height: 40px; line-height: 40px;">
        立即下单
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
import {mapState} from 'vuex';
import QQ from './components/QQ';
import SHUOSHUO from './components/Shuoshuo';
import KGE from './components/Kge';
import DOUYIN from './components/Douyin';
import WEIBO_BLOG from './components/WeiboBlog';
import WEIBO_FANS from './components/WeiboFans';

const MAX_NUM = 99;
const MIN_NUM = 1;
export default {
  components: {
    Frame,
    swiper,
    swiperSlide,
    QQ,
    SHUOSHUO,
    KGE,
    DOUYIN,
    WEIBO_BLOG,
    WEIBO_FANS
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
        selectSpec: {}
      },
      isShowUnitDialog: false,
      goods: {
        title: '招牌名片赞',
        logo: '',
        pics: [],
        detail: '商品详细',
        specs: [],
        business_cata: 'QQ'
      }
    };
  },
  computed: {
    ...mapState(['user']),
    formCmp() {
      const CMP_MAP = {
        QQ: 'QQ',
        QQ_SHUOSHUO: 'SHUOSHUO',
        QUANMIN_KGE: 'KGE',
        DOUYIN: 'DOUYIN',
        WEIBO_BLOG: 'WEIBO_BLOG',
        WEIBO_FANS: 'WEIBO_FANS'
      };
      return CMP_MAP[this.goods.business_cata] || 'QQ';
    }
  },
  created() {
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
        console.log(err);
        this.$tip.show('网络连接失败！请稍后重试！');
      });
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
      window.PPP = this;
      // 组件checkData
      if (!this.$refs.FormCmp.checkFormData()) {
        return false;
      }

      // 将remark单独提取出来
      const {remark} = this.$refs.FormCmp.form;
      const concatData = Object.assign({}, this.$refs.FormCmp.form, {remark: null});
      
      $.post(ORDER_API.createOrder, {
        goods_id: this.$route.params.id,
        // 规格
        spec_id: this.form.selectSpec.id,
        // 数量
        amt: this.form.amt,
        // 下单数据，JSON,常用包括qq,kuaishou之类的,
        concat: JSON.stringify(concatData),
        // 留言备注
        remark
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
.mui-popover .mui-table-view {
  max-height: 100% !important;
}
.mui-table-view-cell {
  margin-bottom: 10px;
}
.goods-header {
  padding: 10px;
	font-weight: bold;
  background: #fff;
  line-height: 25px;
  font-size: 0.325rem;
  margin-bottom: 10px;
}
.goods-tips {
  background: #fff;
}

.mui-btn {
  font-size: 16px;
  padding: 8px;
  /*margin: 3px;*/
}

.guige-btn {
  margin-left: 8.333%;
  width: 40%;
}
.guige-btn:not(.mui-btn-danger) {
	  float: left;
    color: #abc;
}

.price i {
	font-weight: 300;
  line-height: 0.7rem;
  font-size: 0.4rem;
}

.price .rmb {
  color: rgb(255, 74, 66);
}



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

</style>