<template>
<Frame title="我的反馈建议">
  <!--我的反馈页面-->
  <div class="query-order-results">
        <!-- CARD START -->
        <div class="feed-card" v-for="feed in feeds">
          <!--页眉，放置标题-->
          <div class="feed-time" :class="feed.response ? 'active':'unactive'">反馈时间: {{feed.create_time}}</div>
          <div class="feed-content">
            <div class="mui-row">
              <p class="feed-ask">Q: {{feed.content}}</p>
              <hr/>
              <p class="feed-answer">A: {{feed.response}}</p>
            </div>
          </div>
        </div>
        <!--CARD END -->
        <!--EMPTY CARD -->
        <div v-if="feeds.length === 0" style="padding-top: 20%">
          <p class="text-center"><i style="font-size: 1.5rem;" class="iconfont icon-kong"></i></p>
        </div>
      </div>
</Frame>
</template>
<script>
import {mapState} from 'vuex';

import $ from 'axios';
import {timeFormat} from '@/utils/index';
import {user as USER_API} from '@/config/serverApi';

import Frame from '@/components/Frame.vue';

export default {
  components: {
    Frame
  },
  data() {
    return {
      feeds: [
      ]
    };
  },
  methods: {
    
  },
  mounted() {
    this.$loading.show('加载中...');
    $.get(USER_API.getFeedback)
      .then(({data}) => {
        console.log(data);
        this.feeds = (data.feedbacks || []).map(t => Object.assign(t, {
          create_time: timeFormat(t.create_time, 'yyyy-MM-dd hh:mm:ss')
        }));
        this.$loading.hide();
      })
      .catch(err => {
        this.$tip.show('网络连接失败！');
        this.$loading.hide();
      });
  }
};
</script>
<style scoped>
.feed-card {
  background: #fff;
  margin-bottom: 10px;
}
.feed-time {
  color: #fff;
  padding: 10px;
}
.feed-time.unactive {
  background: #aaa;
}

.feed-time.active {
  background: #009688;
}
.feed-content {
  padding: 10px;
  line-height: 20px;
  font-size: 0.45rem;
}
.feed-ask {
  padding-bottom: 10px;
}
.feed-answer {
  padding-top: 10px;
  color: #FF5722
}
</style>