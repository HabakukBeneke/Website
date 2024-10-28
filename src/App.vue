<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@components/Header.vue';
</script>

<template>
  <div id="main">
    <Header />
    <RouterView />
  </div>
</template>

<style lang="scss">
#main {
  position: relative;
  max-width: $screen-size;
  margin: 0 auto;
}
</style>
