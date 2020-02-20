<template>
  <div class="box">
    <div>Main {{ now }}</div>
    <component :is="name" :child="child"/>
  </div>
</template>

<script>
import A from '@/test/A.vue'
import B from '@/test/B.vue'
import C from '@/test/C.vue'
import D from '@/test/D.vue'

export default {
  name: 'Main',
  props: ['name','child'],
  components: {
    A,
    B,
    C,
    D
  },
  computed: {
    now () {
      return Date.now()
    }
  }
}
</script>
