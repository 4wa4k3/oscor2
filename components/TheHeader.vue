<template>
  <header class="top-nav">
    <div class="top-nav-wrap">
      <div class="top-nav__brand-container">
        <MenuButton />
        <Logo :logo="logo" />
      </div>
      <div class="top-nav__cart-container">
        <!-- <LangNav /> -->
        <SearchBtn />
      </div>
    </div>
    <SearchForm />
  </header>
</template>
<script>
import { mapGetters } from 'vuex'
import Logo from '~/components/Logo'
import MenuButton from '~/components/MenuButton'
// import LangNav from '~/components/LangNav'
import SearchBtn from '~/components/search/SearchBtn'
import SearchForm from '~/components/search/SearchForm'
export default {
  components: {
    Logo,
    MenuButton,
    // LangNav,
    SearchBtn,
    SearchForm,
  },
  data() {
    return {
      logo: {
        width: '100%', // 1.9725in
        height: '100%', // 0.4275in
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
    search() {
      return this.$store.getters['searchBtn/searchActive']
    },
  },
  created() {
    if (!this.showLight) {
      this.logo.color = '#7D7D80'
    }
  },
}
</script>
