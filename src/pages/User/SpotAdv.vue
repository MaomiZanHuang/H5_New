<template>
<!-- 弹屏广告 -->
<Frame title="广告赚积分">
  <div class="mui-container">
  <p class="info text-center">已赚取积分:  <b class="text-red">{{ad_points}}</b></p>
  <hr/>
  <div class="adv-btns">
    <button class="mui-btn mui-btn-block mui-btn-royal" @click="showAd('YOUMI')">有米广告</button>
    <button class="mui-btn mui-btn-block mui-btn-yellow" @click="showAd('WAPS')">万普广告</button>
  </div>
  <div class="tips">
    <ul class="mui-table-view"> 
      <li class="mui-table-view-cell mui-collapse mui-active bc-white">
        <a href="#">如何赚分</a>
        <div class="mui-collapse-content">
          <b>点击上面任一广告按钮即，在弹出的广告，<span style="color:red">点击广告下载安装APP，打开</span>即可免费获得积分</b>
        </div>
      </li>
      <li class="mui-table-view-cell mui-collapse mui-active bc-white">
          <a href="#">注意事项</a>
          <div class="mui-collapse-content">
            <ul style="color: red">
              <li>①有时候广告少，多点几下或者过一会儿再来~</li>
              <br/>
              <li>②仅下载不安装打开没有积分，重复下载安装同一个广告无效！</li>
              <br/>
              <li>③可能由于网络原因，有时不会及时到账，请多测试几次！</li>
            </ul>
          </div>
        </li>
    </ul>
  </div>
  
  </div>
</Frame>
</template>
<script>
import $ from 'axios';
import {user as USER_API} from '@/config/serverApi';
import {encrypt} from '@/utils/index';
import Frame from '@/components/Frame.vue';
export default {
  components: {
    Frame
  },
  data() {
    return {
      ad_points: 0
    };
  },
  methods: {
    showAd(channel) {
      window.zanhuang && window.zanhuang.showAd(channel, 1, "telanx");
    },
    afterDoAd(type) {
      setTimeout(() => {
        var t = +new Date;
        var sign = encrypt(t, (''+t).slice(-4));
        $.post(USER_API.doAd, {
          sign,
          t
        })
          .then(({data}) => {
            console.log(data);
          })
          .catch(err => {});
      }, 1000)
    }
  },
  mounted() {
    this.$loading.show('获取用户数据中...');
    $.get(USER_API.getAdPoints)
      .then(({data}) => {
        this.$loading.hide();
        this.ad_points = data.points;
      })
      .catch(err => {
        this.$loading.hide();
        this.$tip.show('网络连接失败！');
      });
    window.afterDoAd = this.afterDoAd;
  }
}
</script>
<style>
.info {
  background: #fff;
  padding: 1rem;
  font-size: 0.8rem;
  line-height: 15pt;
}
.tips {
  background: #fff;
  padding: 10px 0;
  font-size: 0.45rem;
}
</style>