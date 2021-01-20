<template>
  <div class="langnav-content" :class="[showLight ? 'light' : 'dark']">
    <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
    <nuxt-link :to="switchLocalePath('es')">Español</nuxt-link>
    <nuxt-link :to="switchLocalePath('de')">Deutsche</nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LangNav',
  computed: {
    ...mapGetters({
      showLight: 'menuBtn/getShowLight',
    }),
  },
}
</script>
