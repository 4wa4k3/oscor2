<template>
  <div v-if="$store.getters['gdpr/isOpen']" class="cookie-alert-container">
    <div class="cookie-alert-text">
      <span>&#127850;</span>
      <p>
        We use cookies to ensure that we give you the best experience on our
        website. Please read our
        <nuxt-link to="/privacy-policy">privacy policy</nuxt-link> for more
        information.
      </p>
      <div class="cookie-alert-buttons">
        <button @click="accept">Accept</button>
        <button @click="deny">&times;</button>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapMutations} from 'vuex'
export default {
  name: 'CookieAlert',
  watch: {
    '$store.getters': 'gdpr/isOpen',
  },
  // data() {
  //   return {
  //     isOpen: null,
  //   }
  // },
  mounted() {
    if (!this.getGDPR() === true) {
      this.$store.commit('gdpr/accept')
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', true)
      }
    },

    deny() {
      this.$store.dispatch('gdpr/deny')
    },

    accept() {
      this.$store.dispatch('gdpr/accept')
    },
  },
}
</script>
