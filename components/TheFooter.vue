<template>
  <footer>
    <Logo :logo="logo" />
  </footer>
</template>
<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo,
  },
  data() {
    return {
      logo: {
        width: '1.9725in',
        height: '0.4275in',
      },
    }
  },
}
</script>
