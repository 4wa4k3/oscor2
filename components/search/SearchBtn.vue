<i18n>
{
  "en": {
    "search": "search"
  }, 
  "es": {
    "search": "Buscar"
  }, 
  "de": {
    "search": "Suche"
  }
}
</i18n>

<template>
  <!-- <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41.21"
    height="40.220677695"
    viewBox="0 0 32.699 31.914"
  >
    <g
      class="search-btn"
      data-name="Group 398"
      transform="translate(-1670.074 -37.136)"
    >
      <g
        class="search-btn--glass"
        :class="[showLight ? 'light' : 'dark']"
        data-name="Ellipse 22"
        transform="translate(1670.074 52.818) rotate(-45)"
        stroke-width="3"
      >
        <circle cx="11.089" cy="11.089" r="11.089" stroke="none" />
        <circle cx="11.089" cy="11.089" r="9.589" fill="none" />
      </g>
      <line
        class="search-btn--handle"
        :class="[showLight ? 'light' : 'dark']"
        data-name="Line 88"
        x2="7.154"
        y2="6.432"
        transform="translate(1693.5 60.5)"
        stroke-linecap="round"
        stroke-width="3"
      />
    </g>
  </svg> -->
  <button
    class="search-btn"
    :class="[showLight ? 'light' : 'dark']"
    @click="searchOpen()"
  >
    {{ $t('search') }}
  </button>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SearchBtn',
  computed: {
    ...mapGetters({
      showLight: 'menuBtn/getShowLight',
      searchBtn: 'searchBtn/SearchActive',
    }),
  },
  methods: {
    searchOpen() {
      this.$store.commit('searchBtn/searchOpen')
    },
  },
}
</script>
