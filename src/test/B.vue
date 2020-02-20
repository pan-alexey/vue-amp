<template>
  <div class="box">
    B <div v-if="false"> yes </div> <div v-if="true"> yes </div>
    <Child :child="child"/>
  </div>
</template>

<script>
import Child from '@/test/Child.vue'

export default {
  name: 'B',
  props: ['child'],
  components: {
    Child
  }
}
</script>
