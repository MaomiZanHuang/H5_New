<template>
<div class="mui-row">
  <div class="mui-col-xs-12">
    <!--根据不同类型刷赞，快手业务进行不同的的数据进行分类展示,目前只展示QQ-->
    <!--
      QQ
      QQ_SHUOSHUO
      QUANMIN_GEQU
    -->
      <input type="text" class="mui-input-clear" v-model="form.douyin_url" placeholder="请输入抖音作品分享链接" />
      <p>抖音作品ID获取方法：比如作品链接是 www.iesdouyin.com/share/video/6462277894017767694/? 链接中的数字就是作品ID</p>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        douyin_id: '',
        douyin_url: '',
        remark: ''
      }
    }
  },
  watch: {
    ['form.douyin_url'](val, prev) {
      var t = val.match(/video\/(\d+)/);
      if (t && t.length > 1) {
        this.form.douyin_id = t[1];
      }
    }
  },
  methods: {
    checkFormData() {
      const douyin_id = this.form.douyin_id;
      if (douyin_id.trim() === '') {
        this.$tip.show('请先输入抖音作品分享的地址~');
        return false;
      }
      return true;
    }
  }
}
</script>