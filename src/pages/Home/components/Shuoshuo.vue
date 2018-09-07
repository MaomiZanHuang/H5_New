<template>
<div>
<div class="mui-row">
  <div class="mui-col-xs-4">
    <img style="float: left" :src="'//q1.qlogo.cn/g?b=qq&nk='+form.qq+'&s=100'" onerror="this.src='//q1.qlogo.cn/g?b=qq&nk=1000&s=100'" />
  </div>
  <div class="mui-col-xs-8">
    <!--根据不同类型刷赞，快手业务进行不同的的数据进行分类展示,目前只展示QQ-->
      <input type="text" class="mui-input-clear" v-model="form.qq" placeholder="请输入QQ号" />
      <input type="text" class="mui-input-clear" v-model="form.shuoshuo_id" placeholder="点击下方按钮获取说说" />
  </div>
</div>
<div class="mui-row">
  <div class="mui-col-xs-4">
    
    <button class="mui-btn btn-block" @click="getShuoshuo">获取说说</button>
  </div>
  <div class="mui-col-xs-8">
    <select class="mui-btn" v-model="form.shuoshuo_id">
      <option value="">选择一条说说▼</option>
      <option v-for="ss in shuoshuos" :value="ss.tid">{{ss.content}}</option>
    </select>    
    <div class="mui-row" style="padding-top: 10px">
      <div class="mui-col-xs-4">
        <button class="mui-btn" @click="getPrevShuoshuo">上一页</button>
      </div>
      <div class="mui-col-xs-4">
        <button class="mui-btn">第{{page+1}}页</button>
      </div>
      <div class="mui-col-xs-4">
        <button class="mui-btn" @click="getNextShuoshuo">下一页</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
import $ from 'axios';
import {guest as GUEST_API} from '@/config/serverApi';
export default {
  data() {
    return {
      form: {
        qq: '',
        shuoshuo_id: '',
        remark: ''
      },
      page: 0,
      shuoshuos: []
    }
  },
  methods: {
    checkFormData() {
      const qq = this.form.qq;
      if (isNaN(qq) || qq.length < 5) {
        this.$tip.show('请正确输入下单QQ号~');
        return false;
      }
      if (!this.form.shuoshuo_id) {
        this.$tip.show('请选择一条说说~');
        return false;
      }
      return true;
    },
    getPrevShuoshuo() {
      this.page--;
      if (this.page <=0) {
        this.page = 0;
      }
      this.getShuoshuo();
    },
    getNextShuoshuo() {
      this.page++;
      this.getShuoshuo();
    },
    getShuoshuo() {
      this.$loading.show('获取说说中...');
      $.get(GUEST_API.getShuoshuo + '?qq=' + this.form.qq + '&page=' + this.page)
        .then(({data}) => {
          this.$loading.hide();
          if (data.status === 0) {
            this.page = 0;
            this.$tip.show(data.msg);
          }
          this.shuoshuos = data.data || [];
        })
        .catch(err => {
          this.$loading.hide();
          this.$tip.show('网络连接失败！');
          console.log(err);
        });
    }
  }
}
</script>