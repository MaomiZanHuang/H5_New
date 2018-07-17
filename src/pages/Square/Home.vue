<template>
<div class="flex-content">
  <Menu />
  <div>
    <p class="text-center"><i class="iconfont icon-kong"></i></p>
    <br/>
    <p class="text-center">暂未开放，敬请期待~</p>
  </div>
</div>
</template>
<script>
import Menu from '@/pages/Index.vue';
export default {
  components: {
    Menu
  }
}
</script>
<style>
.flex-content {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
  height: 12rem;
}
.flex-content i {
  font-size: 1.5rem;
}
</style>