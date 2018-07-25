<template>
<Frame :hideBack="true" title="广 场">
<Menu />
<div class="flex-content">
  <div>
    <p class="text-center"><i class="iconfont icon-kong"></i></p>
    <br/>
    <p class="text-center">暂未开放，敬请期待~</p>
  </div>
</div>
</Frame>
</template>
<script>
import Menu from '@/pages/Index.vue';
import Frame from '@/components/Frame.vue';
export default {
  components: {
    Menu,
    Frame
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