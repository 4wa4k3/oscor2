<template>
  <div ref="lvl1" class="side-nav--link">
    <nuxt-link
      :to="
        localePath({
          name: 'division',
          params: { division: lvl.primary.nav_link.uid },
        })
      "
      @click.native="navOpen"
      >{{ lvl.primary.link_text }}</nuxt-link
    ><span
      v-if="lvl.items[0].second_level_link_name[0]"
      ref="moreBtn"
      class="side-nav--more-btn"
      @click="lvl2Open()"
      >+</span
    >
    <div
      v-if="lvl.items[0].second_level_link_name[0]"
      ref="lvl2"
      class="side-nav--lvl2"
    >
      <span ref="backBtn" class="side-nav--back-btn" @click="lvl2Open()"
        >&larr;</span
      >
      <template v-for="lvl2 in lvl.items">
        <nuxt-link
          :key="lvl2.second_lvl_link.id"
          :to="
            localePath({
              name: 'division-category',
              params: {
                division: lvl.primary.nav_link.uid,
                category: lvl2.second_lvl_link.uid,
              },
            })
          "
          @click.native="navOpen"
          >{{ $prismic.asText(lvl2.second_level_link_name) }}</nuxt-link
        >
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DivisionLink',
  props: {
    lvl: {
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
