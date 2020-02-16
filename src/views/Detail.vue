<template>
  <div class="view">
    <SearchBar />
    {{ /* breadcrumbs components */ }}
    <div class="container">
      <div class="breadcrumbs">
        <a class="link" href="">Электроника</a><svg-icon :name="'disclosure'"/>
        <a class="link" href="">Ноутбуки, планшеты и электронные книги</a><svg-icon :name="'disclosure'"/>
        <a class="link" href="">Ноутбуки</a><svg-icon :name="'disclosure'"/>
        <a class="link" href="">Lenovo</a>
      </div>
    </div>

    {{ /* sku components */ }}
    <div class="container">
      <div class="sku">Код товара: 165802519</div>
    </div>

    {{ /* main slider components */ }}
    <div class="container">
      <div class="main-slider">
        <amp-carousel lightbox layout="fixed-height" height="350" type="slides">
          <amp-img src="https://cdn1.ozone.ru/s3/multimedia-j/c650/6000403399.jpg" height="250" width="350"></amp-img>
          <amp-img src="https://cdn1.ozone.ru/s3/multimedia-l/c650/6000403401.jpg" height="250" width="350"></amp-img>
          <amp-img src="https://cdn1.ozone.ru/s3/multimedia-o/c650/6000403404.jpg" height="250" width="350"></amp-img>
        </amp-carousel>
        <div class="marketing-lable">
          <div class="lable">Я без MS Office</div>
        </div>
      </div>
    </div>

    {{ /* user-photo components */ }}
    <div class="container">
      <div class="user-photo">
        <div class="title">Фотографии покупателей</div>
        <amp-carousel lightbox height="64" layout="fixed-height" type="carousel">
          <amp-img src="https://cdn1.ozone.ru/s3/rp-photo-5/c150/35b7b211-de91-4349-bd9a-600d876f9923.jpeg" width="72" height="64" alt="a sample image"></amp-img>
          <amp-img src="https://cdn1.ozone.ru/s3/rp-photo-2/c150/783f3472-301a-47e1-8820-f32864743a6f.jpeg" width="72" height="64" alt="another sample image"></amp-img>
          <amp-img src="https://cdn1.ozone.ru/s3/rp-photo-1/c150/7e118b61-690b-4bd7-b5d9-e173c4c4349d.jpeg" width="72" height="64" alt="and another sample image"></amp-img>
          <amp-img src="https://cdn1.ozone.ru/s3/rp-photo-5/c150/35b7b211-de91-4349-bd9a-600d876f9923.jpeg" width="72" height="64" alt="a sample image"></amp-img>
          <amp-img src="https://cdn1.ozone.ru/s3/rp-photo-2/c150/783f3472-301a-47e1-8820-f32864743a6f.jpeg" width="72" height="64" alt="another sample image"></amp-img>
          <amp-img src="https://cdn1.ozone.ru/s3/rp-photo-1/c150/7e118b61-690b-4bd7-b5d9-e173c4c4349d.jpeg" width="72" height="64" alt="and another sample image"></amp-img>
          <amp-img src="https://cdn1.ozone.ru/s3/rp-photo-5/c150/35b7b211-de91-4349-bd9a-600d876f9923.jpeg" width="72" height="64" alt="a sample image"></amp-img>
          <amp-img src="https://cdn1.ozone.ru/s3/rp-photo-2/c150/783f3472-301a-47e1-8820-f32864743a6f.jpeg" width="72" height="64" alt="another sample image"></amp-img>
          <amp-img src="https://cdn1.ozone.ru/s3/rp-photo-1/c150/7e118b61-690b-4bd7-b5d9-e173c4c4349d.jpeg" width="72" height="64" alt="and another sample image"></amp-img>
          <amp-img src="https://cdn1.ozone.ru/s3/rp-photo-5/c150/35b7b211-de91-4349-bd9a-600d876f9923.jpeg" width="72" height="64" alt="a sample image"></amp-img>
          <amp-img src="https://cdn1.ozone.ru/s3/rp-photo-2/c150/783f3472-301a-47e1-8820-f32864743a6f.jpeg" width="72" height="64" alt="another sample image"></amp-img>
          <amp-img src="https://cdn1.ozone.ru/s3/rp-photo-1/c150/7e118b61-690b-4bd7-b5d9-e173c4c4349d.jpeg" width="72" height="64" alt="and another sample image"></amp-img>
        </amp-carousel>
      </div>
    </div>

    {{ /* marketing mark components */ }}
    <div class="container">
      <div class="marketing-mark">
        <span class="mark"> -7% </span> <span class="rate"> Бесцеллер </span>
      </div>
      <h1>15.6" Ноутбук Lenovo IdeaPad L340-15API (81LW005DRU), серый</h1>
    </div>

    {{ /* marketing mark components */ }}
    <div class="container">
      <div class="price-block">
        {{/* TODO refresh price width fetch api */}}
        <span class="price">30 450 ₽</span>
        <span class="strike-price">32 990 ₽</span>
      </div>
    </div>

    {{ /* subscription (personal offer)  components */ }}
    <div class="subscriptions">
      <div class="container">
        <div class="subscriptions-block">
          Cообщим о снижении цены
        </div>
        <div class="subscriptions-block">
          1 523 балла при оплате <a href="">Ozon.Card</a>
        </div>
      </div>
    </div>

    {{ /* credit */}}
    <div class="separator-10" />
    <div class="container">
      <div class="credit-block">
        <b>От 1635 руб./месяц</b> в кредит
      </div>
    </div>

    <div class="separator-10" />

    {{/* saller */}}
    <div class="container">
      <div class="seller-block">
        <div class="saller-brand">
          <div class="saller-logo">
            <amp-img src="https://cdn1.ozone.ru/graphics/ozon/logo/ozon-logo.png" width="48" height="48" alt="OZON"></amp-img>
          </div>
          <div class="saller-info">
            <div class="title">Продавец:</div>
            <div class="barnd-name">OZON</div>
          </div>
        </div>
        <ul class="saller-items">
            <li>
              <svg-icon class="icon" :name="'card-checked'"/>
              <div>
                <span class="block">Безопасная оплата:</span>
                <span class="block">Банковской картой и ещe несколько способов оплаты</span>
              </div>
            </li>
            <li>
              <svg-icon class="icon" :name="'return'"/>
              <div class="saller-return">
                <span class="block">Возврат 14 дней, с <a href="">Ozon Premium</a>  — 60 дней.</span>
              </div>
            </li>
        </ul>
      </div>
    </div>

    {{/* description */}}
    <div class="container">
      <div class="description-block">
        <h2>Описание</h2>
        <div class="text">
          Ноутбук Lenovo IdeaPad L340-15 имеет процессор AMD Ryzen 3 3200U (Ryzen) 2.6 ГГц, а так же видеокарту AMD Radeon Vega 3 Graphics, в сочетании с 15.6 дюймовым экраном, пользователям доступны максимальные мультимедийные возможности. Ноутбук Lenovo IdeaPad L340-15, рассчитан на широкий круг аудитории, в том числе игровой и бизнес класса. На хранение данных и мультимедии отведен жесткий диск и накопитель SSD, емкостью 1000+128 ГБ, это позволяет всегда иметь под рукой всю необходимую информацию и файлы, не зависимо от места нахождения. Автономная работа ноутбука - до 8.5 часов. Ноутбук сертифицирован EAC и имеет русифицированную клавиатуру и "Руководство пользователя".
        </div>
      </div>
    </div>

    {{/* spec */}}
    <div class="container">
      <div class="spec-block">
        <h2>Характеристики</h2>
        <div class="spec">
          <div class="title">Передача данных</div>
          <dl class="speck-list">
            <dt>Модуль связи WiFi:</dt>
            <dd>802.11ac, 802.11b/g/n</dd>
          </dl>
          <dl class="speck-list">
            <dt>Модуль связи Bluetooth:</dt>
            <dd>4.2</dd>
          </dl>
        </div>
        <div class="spec">
          <div class="title">Аккумулятор</div>
          <dl class="speck-list">
            <dt>Время автономной работы, ч:</dt>
            <dd>8.5</dd>
          </dl>
          <dl class="speck-list">
            <dt>Емкость аккумулятора, мАч:</dt>
            <dd>3900</dd>
          </dl>
          <dl class="speck-list">
            <dt>Кол-во элементов аккумулятора:</dt>
            <dd>3</dd>
          </dl>
          <dl class="speck-list">
            <dt>Кол-во элементов аккумулятора:</dt>
            <dd>3</dd>
          </dl>
        </div>
        <div class="spec">
          <div class="title">Экран</div>
          <dl class="speck-list">
            <dt>Диагональ экрана:</dt>
            <dd>15.6"</dd>
          </dl>
          <dl class="speck-list">
            <dt>Емкость аккумулятора, мАч:</dt>
            <dd>3900</dd>
          </dl>
          <dl class="speck-list">
            <dt>Кол-во элементов аккумулятора:</dt>
            <dd>3</dd>
          </dl>
          <dl class="speck-list">
            <dt>Кол-во элементов аккумулятора:</dt>
            <dd>3</dd>
          </dl>
        </div>
        <div class="disclaimer">
          Информация о технических характеристиках, комплекте поставки, стране изготовления, внешнем виде и цвете товара носит справочный характер и основывается на последних доступных к моменту публикации сведениях
        </div>
      </div>
    </div>

    {{ /* STICKY BLOCK */ }}
    <div class="sticky-bottom">
      <div class="buy-block">
        <div class="container">
          <div class="btn-buy">
            Добавить в корзину
          </div>
        </div>
      </div>
      <Navbar />
    </div>

    <div class="separator-20" />
    <div class="separator-20" />
    <div class="separator-20" />
    <div class="separator-20" />
    <div class="separator-20" />
    <div class="separator-20" />
    <div class="separator-20" />
    <div class="separator-20" />
    <div class="separator-20" />
    <div class="separator-20" />

  </div>
