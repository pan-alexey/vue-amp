<template>
  <div class="box">
    <div>Child</div>
    <div v-for="(item, index) in child" :key="index">
      {{ item }}
      <Main v-bind="item"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: ['child'],
  components: {
    Main: () => import('@/test/Main.vue')
  }
}
</script>
