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
          <div class="bdsharebuttonbox" data-tag="share_1">
            <a class="bds_sqq" data-cmd="sqq" href="#"></a>
            <a class="bds_qzone" data-cmd="qzone" href="#"></a>
            <a class="bds_weixin" data-cmd="weixin" href="#"></a>
            <a class="bds_tsina" data-cmd="tsina"></a>
            <a class="bds_baidu" data-cmd="baidu"></a>
            <a class="bds_more" data-cmd="more">更多</a>
            <!--<a class="bds_count" data-cmd="count"></a>-->
          </div>
          </div> 
				</li>

        <li class="mui-table-view-cell">
					<a href="#">
          2.做任务赚取积分(仅在APP端显示)
					</a>
          <div class="mui-collapse-content">
            暂未开放，敬请期待~
            <br/>
            <button class="mui-btn mui-btn-danger btn-block">开始做任务</button>
          </div> 
				</li>

        <li class="mui-table-view-cell">
					<a href="#">
          2.邀请赚积分
					</a>
          <div class="mui-collapse-content">
            您的推广链接: http://www.baidu.com <br/>
            发送推广链接到QQ群/微信，通过您的邀请链接注册的用户(按IP计)将获得1积分!
            <textarea rows="4" ref="copyEl">#千寻商城#我正在使用千寻商城刷赞，超过好玩的东西，赶快来玩吧！戳我http://www.baidu.com</textarea>
            <br/>
            <button class="mui-btn mui-btn-danger btn-block" @click="copy">一键复制</button>
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
  },
  created() {
    window._bd_share_config = {
      common : {
        bdText : '千寻赞皇，免费刷赞，刷最牛逼的赞！',	
        bdDesc : '千寻赞皇，免费刷赞，刷最牛逼的赞！',	
        bdUrl : 'https://www.baidu.com', 	
        bdPic : 'http://q1.qlogo.cn/g?b=qq&nk=1241818518&s=100'
      },
      share : [{
        "bdSize" : 32
      }],
      slide : [{	   
        bdImg : 0,
        bdPos : "right",
        bdTop : 100
      }],
      image : [{
        viewType : 'list',
        viewPos : 'top',
        viewColor : 'black',
        viewSize : '32',
        viewList : ['qzone','tsina','huaban','tqq','renren']
      }]
    }
    var script = document.createElement('script');
    script.src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)
    document.head.appendChild(script);
  },
  methods: {
    copy() {
      try {
        this.$refs.copyEl.select();
        this.$refs.copyEl.focus();
        document.execCommand('copy', false, null);
        this.$tip.show('已复制!');
      } catch(err) {
        this.$tip.show('复制失败，您可以手动选中复制！');
        console.log(err);
      }
    }
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