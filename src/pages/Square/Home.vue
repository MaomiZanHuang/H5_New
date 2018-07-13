<template>
<div>
  <Menu />
			<!--魅力榜-->
			<div class="block">
				<div class="header">
					<span class="mui-icon iconfont icon-aixin"></span>
					<span class="mui-tab-label">魅力榜</span>
				</div>
				<div class="content mui-row charm-ranklist">
					<div v-for="(user,idx) in top3CharmUsers" class="mui-card mui-col-xs-4">
						<div class="mui-card-header">第{{idx+1}}名</div>
						<div class="mui-card-content">
							<img :src="'http://q1.qlogo.cn/g?b=qq&nk='+user.qq+'&s=100&t=1449411350'">
							<p>{{user.nickname}}</p>
							<br/>
							<p>魅力值 <i class="iconfont icon-aixin" style="color:red">98</i></p>
						</div>
						<div class="mui-card-footer">
						今日刷赞{{user.zan_amt}}次;
						<br/>
						今日刷粉{{user.fan_amt}}次;
						</div>
					</div>
				</div>
			</div>

			<!--积分榜-->
			<div class="block">
				<div class="header">
					<span class="mui-icon iconfont icon-meili"></span>
					<span class="mui-tab-label">积分榜</span>
				</div>
				<div class="content">

				</div>
			</div>

</div>
</template>
<script>
import Menu from '@/pages/Index';
export default {
  components: {
    Menu
  },
  data() {
    return {
      // 展示当天刷赞+刷粉最高的前3个用户
			top3CharmUsers: [
				{ nickname: 'Telanx', qq: '1241818518', zan_amt: '12,00000', fan_amt: '3000' },
				{ nickname: '猫咪Ceko', qq: '851656783', zan_amt: '12,00000', fan_amt: '3000' },
				{ nickname: '未知网友', qq: '851656785', zan_amt: '12,00000', fan_amt: '3000' },
			]
    };
  }
}
</script>