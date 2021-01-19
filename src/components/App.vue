<template>
  <base-layout>
    <router-view />
  </base-layout>
</template>

<script>
import BaseLayout from './layouts/BaseLayout.vue'
export default {
  name: 'App',
  components: {
    BaseLayout
  }
}
</script>

<style lang="scss" scoped>
.main {
  background: red;
}
</style>