</template>

<script>
import SearchBar from '@/components/detail/search-bar'
import Navbar from '@/components/detail/navbar'

export default {
  name: 'Pdp',
  components: {
    SearchBar,
    Navbar
  }
}
</script>

<style lang="scss">
.view {
  overflow-x: hidden;
}

h1 {
  margin-bottom: 5px;
  font-size: 21px;
  line-height: 26px;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-word;
}

.breadcrumbs {
  margin: 8px 0;
  margin: 8px 0 6px;

  .link {
    margin: 2px 0;
    color: #005bff;
    font-size: 12px;
    text-decoration: none;
  }

  .svg-icon-inline > svg {
    margin-bottom: -4px;
  }
}

.sku {
  color: #808d9a;
  font-size: 14px;
  text-align: right;
}

.main-slider {
  position: relative;

  .marketing-lable {
    right: 0;
    top: 17px;
    position: absolute;
  }

  .marketing-lable .lable {
    position: relative;
    color: rgb(255, 255, 255);
    background-color: rgb(159, 53, 132);
    border-radius: 3px;
    font-size: 12px;
    line-height: 1.33;
    text-align: center;
    cursor: pointer;
    max-width: 100%;
    padding: 7px 14px 7px 11px;
    margin-bottom: 5px;
  }
}

