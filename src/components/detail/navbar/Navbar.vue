<template>
  <nav class="navbar">
    <div class="container navbar-block">
      <div class="navbar-item">
        <div class="icon"><svg-icon :name="'home'" /></div>
        <div class="title">Главная</div>
      </div>
      <div class="navbar-item">
        <div class="icon"><svg-icon :name="'catalog-tab'" /></div>
        <div class="title">Каталог</div>
      </div>
      <div class="navbar-item">
        <div class="icon"><svg-icon :name="'cart'" /></div>
        <div class="title">Корзина</div>
      </div>
      <div class="navbar-item">
        <div class="icon"><svg-icon :name="'favorites-tab'" /></div>
        <div class="title">Избранное</div>
      </div>
      <div class="navbar-item">
        <div class="icon"><svg-icon :name="'person'" /></div>
        <div class="title">Мой OZON</div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Navbar extends Vue {
}
</script>

<style lang="scss">
.navbar {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: block;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .12);
  box-sizing: border-box;

  .navbar-block {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
  }

  .navbar-item {
    flex-grow: 1;
    text-align: center;
    font-size: 11px;
    line-height: 13px;
    text-decoration: none;
    color: #999;
    touch-action: none;
  }

  .navbar-item .icon {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-item .title {
    margin-top: 5px;
  }
}
</style>
