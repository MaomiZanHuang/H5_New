<template>
<Frame title="关于">
  <div class="brand">
    <div class="logo">
      <img src="@/assets/logo.png" />
    </div>
    <p class="name text-center">千寻赞皇</p>
  </div>
  <div class="about-content">
    <ul class="mui-table-view"> 
      <li class="mui-table-view-cell mui-collapse mui-active bc-white">
          <a href="#">联系我们</a>
          <div class="mui-collapse-content">
              <p>客服QQ: <b>851656783</b> (猫咪、Ceko)</p>
              <p>官方Q群1: 851656783 (人已满)</p>
              <p>官方Q群2: 851656783 </p>
          </div>
      </li>
      <li class="mui-table-view-cell mui-collapse mui-active bc-white">
          <a href="#">官方网站</a>
          <div class="mui-collapse-content">
              <p>https://www.baidu.com</p>
          </div>
      </li>
  </ul>
  </div>
  <div id="footer">
    <!--底部结束图片-->
    <div class="text-center">
      <img src="@/assets/base_img.png" />
    </div>
    <!--底部结束图片-->
    <!--<p class="text-center">版权所有 ©千寻赞皇 2018</p>-->
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