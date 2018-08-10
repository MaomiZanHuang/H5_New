<template>
<div class="mui-row">
  <div class="mui-col-xs-4">
    <img style="float: left" :src="'http://q1.qlogo.cn/g?b=qq&nk='+form.qq+'&s=100'" onerror="this.src='http://q1.qlogo.cn/g?b=qq&nk=1000&s=100'" />
  </div>
  <div class="mui-col-xs-8">
    <!--根据不同类型刷赞，快手业务进行不同的的数据进行分类展示,目前只展示QQ-->
    <!--
      QQ
      SHUOSHUO_ID
      KUAISHOU_ID
      DOUYIN_ID
      GEQU_ID
    -->
      <input type="text" class="mui-input-clear" v-model="form.qq" placeholder="请输入QQ号" />
      <!--
      <input type="text" class="mui-input-clear" v-model="form.qq" placeholder="请输入说说Id" />
      <input type="text" class="mui-input-clear" v-model="form.ksid" placeholder="请输入快手Id" />
      <input type="text" class="mui-input-clear" v-model="form.dyid" placeholder="请输入抖音Id" />
      -->
      <textarea class="mui-input-clear" v-model="form.remark" rows="2" placeholder="特别要求请留言(选填)"></textarea>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        qq: '',
        remark: ''
      }
    }
  },
  methods: {
    checkFormData() {
      const qq = this.form.qq;
      if (isNaN(qq) || qq.length < 5) {
        this.$tip.show('请正确输入下单QQ号~');
        return false;
      }
      return true;
    }
  }
}
</script>