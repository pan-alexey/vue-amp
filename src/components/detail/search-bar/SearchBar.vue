<template>
  <div class="search-bar">
    <div class="search-container container">
      <div class="search-block">
        <svg-icon class="search-icon" :name="'search'"/>
        <div class="search">поиск</div>
      </div>
      <div class="bar-icon">
        <div class="inline-block icon icon--right" on="tap:my-lightbox" role="button" tabindex="0">
          <svg-icon :name="'catalog'"/>
        </div>
        <amp-lightbox id="my-lightbox" layout="nodisplay">
          <div class="catalog-menu">

            <div class="catalog-block">
              <div class="container">
                <div class="close" on="tap:my-lightbox.close" role="button" tabindex="0">
                  <svg-icon :name="'cross'"/>
                </div>
              </div>
              <div class="catalog-items">
                <amp-list
                  class="catalog-list"
                  layout="fill"
                  src="//localhost:8090/mock/catalog"
                  binding="refresh">
                  <Template type="amp-mustache" v-pre>
                    <a href="{{url}}" class="container block catalog-item">{{title}}</a>
                  </Template>
                </amp-list>
              </div>
            </div>
          </div>
        </amp-lightbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style lang="scss">
.search-bar {
  height: 56px;
  padding-top: 12px;
  color: #999;

  .search-container {
    position: relative;
    display: flex;
    height: 36px;
    align-items: center;
  }

  .search-container .bar-icon {
    height: 36px;
    line-height: 36px;
    color: #999;

    .icon {
      color: #999;
    }

    .icon--right {
      margin-left: 8px;
    }

    .icon--left {
      margin-right: 8px;
    }
  }

  .search-container .search-block {
    position: relative;
    width: 100%;
    height: 36px;
    border: none;
    background: #f2f3f5;
    border-radius: 3px;
    line-height: 36px;

    .search {
      display: block;
      padding-right: 36px;
      padding-left: 32px;
    }

    .search-icon {
      position: absolute;
      top: 0;
      left: 10px;
      height: 36px;
    }
  }

  .catalog-menu {
    position: fixed;
    background: #fff;
    z-index: 100;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    .catalog-block {
      height: 100%;
    }

    .catalog-list {
      margin-top: 18px;
    }

    .catalog-items {
      position: relative;
      overflow-y: auto;
      height: 100%;
    }

    .catalog-item {
      margin-top: 2px;
    }

    .close {
      position: absolute;
      top: 12px;
      right: 20px;
      z-index: 110;
    }
  }
}
</style>
