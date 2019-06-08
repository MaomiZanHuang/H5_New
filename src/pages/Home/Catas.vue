<template>
<!--左侧是分类，右侧是分类下具体商品-->
<Frame>
<div class="goods">
  <div class="menu-wrapper">
    <ul style="transition-property: transform; transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); transition-duration: 300ms;">
      <li v-for="(cata, idx) in catas"
          class="menu-item"
          :class="cata.cata_id == currentCataId && 'current'"
          style="pointer-events: auto;"
          @click="changeCata(cata.cata_id, idx)">
        <span class="text border-1px">
          <span class="icon special"></span>{{cata.title}}
        </span>
      </li>
    </ul>
  </div>
  <div class="foods-wrapper" ref="wrapper">
    <ul style="transition: all .5s ease">
      <li v-for="cata in catas" class="good-list" style="pointer-events: auto;">
        <h1 ref="titleEl" class="title" :class="'cata-'+ cata.id">{{cata.title}}</h1>
        <ul>
          <li ref="goodEl" v-for="good in cata.children"class="food-item border-1px"
            @click="buyGoods(good.goods_id)">
            <div class="icon">
              <img width="57" height="57" :src="good.logo" onerror="//cdn.520cy.cn/images/pic-null.png">
            </div>
            <div class="content">
              <div class="mui-row">
                <div class="mui-col-xs-8">
                  <h2 class="name">{{good.title}}</h2>
                  <p class="desc">{{good.specs}}</p>
                  <div class="extra"><span class="count">月售{{(good.id)*3 + 9*(good.id%10)}}份</span></div>
                </div>
                <div class="mui-col-xs-4">
                  <div class="price">
                      <!--<i class="mui-icon iconfont icon-msg6 rmb">{{good.min_price}}</i>-->
                      <i class="mui-icon iconfont icon-iconfont-copy points">{{good.min_points}}</i>  
                  </div>
                </div>
              </div>
              
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
 
      
      
    </div>
    
    <div><div class="ball" style="display: none;"><div class="inner inner-hook"></div>
    </div>
    </div>
    </div> 
</div>
    </div></div>
    </Frame>
</template>
<script>
import _ from 'lodash';
import {mapState, mapActions} from 'vuex';
import Frame from '@/components/Frame';

export default {
  components: {
    Frame
  },
  data() {
    return {
      isHandScroll: false,
      currentCataId: 0,
      scrollY: 0
    };
  },
  computed: {
    ...mapState({
      catas: state => state.goods_cata
    })
  },
  methods: {
    ...mapActions(['getGoodsCata']),
    changeCata(id, idx) {
      // const TH = this.$refs.titleEl.offsetHeight + 18;
      // const GH = this.$refs.goodEl.offsetHeight + 18;
      const TH = 26 + 18;
      const GH = 78 + 18;
      this.currentCataId = id;      
      let scrollHeight = idx * TH + this.catas.slice(0, idx).map(item => (item.children || []).length).reduce((prev, next) => (prev + next * GH), 0);

      this.isHandScroll = true;
      this.$scroll(scrollHeight, 'scrollTop', 'foods-wrapper', 8);
      setTimeout(() => {
        this.isHandScroll = false;
      }, 1500);
    },
    buyGoods(id) {
      this.$router.push('/goods/' + id);
    }
  },
  created() {
    // 获取分类数据和首页其它数据
		this.getGoodsCata()
			.then(r => {
				console.log('获取分类成功！');
			})
			.catch(err => {
				this.$tip.show('获取分类数据失败！');
			});
  },
  mounted() {
    const TH = 26 + 18;
    const GH = 78 + 18;
    
    // const TH = this.$refs.titleEl[0].offsetHeight + 18;
    // const GH = this.$refs.goodEl[0].offsetHeight + 18;
    // 每个分类所占的高度
    const HLs = this.catas.map(item => {
      return {
        cata_id: item.cata_id,
        height: (item.children || []).length * GH + TH
      }
    });
    
    // 计算出最小满足高度的索引
    this.$refs.wrapper.addEventListener('scroll', () => {
      if(this.isHandScroll) return false;
      // 计算滚动条滚动到哪个位置了
      let scrollHeight =  this.$refs.wrapper.scrollTop;
      let scrollCata = HLs.reduce((prev, next) => {
        return prev.height - 10 < scrollHeight
          ? { height: next.height + prev.height, cata_id: next.cata_id }
          : prev;
      }, { height: 0, cata_id: 0 });
      this.currentCataId = scrollCata.cata_id; 
    });
    
    let selectedCataId = this.$route.params.id || catas[0].cata_id;
    let idx = this.catas.map(cata => '' + cata.cata_id).indexOf(selectedCataId);
    this.changeCata(selectedCataId, idx);
  }
}
</script>
<style scoped>
.goods {
    display: flex;
    bottom: 46px;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.goods .menu-wrapper {
    -webkit-box-flex: 0;
    width: 80px;
    height: 100%;
    overflow: auto;
    flex: 0 0 80px;
    background: rgb(243, 245, 247);
}
.goods .foods-wrapper {
    -webkit-box-flex: 1;
    flex: 1 1 0%;
    height: 100%;
    overflow: auto;
}

.goods .menu-wrapper .menu-item.current {
    position: relative;
    z-index: 10;
    margin-top: -1px;
    font-weight: 700;
    background: rgb(255, 255, 255);
    border-right: solid 4px #1ac3e5;
}

.goods .menu-wrapper .menu-item {
    display: table;
    height: 54px;
    // width: 56px;
    line-height: 14px;
    padding: 0px 12px;
}
li {
    list-style: none;
}

.goods .menu-wrapper .menu-item .text {
    display: table-cell;
    width: 56px;
    vertical-align: middle;
    position: relative;
    font-size: 12px;
}

.goods .foods-wrapper .title {
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    font-size: 12px;
    color: rgb(147, 153, 159);
}
.goods .foods-wrapper ul {
  background: #fff;
}
.goods .foods-wrapper .food-item {
    display: flex;
    padding-bottom: 18px;
    position: relative;
    margin: 18px;
}
.goods .foods-wrapper .food-item .icon {
    -webkit-box-flex: 0;
    margin-right: 10px;
    flex: 0 0 57px;
}
.goods .foods-wrapper .food-item .content {
    -webkit-box-flex: 1;
    flex: 1 1 0%;
}

.goods .foods-wrapper .food-item .content .name {
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    color: rgb(7, 17, 27);
    margin: 2px 0px 28px;
}

.goods .foods-wrapper .food-item .content .desc {
    line-height: 12px;
    margin-bottom: 8px;
}

.goods .foods-wrapper .food-item .content .desc, .goods .foods-wrapper .food-item .content .extra {
    line-height: 10px;
    font-size: 10px;
    color: rgb(147, 153, 159);
}
.goods .price i {
    font-weight: 300;
    line-height: 0.7rem;
    font-size: 0.4rem;
}
.price {
  font-weight: 300;
  line-height: 0.7rem;
}
.price .rmb {
  color: rgb(255, 74, 66);
}

.goods .foods-wrapper .food-item .content .cartcontrol-wrapper {
    position: absolute;
    right: 0px;
    bottom: 12px;
}
</style>