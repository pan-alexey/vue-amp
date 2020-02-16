<template>
  <span v-html="svg" />
</template>

<script>
/* eslint quote-props: ["error", "consistent"] */
/* eslint-env es6 */

export default {
  name: 'svg-icon',
  data () {
    return {
      'svg': '',
      'disclosure': require('@/svg/disclosure_16.svg'),
      'catalog': require('@/svg/catalog_24.svg'),
      'catalog-tab': require('@/svg/catalog_tab_24.svg'),
      'search': require('@/svg/search_16.svg'),
      'home': require('@/svg/home_24.svg'),
      'cart': require('@/svg/cart_24.svg'),
      'favorites': require('@/svg/favorites_24.svg'),
      'favorites-tab': require('@/svg/favorites_tab_24.svg'),
      'person': require('@/svg/person_24.svg'),
      'card-checked': require('@/svg/card_checked_24.svg'),
      'return': require('@/svg/return_24.svg'),
      'cross': require('@/svg/cross_24.svg')
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
