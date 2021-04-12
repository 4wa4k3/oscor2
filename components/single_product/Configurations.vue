<template>
  <section class="single-configs-section">
    <template v-for="(config, i) in configs">
      <div ref="container" :key="i" class="single-configs-container">
        <div class="single-configs-title">
          <h3>{{ $prismic.asText(config.primary.title) }}</h3>
          <hr />
        </div>
        <figure class="single-configs-figure">
          <img
            v-if="config.primary.image.url"
            :src="config.primary.image.url"
            alt=""
          />
          <svg
            v-if="$prismic.asText(config.primary.svg)"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1565.97 408.95"
            v-html="$prismic.asText(config.primary.svg)"
          ></svg>
        </figure>
      </div>
    </template>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
export default {
  name: 'Configs',
  props: {
    configs: {
      type: Array,
      default() {
        return []
      },
    },
  },
  mounted() {
    const container = this.$refs.container
    const targets = gsap.utils.toArray(container)
    ScrollTrigger.batch(targets, {
      onEnter: (batch) => {
        gsap.from(batch, {
          opacity: 0,
          y: -100,
          stagger: {
            each: 0.15,
          },
        })
      },
    })
  },
}
</script>
