<template>
  <div ref="lvl1" class="side-nav--link">
    <nuxt-link
      :to="
        localePath({
          name: 'careers',
          params: { careers: car.primary.nav_link.uid },
        })
      "
      @click.native="navOpen"
      >{{ car.primary.link_text }}</nuxt-link
    ><span
      v-if="car.items[0].second_level_link_name[0]"
      ref="moreBtn"
      class="side-nav--more-btn"
      @click="lvl2Open()"
      >+</span
    >
    <div
      v-if="car.items[0].second_level_link_name[0]"
      ref="lvl2"
      class="side-nav--lvl2"
    >
      <span ref="backBtn" class="side-nav--back-btn" @click="lvl2Open()"
        >&larr;</span
      >
      <template v-for="lvl2 in car.items">
        <a
          :key="lvl2.second_lvl_link.type"
          :href="lvl2.second_lvl_link.url"
          target="_blank"
          @click="navOpen"
          >{{ $prismic.asText(lvl2.second_level_link_name) }}</a
        >
      </template>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CareersLink',
  props: {
    car: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    ...mapGetters({
      nav: 'navs/navActive',
    }),
  },
  methods: {
    lvl2Open() {
      const subMenu = this.$refs.lvl1.children[2]
      subMenu.classList.contains('nav-open')
        ? subMenu.classList.remove('nav-open')
        : subMenu.classList.add('nav-open')
    },
    navOpen() {
      this.$store.commit('navs/navOpen')
    },
  },
}
</script>
