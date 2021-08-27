<template>
  <div ref="wrap" class="wrap">
    <TheNav ref="nav" :class="{ 'nav-open': nav }" />
    <TheHeader />
    <Nuxt />
    <CookieAlert />
    <TheFooter />
    <!-- <div
      id="snipcart"
      data-api-key="ODRkZDZjOWMtY2NkMi00YjY3LWEwYzctNzgxNTdkODdiNzgzNjM3MzQ2NDk3ODQ5Mjc2NDU2"
      hidden
    ></div>
    <script src="https://cdn.snipcart.com/themes/v3.0.11/default/snipcart.js"></script> -->
  </div>
</template>

<script>
import TheNav from '~/components/TheNav'
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'
import CookieAlert from '~/components/CookieAlert'

export default {
  name: 'DivisionLightLayout',
  components: {
    TheNav,
    TheHeader,
    TheFooter,
    CookieAlert,
  },
  data() {
    return {
      docs: [],
      menuLinks: [],
    }
  },
  computed: {
    nav() {
      return this.$store.getters['navs/navActive']
    },
  },
  created() {
    this.$store.commit('menuBtn/changeShowLight', false)
  },
}
</script>
