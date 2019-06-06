<template>
<!-- 弹屏广告 -->
<Frame title="任务赚积分">
  <div class="mui-container">
  <p class="info text-center">做完任务后刷新积分即可更新</p>
  <hr/>
  <div class="adv-btns">
    <button class="mui-btn mui-btn-block mui-btn-royal" @click="showAd('YOUMI')">积分墙一</button>
    <button class="mui-btn mui-btn-block mui-btn-yellow" @click="showAd('WAPS')">积分墙二</button>
  </div>
  <div class="tips">
    <ul class="mui-table-view"> 
      <li class="mui-table-view-cell mui-collapse mui-active bc-white">
        <a href="#">如何赚分</a>
        <div class="mui-collapse-content">
          <b>点击上面任一积分墙按钮即，在弹出的广告，按提示完成任务，每个任务可获得35~200积分</b>
        </div>
      </li>
      <li class="mui-table-view-cell mui-collapse mui-active bc-white">
          <a href="#">注意事项</a>
          <div class="mui-collapse-content">
            <ul style="color: red">
              <li>①需登录拇指赞使用！</li>
              <br/>
              <li>②如果当前没有任务可做，可等第二天！</li>
              <br/>
              <li>③可能由于网络原因，有时不会及时到账，请耐心等待！</li>
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
import {mapState} from 'vuex';
import {user as USER_API} from '@/config/serverApi';
import Frame from '@/components/Frame.vue';
export default {
  components: {
    Frame
  },
  data() {
    return {
      qq: '',
      email: '',
      mobile: '',
      reg_time: ''
    };
  },
  computed: {
     ...mapState({
       user: state => state.user
     })
   },
  methods: {
    showAd(channel) {
      window.zanhuang && window.zanhuang.showAd(channel, 0, this.user.user || 'telanx');
    }
  },
  mounted() {
    
  }
}
</script>
<style>
.info {
  background: #fff;
  padding: 1rem;
  font-size: 0.8rem;
}
.tips {
  background: #fff;
  padding: 10px 0;
  font-size: 0.45rem;
}
</style>