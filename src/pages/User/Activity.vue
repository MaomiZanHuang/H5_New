<template>
<Frame title="推广赚取积分">
<div class="mui-content promotion">
			<ul class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-cell">
					<a href="#">
          1.分享软件赚取积分
					</a>
          <div class="mui-collapse-content">
          分享本软件到20个QQ群，截图发给客服，可赚取200积分。
          </div> 
				</li>

        <li class="mui-table-view-cell">
					<a href="#">
          2.做任务赚取积分
					</a>
          <div class="mui-collapse-content">
            <br/>
            <button class="mui-btn mui-btn-danger btn-block">开始做任务</button>
          </div> 
				</li>
      </ul>
		</div>
</Frame>
</template>
<script>
import Frame from '@/components/Frame.vue';
export default {
  components: {
    Frame
  }
}
</script>
<style>
.promotion .mui-collapse-content {
  margin-top: 10px;
  color: #aaa;
  line-height: 0.5rem;
}
.promotion li {
  padding-right: 15px !important;
}
</style>