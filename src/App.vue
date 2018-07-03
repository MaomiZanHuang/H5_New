<template>
  <div id="app">
    <Index />
    <router-view>
    </router-view>
  </div>
</template>

<script>
import Index from './pages/Index';

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
</style>
