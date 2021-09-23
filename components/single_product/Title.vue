<template>
  <div class="single-content-container-wrap">
    <section class="single-content-hero">
      <div class="single-content-container">
        <div class="single-content-heading">
          <h1 ref="title" v-html="$prismic.asText(title)"></h1>
          <hr />
          <h2>{{ $prismic.asText(subtitle) }}</h2>
        </div>
        <div class="single-content-image-container">
          <img :src="image.url" :alt="$prismic.asText(title)" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'SingleProductPage',
  props: {
    title: {
      type: Array,
      default() {
        return []
      },
    },
    subtitle: {
      type: Array,
      default() {
        return []
      },
    },
    image: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  mounted() {
    const title = this.$refs.title
    const sup = title.getElementsByTagName('sup')
    const tl = gsap.timeline({})
    const titleContainer = document.querySelector('.single-content-heading')
    const imageContainer = document.querySelector(
      '.single-content-image-container'
    )
    if (sup) {
      for (let i = 0; i < sup.length; i++) {
        sup[i].style.fontSize = '1.8rem'
        sup[i].style.textDecoration = 'none'
      }
    }
    tl.from(titleContainer, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'linear',
    }).from(imageContainer, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'linear',
    })
  },
}
</script>
