<template>
  <button aria-pressed="false" aria-label="menu" @click="navOpen()">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g id="menu">
        <line
          v-for="(line, i) in mBtn"
          :key="i"
          :class="`${line.name}`"
          :x1="line.x1"
          :y1="line.y1"
          :x2="line.x2"
          :y2="line.y2"
          :style="{ stroke: line.stroke }"
          stroke-width="3"
        />
      </g>
    </svg>
  </button>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      nav: 'navs/navActive',
      mBtn: 'menuBtn/getMenuBtn',
      showLight: 'menuBtn/getShowLight',
    }),
  },
  created() {
    if (this.showLight) {
      this.$store.commit('menuBtn/changeMenuButtonColor', '#fff')
    } else {
      this.$store.commit('menuBtn/changeMenuButtonColor', '#323233')
    }
  },
  methods: {
    navOpen() {
      this.$store.commit('navs/navOpen')
    },
  },
}
</script>
