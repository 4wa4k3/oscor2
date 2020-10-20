<template>
  <nav class="side-nav">
    <ul style="list-style: none">
      <li v-for="(links, i) in lvlOne" :key="`slice-${i}`">
        {{ links.primary.link_text }}
      </li>
      <!-- <li style="color: white">{{ menuLinks }}</li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  async fetch() {
    try {
      const query = await this.$prismic.api.query(
        this.$prismic.predicates.at('document.type', 'navigation')
      )
      this.menuLinks = query.results[0].data.body
      // this.menuLinks = this.docs[0].data.title[0].text
    } catch (e) {
      console.log(e)
    } finally {
    }
  },
  data() {
    return {
      menuLinks: [],
    }
  },
  computed: {
    lvlOne() {
      return this.menuLinks.filter((lvl) => lvl.slice_type === '1st_level')
    },
    lvlTwo() {
      return this.menuLinks.filter((lvl) => lvl.slice_type === '2nd_level')
    },
  },
  mounted() {
    this.navHeight()
    window.addEventListener('resize', this.navHeight)
  },
  methods: {
    navHeight() {
      const nav = document.querySelector('nav')

      nav.style.height = `${document.querySelector('body').clientHeight}px`
    },
  },
}
</script>
