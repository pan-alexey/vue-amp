<template>
  <div>
    <div v-for="(item, index) in foo" :key="index">
      <Main v-bind="item"/>
    </div>
  </div>
</template>

<script>
import Main from '@/test/Main.vue'

export default {
  inject: ['foo'],
  components: {
    Main
  }
}
</script>

<style lang="scss">
@import '@/styles/main.scss'
</style>