.marketing-mark {
  .mark {
    padding: 2px 8px;
    border-color: rgb(255, 255, 255);
    margin-right: 10px;
    background-color: rgb(249, 17, 85);
    border-radius: 3px;
    color: rgb(255, 255, 255);
    font-size: 14px;
  }

  .rate {
    padding: 2px 8px;
    margin-right: 10px;
    color: rgb(255, 132, 0);
    font-size: 14px;
  }
}

.user-photo {
  margin-bottom: 8px;

  .title {
    margin-bottom: 16px;
    color: #001a34;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.25;
  }

  img {
    border-radius: 2px;
  }
}

.price-block {
  padding: 16px 0;

  .price {
    display: inline-block;
    margin-right: 8px;
    color: #f91155;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.27;
    white-space: nowrap;
  }

  .strike-price {
    position: relative;
    display: inline-block;
    color: #d6dbe0;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4;

    &:after {
      position: absolute;
      top: calc(50% - 1px);
      left: 0;
      display: block;
      width: 100%;
      height: 2px;
      background-color: #f91155;
      content: '';
    }
  }
}

.subscriptions {
  margin-right: -16px;
  margin-left: -16px;

  .subscriptions-block {
    width: 100%;
    padding: 16px 12px;
    border-top: 1px solid #d6dbe0;
    background-color: #f2f3f5;

    &:first-child {
      border-top: none;
    }
  }
}

