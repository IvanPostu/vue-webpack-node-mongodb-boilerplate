<template>
  <div>
    <app-header />
    <main>
      <slot />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '../AppFooter/AppFooter.vue'
import AppHeader from '../AppHeader/AppHeader.vue'
export default {
  name: 'BaseLayout',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss" scoped></style>
