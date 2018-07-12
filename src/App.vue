<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import Index from './pages/Index';

const INDEX_PATHS = ['/', '/suggest', '/order', '/user'];
export default {
  name: 'App',
  components: {
    Index
  },
  methods: {
    ...mapActions(['setCurrentMenu'])
  },
  watch: {
    ['$route'](to, from) {
      var path = to.path;
      if (INDEX_PATHS.indexOf(path) + 1) {
        this.setCurrentMenu(path);
      }
    }
  }
}
</script>

<style>
@import url('//at.alicdn.com/t/font_733952_enqh34b665b.css');
</style>
