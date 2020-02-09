<template>
  <div class="app">
    <amp-img
      width="777"
      height="540"
      src="https://cdn1.ozone.ru/graphics/action/190722-apps/free-i-phone-xr2x.png"
      layout="responsive"
    >
      <div fallback>изображение не доступно</div>
    </amp-img>
    <div class='app-banner'>
      Я валидный AMP =)
    </div>
    <div>
      Ваш браузер: {{ $parent.headers['user-agent'] }}
    </div>
    <div>
      Ваш IP: {{ $parent.headers['x-forwarded-for'] || $parent.connection.remoteAddress}}
      Заголовок:
      <pre>
        {{ JSON.stringify($parent.headers) }}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="scss">
.app {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 100%;
  margin: 0 auto;

  .app-banner {
    font-weight: 700;
    text-align: center;
  }
}
</style>
