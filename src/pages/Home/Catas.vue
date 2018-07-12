<template>
<!--左侧是分类，右侧是分类下具体商品-->
<Frame>
<div class="goods">
  <div class="menu-wrapper">
    <ul style="transition-property: transform; transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); transition-duration: 300ms;">
      <li v-for="(cata, idx) in catas"
          class="menu-item"
          :class="cata.id === currentCataId && 'current'"
          style="pointer-events: auto;"
          @click="changeCata(cata.id, idx)">
        <span class="text border-1px">
          <span class="icon special"></span>{{cata.name}}
        </span>
      </li>
    </ul>
  </div>
  <div class="foods-wrapper" ref="wrapper">
    <ul style="transition: all .5s ease"
      :style="{transform: 'translateY('+scrollY+'px)'}">
      <li v-for="cata in catas" class="good-list" style="pointer-events: auto;">
        <h1 class="title" ref="titleEl">{{cata.name}}</h1>
        <ul>
          <li ref="goodEl" v-for="good in cata.children"class="food-item border-1px">
            <div class="icon">
              <img width="57" height="57" :src="good.logo">
            </div>
            <div class="content">
              <h2 class="name">{{good.name}}</h2>
              <p class="desc">{{good.desc}}</p>
              <div class="extra"><span class="count">月售229份</span><span>好评率100%</span></div>
              <div class="price"><span class="now">￥10</span><span class="old" style="display: none;">￥</span></div>
              <div class="cartcontrol-wrapper">
                <div class="cartcontrol">
                  <div class="cart-decrease" style="display: none;"><span class="inner icon-remove_circle_outline"></span></div> 
                  <div class="cart-count" style="display: none;"></div>
                  <div class="cart-add icon-add_circle"></div>
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
import Frame from '@/components/Frame';
export default {
  components: {
    Frame
  },
  data() {
    return {
      currentCataId: 0,
      scrollY: 0,
      catas: [
				{
          id: 0, name: '免费业务', logo: 'http://img5.imgtn.bdimg.com/it/u=171739527,3841594568&fm=200&gp=0.jpg',
          children: [
            { name: '招牌名片赞[低价]', logo: 'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f5f0c3bcb.jpg' },
            { name: '招牌名片赞[稳定]', logo: '' },
            { name: '空间人气', logo: '' }
          ]
        },
				{ id: 1, name: '刷赞', logo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1228238028,1047793957&fm=27&gp=0.jpg',
          children: [
            { name: '低价赞' },
            { name: '招牌赞'}
          ]
        },
				{
          id: 2, name: 'QQ业务', logo: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2322919269,2472384179&fm=27&gp=0.jpg',
          children: [
            { name: '永久QQ钻 ［稳定］', logo: '' },
            { name: '永久QQ钻 ［无保］', logo: '' },
            { name: 'Q币充值', logo: '' },
            { name: 'QQ靓号', logo: '' },
            { name: '等级代挂［皇冠梦］', logo: '' }
          ]  
        },
				{
          id: 3, name: '短视频', logo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1958064775,2572669376&fm=27&gp=0.jpg',
          children: [
            { name: '抖音粉丝', logo: '' },
            { name: '快手粉丝', logo: ''  },
            { name: '美拍粉丝', logo: '' },
            { name: '抖音评论', logo: '' }
          ]
        },
				{
          id: 4, name: '影视会员', logo: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=349613919,565425255&fm=27&gp=0.jpg',
          children: [
            { name: '爱奇艺会员', logo: '' },
            { name: '优酷会员', logo: '' }
          ]
        },
				{ id: 5, name: '刷粉', logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530778059166&di=f1f3c08b172bf879be93c269c0bc7658&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104e9571c743432f875a399db949b.jpg%401280w_1l_2o_100sh.png',
          children: [
            { name: '微博粉丝2000+', logo: '' },
            { name: '快手粉丝优质粉1w+', logo: 'https://all-pt-upyun-cdn.95at.cn/Uploads/image/2018-03-21/5ab1f61227dc8.jpg' }
          ]
        },
				{ id: 6, name: '游戏代刷', logo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3768522051,1032657102&fm=27&gp=0.jpg',
          children: [
            { name: '欢乐豆代刷', logo: '' },
            { name: 'CF穿越火线AK-47黄金180天', logo: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3530439229,174755752&fm=179&w=121&h=140&img.JPEG' },
            { name: '逆战5000NZ点10元限量', logo: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2641395577,3238754095&fm=58&bpow=600&bpoh=600'}
          ]
        },
				{ id: 7, name: '杂七杂八', logo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3648330687,678565372&fm=27&gp=0.jpg',
          children: [
            { name: '腾讯大王卡', logo: '' },
            { name: '滴滴打人', logo: '' }
          ]
        }
			],
    };
  },
  methods: {
    changeCata(id, idx) {
      this.$refs.wrapper.scrollTop = 0;
      const TH = this.$refs.titleEl[0].offsetHeight + 18;
      const GH = this.$refs.goodEl[0].offsetHeight + 18;
      this.currentCataId = id;

      
      let scrollHeight = idx * TH + this.catas.slice(0, idx).map(item => (item.children || []).length).reduce((prev, next) => (prev + next * GH), 0);

      this.scrollY = -(scrollHeight - 26 + 18);
      console.log(idx, '理应上传', scrollHeight);
      // 还是要根据移动位置来定位啊，不能直接就这样定位
    }
  },
  mounted() {
    window.vue3 = this;
    console.log('进入Catas');
  }
}
</script>
<style>
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
    margin: 2px 0px 8px;
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
.goods .foods-wrapper .food-item .content .price {
    font-weight: 700;
    line-height: 24px;
}
.goods .foods-wrapper .food-item .content .cartcontrol-wrapper {
    position: absolute;
    right: 0px;
    bottom: 12px;
}
</style>