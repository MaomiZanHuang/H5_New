<template>
<Frame title="销量排行">
  <!--日销量最佳-->
  <div class="block">
    <div class="tabs-header">
        <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <a class="mui-control-item" :class="currentTab === 'all' && 'mui-active'" @click="changeToTab('all')">
          所有时间
          </a>
          <a class="mui-control-item" :class="currentTab === 'last_month' && 'mui-active'" @click="changeToTab('last_month')">
          最近一个月
          </a>
          <a class="mui-control-item" :class="currentTab === 'last_week' && 'mui-active'" @click="changeToTab('last_week')">
          最近一周
          </a>
          
				</div>
  </div>
    <div class="content goodlist">
      <li v-for="item in goods">
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
</Frame>
</template>
<script>
import Frame from '@/components/Frame.vue';

export default {
  components: {
    Frame
  },
  data() {
    return {
      currentTab: 'all',
      goods: [
				{ title: '招牌名片赞', desc: '1000赞起刷，最低0.01，秒到账', price: '0.01', pic: 'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg', sale_amount: 2009},
				{ title: '招牌名片赞', desc: '1000赞起刷，最低0.01，秒到账', price: '0.01', pic: 'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg', sale_amount: 2009},
				{ title: '招牌名片赞', desc: '1000赞起刷，最低0.01，秒到账', price: '0.01', pic: 'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg', sale_amount: 2009}
			]
    }
  }
}
</script>