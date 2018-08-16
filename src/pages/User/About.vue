<template>
<Frame title="关于">
  <div class="brand">
    <div class="logo">
      <img :src="APP_LOGO" :onerror="'this.src=\''+APP_LOGO2 + '\''" />
    </div>
    <p class="name text-center">{{APP_NAME}} v{{APP_VERSION}}</p>
  </div>
  <div class="about-content">
    <ul class="mui-table-view"> 
      <li class="mui-table-view-cell mui-collapse mui-active bc-white">
          <a href="#">联系我们</a>
          <div class="mui-collapse-content">
              <p>
                客服QQ: <b>851656783</b>
                <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=851656783&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:851656783:51" alt="点击这里给我发消息" title="点击这里给我发消息"/></a>
              </p>
              <p>
                拇指赞官方Q群: 863391242
                <a href="//qm.qq.com/cgi-bin/qm/qr?k=NlxJZk3yCoHEEz_VCVaBRFjRgxXGftYw" target="blank"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="拇指赞官方交流群" title="拇指赞官方交流群"></a>
              </p>
          </div>
      </li>
      <li class="mui-table-view-cell mui-collapse mui-active bc-white">
          <a href="#">官方网站</a>
          <div class="mui-collapse-content">
              <p>
                {{APP_SITE}}
              </p>
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
</style>