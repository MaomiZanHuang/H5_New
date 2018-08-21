<template>
<div class="mui-row">
  <div class="mui-col-xs-12">
    <!--根据不同类型刷赞，快手业务进行不同的的数据进行分类展示,目前只展示QQ-->
    <!--
      QQ
      QQ_SHUOSHUO
      QUANMIN_GEQU
    -->
      <input type="text" class="mui-input-clear" v-model="form.weibo_url" placeholder="请输入微博博文链接" />
      <p>PC电脑获取教程:选择自己想要刷的那条微博,点击转发,选择私信,就会看见地址比如:https://weibo.com/3621181760/FxZqLcX8W </p>
      <p>手机获取教程:选择自己想要刷的那条微博,点击到显示微博正文,右上角有三个。。。选择复制连接就会得到如https://m.weibo.cn/3621181760/4181009673087286 </p>
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
        this.$tip.show('请先输入微博博文链接地址~');
        return false;
      }
      return true;
    }
  }
}
</script>