.credit-block {
  position: relative;
  padding: 5px 0;
  display: flex;
  align-items: center;
}

.seller-block {
  position: relative;
  width: 100%;
  border: 1px solid #d6dbe0;
  border-left-style: none;
  border-right-style: none;
  padding: 20px 0 24px;

  .saller-brand {
    display: flex;
    margin-bottom: 20px;
  }

  .saller-brand .saller-logo {
    width: 48px;
    height: 48px;
    margin-right: 15px;
  }

  .saller-brand .saller-info {
    display: block;
    width: 100%;
  }

  .saller-brand .title {
    color: #808d9a;
    margin-bottom: 6px;
  }

  .saller-brand .barnd-name {
    font-size: 16px;
    font-weight: 700;
    vertical-align: middle;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  .saller-items {
    list-style: none;
    position: relative;
    display: block;
    align-items: center;
    width: 100%;
    font-size: 14px;
    padding: 0;
    margin: 0;

    li {
      width: 100%;
      margin-top: 12px;
      display: flex;
    }

    li .saller-return {
      display: flex;
      align-items: center;
      margin-top: 0;
    }

    li .icon {
      margin-right: 12px;
      align-self: baseline;
      flex-shrink: 0;
      flex-grow: 0;
    }
  }
}

.description-block {
  h2 {
    margin-bottom: 16px;
    display: inline-block;
    outline: none;
    font-size: 24px;
    line-height: 1.25;
    font-weight: 700;
    color: #001a34;
  }

  .text {
    font-size: 16px;
    line-height: 1.38;
    hyphens: auto;
  }
}

.spec-block {
  h2 {
    line-height: 1.25;
    font-weight: 700;
    margin-bottom: 16px;
    color: #001a34;
  }

  .title {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.29;
    color: #001a34;
    margin-top: 20px;
    margin-bottom: 12px;
    width: 100%;
  }

  .speck-list {
    width: 100%;
    font-size: 14px;
    margin-bottom: 8px;
  }

  dt,
  dd {
    display: inline;
    padding: 0;
    margin: 0;
    position: relative;
    word-break: break-word;
  }

  dt {
    color: #808d9a;
    padding-right: 3px;
  }

  .disclaimer {
    font-size: 12px;
    color: #808d9a;
    line-height: 20px;
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #d6dbe0;
    display: block;
  }
}

.buy-block {
  padding-top: 12px;
  padding-bottom: 12px;
  background: #fff;
  width: auto;
  position: relative;

  .btn-buy {
    box-sizing: border-box;
    display: block;
    width: 100%;
    border-radius: 3px;
    color: #fff;
    padding: 20px 12px;
    background-color: #005bff;
    font-weight: 700;
    text-align: center;
    font-size: 16px;
    line-height: 16px;
  }
}
</style>
