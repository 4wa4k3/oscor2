<template>
  <div class="single-configs--content-container">
    <section
      class="single-configs-section"
      :class="[configs.length > 1 ? 'flex' : 'single-flex']"
    >
      <template v-for="(config, i) in configs">
        <div
          ref="container"
          :key="i"
          class="single-configs-container"
          :class="[configs.length > 1 ? 'multiple' : 'no']"
        >
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
            <div v-html="$prismic.asText(config.primary.svg)"></div>
          </figure>
        </div>
      </template>
    </section>
  </div>
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
