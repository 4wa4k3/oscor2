<template>
  <div
    class="single-description-container"
    :style="{ backgroundColor: description.primary.color }"
  >
    <div ref="description" class="single-description-content">
      <div
        class="single-description-image"
        :style="{ backgroundImage: `url(${description.primary.image.url})` }"
      ></div>
      <div class="single-description-text">
        <p>
          {{ $prismic.asText(description.primary.description1) }}
        </p>
        <template v-for="(link, i) in description.items">
          <a
            v-if="link.link.kind"
            :key="i"
            :href="$prismic.asLink(link.link)"
            >{{ $prismic.asText(link.link_text) }}</a
          >
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
export default {
  name: 'SingleProductDescription',
  props: {
    description: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  mounted() {
    // this.$nextTick(() => {
    const description = this.$refs.description
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: description,
        markers: false,
        start: 'top 30%',
        end: 'bottom 90%',
      },
    })
    tl.from(description.children[0], {
      x: -100,
      opacity: 0,
      duration: 1,
    }).from(description.children[1], {
      x: 100,
      opacity: 0,
      duration: 1,
    })
    // })
  },
}
</script>
