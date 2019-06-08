<!---新窗口，应该包含回退操作,标题居中-->
<template>
<div class="frame-container">
  <header class="header" ref="header">
    <section v-if="!hideBack" class="back" @click="goback"><i class="mui-icon mui-icon-back"></i></section>
    <section class="title ellipsis"><span class="title_text">{{title}}</span></section>
  </header>
  <section class="content" :style="{height: contentHeight}">
  <slot><!--窗口内部的内容--></slot>
  </section>
</div>
</template>
<script>
export default {
  props: {
    title: {
      default: '选择商品'
    },
    // 点击返回之后
    forceBackTo: String,
    hideBack: {
      default: false
    }
  },
  data() {
    return {
      contentHeight: '400px'
    };
  },
  methods: {
    goback() {
      var forceBackTo = this.forceBackTo;
      if (forceBackTo) {
        this.$router.push(forceBackTo);
      }
      else {
        history.back();
      }
    },
    autosize() {
      var headerH = this.$refs.header.offsetHeight;
      var h = headerH > 50 ? 50 : headerH;
      this.contentHeight = ((document.documentElement.clientHeight || document.body.clientHeight)  - h) + 'px';
    }
  },
  mounted() {
    this.autosize();
  },
}
</script>
<style>
.frame-container .header {
  height: 50px;
  background: rgb(30, 153, 213);
  font-size: 0.38rem;
  color: #fff;
  padding: 0 10px;
  box-shadow: 0 0 1px #000;
}
.frame-container .content {
  overflow: auto;
} 
.frame-container .header .back {
  line-height: 50px;
  position: absolute;
}
.frame-container .header .title {
  line-height: 50px;
  text-align: center;
}
</style>