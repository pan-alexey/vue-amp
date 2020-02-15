<template>
  <span v-html="svg" />
</template>

<script>
export default {
  name: 'svg-icon',
  data () {
    return {
      svg: '',
      disclosure: require('@/svg/disclosure_16.svg'),
      catalog: require('@/svg/catalog_24.svg'),
      catalog_tab: require('@/svg/catalog_tab_24.svg'),
      search_16: require('@/svg/search_16.svg'),
      home_24: require('@/svg/home_24.svg'),
      cart_24: require('@/svg/cart_24.svg'),
      favorites_24: require('@/svg/favorites_24.svg'),
      favorites_tab_24: require('@/svg/favorites_tab_24.svg'),
      person_24: require('@/svg/person_24.svg'),
      card_checked_24: require('@/svg/card_checked_24.svg'),
      return_24: require('@/svg/return_24.svg'),
      cross_24: require('@/svg/cross_24.svg')
    }
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  created () {
    this.svg = this[this.name] ? this[this.name] : ''
  }
}
</script>

<style lang="scss" soped>
span svg {
  display: inline-block;
  vertical-align: middle;
}
</style>
