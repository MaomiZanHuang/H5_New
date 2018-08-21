<template>
<div class="mui-row">
  <div class="mui-col-xs-12">
    <!--根据不同类型刷赞，快手业务进行不同的的数据进行分类展示,目前只展示QQ-->
    <!--
      QQ
      QQ_SHUOSHUO
      QUANMIN_GEQU
    -->
      <input type="text" class="mui-input-clear" v-model="form.song_url" placeholder="请输入歌曲分享链接" />
      <!--
      <input type="text" class="mui-input-clear" v-model="form.qq" placeholder="请输入说说Id" />
      <input type="text" class="mui-input-clear" v-model="form.ksid" placeholder="请输入快手Id" />
      <input type="text" class="mui-input-clear" v-model="form.dyid" placeholder="请输入抖音Id" />
      -->
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        song_id: '',
        song_url: '',
        remark: ''
      }
    }
  },
  watch: {
    ['form.song_url'](val, prev) {
      var t = val.match(/s=([A-z|0-9]+)/);
      if (t && t.length > 1) {
        this.form.song_id = val.match(/s=([A-z|0-9]+)/)[1];
      }
    }
  },
  methods: {
    checkFormData() {
      const song_id = this.form.song_id;
      if (song_id.trim() === '') {
        this.$tip.show('请先输入歌曲分享的地址~');
        return false;
      }
      return true;
    }
  }
}
</script>