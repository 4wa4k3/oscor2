<template>
  <div ref="lvl1" class="side-nav--link">
    <nuxt-link
      :to="
        localePath({
          name: 'news',
          params: { news: n.primary.nav_link.uid },
        })
      "
      >{{ n.primary.link_text }}</nuxt-link
    ><span
      v-if="n.items[0].second_level_link_name[0]"
      ref="moreBtn"
      class="side-nav--more-btn"
      @click="lvl2Open()"
      >+</span
    >
    <!-- <div
      v-if="lvl.items[0].second_level_link_name[0]"
      ref="lvl2"
      class="side-nav--lvl2"
    >
      <span ref="backBtn" class="side-nav--back-btn" @click="lvl2Open(i)"
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
          >{{ $prismic.asText(lvl2.second_level_link_name) }}</nuxt-link
        >
      </template>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'NewsLink',
  props: {
    n: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
