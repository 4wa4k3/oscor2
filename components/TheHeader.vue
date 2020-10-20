<template>
  <header class="top-nav">
    <div class="top-nav__brand-container">
      <MenuButton />
      <Logo :logo="logo" />
    </div>
  </header>
</template>
<script>
import Logo from '~/components/Logo'
import MenuButton from '~/components/MenuButton'
export default {
  components: {
    Logo,
    MenuButton,
  },
  data() {
    return {
      logo: {
        width: '1.9725in',
        height: '0.4275in',
      },
    }
  },
  computed: {
    nav() {
      return this.$store.getters['navs/navActive']
    },
  },
}
</script>
