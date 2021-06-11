<i18n>
{
  "en": {
    "cart": "cart"
  }, 
  "es": {
    "cart": "carro"
  }, 
  "de": {
    "cart": "wagen"
  }
}
</i18n>
<template>
  <!-- <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41.21"
    height="40"
    viewBox="0 0 74.433 72.267"
  >
    <path
      id="cart-btn"
      :class="[showLight ? 'light' : 'dark']"
      d="M144.991,89.981H91.4L88.31,82.724a2.536,2.536,0,0,0-1.752-1.475L76.615,78.91a2.535,2.535,0,0,0-1.161,4.936l8.693,2.045L106.4,138.2a8.382,8.382,0,1,0,15.016.843h9.129a8.383,8.383,0,1,0,7.718-5.11l-28.151.039-3.472-8.162h38.352a2.535,2.535,0,0,0,2.535-2.535V92.516A2.536,2.536,0,0,0,144.991,89.981Zm-6.723,49.027a3.313,3.313,0,1,1-3.313,3.313A3.313,3.313,0,0,1,138.268,139.008Zm-24.557,0a3.313,3.313,0,1,1-3.313,3.313A3.313,3.313,0,0,1,113.711,139.008Zm28.745-33.647h-16.8a2.535,2.535,0,0,0,0,5.07h16.8v10.31H104.483L93.554,95.051h48.9Z"
      transform="translate(-73.293 -78.636)"
    />
  </svg> -->
  <button
    id="cart-btn"
    class="snipcart-checkout"
    :class="[showLight ? 'light' : 'dark']"
  >
    {{ $t('cart') }}
    <span class="snipcart-items-count"></span>
    <!-- <span class="snipcart-total-price"></span> -->
  </button>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CartBtn',
  computed: {
    ...mapGetters({
      showLight: 'menuBtn/getShowLight',
    }),
  },
}
</script>
