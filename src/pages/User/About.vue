<template>
<Frame title="关于">
  <div class="brand">
    <div class="logo">
      <img :src="APP_LOGO" :onerror="'this.src=\''+APP_LOGO2 + '\''" />
    </div>
    <p class="name text-center">{{APP_NAME}} v{{APP_VERSION}}</p>
    <h1 class="text-center">免费刷，畅快玩！</h1>
  </div>
  <div class="about-content">
    <ul class="mui-table-view"> 
      <li class="mui-table-view-cell mui-collapse mui-active bc-white">
          <a href="#">联系我们</a>
          <div class="mui-collapse-content">
              <p>
              官方网站: &nbsp;<b>{{APP_SITE}}</b>
              </p>
              <p>
                客服QQ: &nbsp; <b>851656783</b>
                <img v-if="IS_APP" @click="joinQQ" border="0" src="//wpa.qq.com/pa?p=2:851656783:51" alt="点击这里给我发消息" title="点击这里给我发消息"/>
                <a v-else target="_blank" href="//wpa.qq.com/msgrd?v=3&uin=851656783&site=qq&menu=yes"><img border="0" src="//wpa.qq.com/pa?p=2:851656783:51" alt="点击这里给我发消息" title="点击这里给我发消息"/></a>
              </p>
              <p>
                官方Q群: &nbsp;<b>863391242</b>
                <img v-if="IS_APP" @click="joinGroup" border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="拇指赞官方交流群" title="拇指赞官方交流群">
                <a v-else href="//qm.qq.com/cgi-bin/qm/qr?k=NlxJZk3yCoHEEz_VCVaBRFjRgxXGftYw" target="blank"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="拇指赞官方交流群" title="拇指赞官方交流群"></a>
              </p>
          </div>
      </li>
      <li class="mui-table-view-cell">
      <a href="#">
      
      </a>
      <div class="mui-collapse-content" style="text-align: center;">
        <p v-if="!is_app">
          <a href="http://attach.zhiyoo.com/forum/201808/31/155246866dghgdkrlbt6lv.attach?f=%E5%8D%83%E5%AF%BB%E6%8B%87%E6%8C%87%E8%B5%9Ev1.1.apk">戳我下载安卓APP『拇指赞』</a>
        </p>
        <img style="width:4rem;height:4rem" src="//ugc.qpic.cn/gbar_pic/2wF3sr2LiaVtCS8btHzrel0qyKokF5L0HfLFIGBnbgmqkP7OlyINsaA/0" />
        <p>扫一扫下载安装『拇指赞』</p>
      </div> 
    </li>
  </ul>
  </div>
  <div id="footer">
    <!--底部结束图片-->
    <div class="text-center">
      ©{{APP_NAME}} All Rights Reserved.
    </div>
    <!--底部结束图片-->
    <!--<p class="text-center">版权所有 ©{{APP_NAME}} 2018</p>-->
  </div>
</Frame>
</template>
<script>
import Frame from '@/components/Frame.vue';

export default {
  components: {
    Frame
  },
  data() {
    return {
      is_app: typeof window.zanhuang !== 'undefined'
    }
  },
  methods: {
    joinGroup() {
      window.zanhuang.jsAndroid(JSON.stringify({
        type: '加群',
        number: '863391242'
      }));
    },
    joinQQ() {
      window.zanhuang.jsAndroid(JSON.stringify({
        type: 'QQ聊天',
        qq: '851656783'
      }));
    }
  }
}
</script>
<style scoped>
.brand .logo{
  display: flex;
  justify-content: center;
  padding: 15px;
}
.brand .logo img {
  width: 2rem;
  height: 2rem;
}
.about-content {
  margin-top: 0.5rem;
  //background: #fff;
  min-height: 4rem;
  font-size: 0.3rem;
  line-height: 0.6rem;
}
.about-content a {
  font-size: 0.35rem;
}
#footer {
  position: absolute;
  bottom: 15px;
  width: 100%;
}

.bc-white {
  background: #fff;
}
.mui-collapse-content b {
  color: #000;
}
</style>