<template>
<div class="mui-row">
  <div class="mui-col-xs-12">
    <!--根据不同类型刷赞，快手业务进行不同的的数据进行分类展示,目前只展示QQ-->
    <!--
      QQ
      QQ_SHUOSHUO
      QUANMIN_GEQU
    -->
      <input type="text" class="mui-input-clear" v-model="form.weibo_url" placeholder="请输入微博主页链接" />
      
      <div class="goods-tips">
        <p>1:下单填写主页链接，链接填错不到账！</p>
        <p>2：有头像，有名称，不屏蔽，正常日速在5000-20000不等，具体请以实际下单为准！</p>
        <p>3:链接获取教程：打开微博APP-找到下方“我”-点击“你的头像”-点右上角的三个逗号，就能复制链接下单了，电脑直接复制你的主页链接即可。</p>
        </p>
      </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        weibo_url: '',
        remark: ''
      }
    }
  },
  methods: {
    checkFormData() {
      const weibo_url = this.form.weibo_url;
      if (weibo_url.trim() === '') {
        this.$tip.show('请先输入微博主页地址~');
        return false;
      }
      return true;
    }
  }
}
</script>
<style>
.goods-tips {
  padding: 10px 0;
  background: #fff;
}
</style>