<!---新窗口，应该包含回退操作,标题居中-->
<template>
<div class="frame-container">
  <header class="header" ref="header">
    <section class="back" @click="goback"><i class="mui-icon mui-icon-back"></i></section>
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
    }
  },
  data() {
    return {
      contentHeight: '400px'
    };
  },
  methods: {
    goback() {
      history.back();
    }
  },
  mounted() {
    // this.$loading.show();
    this.$tip.show('加载失败！');
    window.vue = this;
    console.log(window.outerHeight);
    console.log(this.$refs.header.offsetHeight);
    this.contentHeight = (window.outerHeight - this.$refs.header.offsetHeight) + 'px';
  },
}
</script>
<style>
.frame-container .header {
  height: 50px;
  background: #abc;
  font-size: 1.5rem;
  color: #fff;
  padding: 0 10px;
  box-shadow: 0 0 1px #000;
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