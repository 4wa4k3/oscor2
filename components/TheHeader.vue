<template>
  <header class="top-nav">
    <div class="top-nav-wrap">
      <div class="top-nav__brand-container">
        <MenuButton />
        <Logo :logo="logo" />
      </div>
      <div class="top-nav__cart-container">
        <LangNav />
        <CartBtn />
      </div>
    </div>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'
import Logo from '~/components/Logo'
import MenuButton from '~/components/MenuButton'
import LangNav from '~/components/LangNav'
import CartBtn from '~/components/CartBtn'
export default {
  components: {
    Logo,
    MenuButton,
    LangNav,
    CartBtn,
  },
  data() {
    return {
      logo: {
        width: '1.9725in',
        height: '0.4275in',
        color: '#fff',
      },
    }
  },
  computed: {
    ...mapGetters({
      showLight: 'menuBtn/getShowLight',
    }),
    nav() {
      return this.$store.getters['navs/navActive']
    },
  },
  created() {
    if (!this.showLight) {
      this.logo.color = '#7D7D80'
    }
  },
}
</script>
