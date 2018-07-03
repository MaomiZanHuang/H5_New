<template>
  <div>
    {{msg}}
		<header id="header" class="mui-bar mui-bar-transparent" style="background-color: rgba(249, 48, 76, 0);">
			<a class="mui-action-back mui-icon mui-icon-contact mui-pull-left" ></a>
			<h1 class="mui-title">千寻赞皇</h1>
		</header>

		

		<div class="mui-content">
			<!--轮播图-->
			<div id="slider" class="mui-slider">
				<div class="mui-slider-group mui-slider-loop">
					<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
					<div class="mui-slider-item mui-slider-item-duplicate">
						<a href="#" index="-1">
							<img id="slider_img" src="/assets/logo.png">
						</a>
					</div>
					<!-- 第一张 -->
					<div class="mui-slider-item">
						<a href="#" index="0">
							<img src="/assets/logo.png">
						</a>
					</div>
					<!-- 第二张 -->
					<div class="mui-slider-item">
						<a href="#" index="1">
							<img src="/assets/logo.png">
						</a>
					</div>
					<!-- 第三张 -->
					<div class="mui-slider-item">
						<a href="#" index="2">
							<img src="/assets/logo.png">
						</a>
					</div>
					<!-- 第四张 -->
					<div class="mui-slider-item">
						<a href="#" index="3">
							<img src="/assets/logo.png">
						</a>
					</div>
					<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
					<div class="mui-slider-item mui-slider-item-duplicate">
						<a href="#" index="-1">
							<img src="/assets/logo.png">
						</a>
					</div>
				</div>
				<div class="mui-slider-indicator">
					<div class="mui-indicator mui-active"></div>
					<div class="mui-indicator"></div>
					<div class="mui-indicator"></div>
					<div class="mui-indicator"></div>
				</div>
			</div>
			<!--轮播图-->

			<!--顶部图形导航-->
			<div class="mui-slider-item" style="margin-top: 8px;">
				<ul class="mui-table-view mui-grid-view" id="topupimg1">
					<!--<a href=""><img width="100%" src="https://m.360buyimg.com/mobilecms/s828x252_jfs/t22201/103/103385437/151483/5892927d/5afc00deNb5b0558f.jpg!q70.jpg.dpg"></a>-->
				</ul>
			</div>
			<!--顶部图形导航结束-->
			<div style="background:#ffffff; margin-top: 8px;"><img class="mui-media-object" src="/assets/logo.png" style=" margin-left:4%;"></div>
			<!--活动导航-->
			<div id="qianggou" style="margin-top: 0px;">
				<ul class="mui-table-view mui-grid-view" id="activity1">
					<div style="position: absolute; left:50% ; background:#EEEEEE; top:0%;  height:100%;  width:1px; "></div>
					<div style="position: absolute; ; background:#EEEEEE; top:50%;  height:1%;  width:100%; "></div>
					
				</ul>
			</div>
			<!--活动导航-->

			<!--猜你喜欢-->
			<span class="like">
                <span class="mui-icon iconfont  icon-hengxiandianzuo"></span>
			<span class="mui-icon iconfont  icon-cainixihuan"></span>
			<span class="mui-tab-label">日销量最佳</span>
			<span class="mui-icon iconfont  icon-hengxiandianyou"></span>
			</span>
			<!--猜你喜欢-->

			<!--商品列表-->
			<div id="goodsListShow1" class="mui-table-view mui-grid-view own-gray-color" style="margin-top: 0.3rem;"></div>
			<!--商品列表-->
			
			<!--底部结束图片-->
			<div style="text-align:center">
				<img src="/assets/logo.png" />
			</div>
			<!--底部结束图片-->

		
		
		</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
