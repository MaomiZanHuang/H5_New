<template>
<Frame title="商品明细">
<nav class="mui-bar mui-bar-tab">
  <a class="mui-tab-item mui-active" id="zixun">
    <span class="mui-icon mui-icon-chat"></span>
    <span class="mui-tab-label" style="font-family: '微软雅黑'; font-size: 12px;">咨询</span>
  </a>

  <router-link to="/preorder" class="mui-tab-item" href="#peisongsong" style="color: #FFFFFF;background-color: red;">
    <span class="mui-icon mui-icon-gear"></span>
    <span class="mui-tab-label" style="font-family: '微软雅黑'; font-size: 12px;">立即订购</span>
  </router-link>
</nav>

<div class="mui-content">
    <img id="Goodsimg" src="" width="100%" onerror="this.src='';this.onerror=null" />
    <span id="title" style="font-family: '微软雅黑'; font-size: 14px;">
        标题
    </span>
    <h5 id="jieshao" style="font-family: '微软雅黑'; font-size: 12px; line-height: 20px;">松软的蛋糕与新鲜奶油结合,口感香甜,滑而不腻,口味纯美,,外观更是别出心裁</h5>
    <span id="jiage" style="font-family: '微软雅黑'; font-size: 14px;">
        ¥ 108-268 <span><s>市场价: ¥ 128-288</s></span>
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

      <h5 style="font-family: '微软雅黑'; font-size: 14px;">标记<span id="peisong">
                            
                        </span></h5>

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

    <div id="details" style="margin-top: 8px; background-color: #FFFFFF;"></div>
    
    <!--底部结束图片-->
    <div style="text-align:center">
      <img src="" />
    </div>
    <!--底部结束图片-->

  </div>

  <div id="peisongsong" class="mui-popover mui-popover-action mui-popover-bottom">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell">
        <img id="purchase_img" src="" width="20%" style="float: left;">
        <span id="xiaojie" class="xiaojie" style="width:60%">
                    甜蜜果盘<a href="#peisongsong"><span class="mui-icon mui-icon-closeempty" style="float: right;"></span></a>
        </span>
        <p><font color="red" id="purchase_price" ></font> </p>

      </li>
      <li class="mui-table-view-cell" style="padding: 2px auto;">
        <h5 style="float: left;">规格</h5>
        <ul class="mui-table-view mui-grid-view" id="chicuncun" style="padding: 2px auto;">

          

        </ul>
      </li>
      <li class="mui-table-view-cell">
        <h5 style="float: left;font-family: '微软雅黑'; font-size: 14px;">购买数量:</h5>

        <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' data-numbox-max='10' style="float: right;">
          <button id="numSub" class="mui-btn mui-btn-numbox-minus" type="button">-</button>
          <input id="num" class="mui-input-numbox" type="number" />
          <button id="numUb" class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
      </li>
    </ul>
    
  </div>
</Frame>
		

</template>
<script>
/** 注意分不同商品指定不同的策略 */
import Frame from '@/components/Frame';

export default {
  components: {
    Frame
  }
}
</script>

<style scoped>
</style>