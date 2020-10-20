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
      mBtn: 'navs/mBtn',
    }),
  },
  methods: {
    navOpen() {
      this.$store.commit('navs/navOpen')
    },
  },
}
</script>

<style lang="scss" scoped>
.tLine,
.cLine,
.bLine {
  stroke: white;
}
</style>
