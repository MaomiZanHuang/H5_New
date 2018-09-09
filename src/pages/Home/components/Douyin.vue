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
      <p>同时支持短链接或长链接，输入短链接时会自动转化为长链接。
      <br><font color=red>如果提示自动转化失败，请在浏览器输入短链接打开后的网址即长链接填入</font>。
      <br/>例如短链接http://v.douyin.com/JMf8Nh/输入浏览器里打开就是长链接http://www.iesdouyin.com/share/video/6462277894017767694/</p>
  </div>
</div>
</template>
<script>
import {guest as GUEST_API} from '@/config/serverApi';
import $ from 'axios';
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
      if (val.match(/v\.douyin\.com/)) {
        $.get(GUEST_API.getDouyinUrl + '?url=' + val)
          .then(({data}) => {
            if (data.status) {
              this.form.douyin_url = data.data;

            } else {
              throw new Error(data.msg);
            }
          })
          .catch(err => {
            this.$tip.show('短链接自动转化为长链接失败！');
          });
          return false;
      }
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