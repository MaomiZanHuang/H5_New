<template>
  <div class="mui-toast-container mui-active" v-if="isShow">
    <div class="mui-toast-message">{{msg}}</div>
  </div>
</template>
<script>
const DEFAULT_TIP = '消息提示';
  export default {
    data () {
      return {
        isShow: false,
        msg: DEFAULT_TIP
      };
    },
    methods: {
      show(msg) {
        this.msg = msg || DEFAULT_TIP;
        this.isShow = true;
        
        setTimeout(() => {
          this.isShow = false;
        }, 1500);
      }
    }
  };
</script>
