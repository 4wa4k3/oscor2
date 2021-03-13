<template>
  <section :id="`pillar${$prismic.asText(pillar.id)}`" class="pillar-container">
    <div ref="pillar" class="pillar-container-wrapper">
      <div ref="content" class="pillar-content">
        <div class="pillar-info">
          <h1>{{ $prismic.asText(pillar.section_title) }}</h1>
          <hr />
          <template v-if="!pillar.subtitle === ''">
            <h2>{{ $prismic.asText(pillar.subtitle) }}</h2>
          </template>
        </div>
        <div class="pillar-cta">
          <nuxt-link :to="localePath(`/${pillar.section_link.uid}`)">{{
            $prismic.asText(pillar.section_link_text)
          }}</nuxt-link>
        </div>
      </div>
      <video
        ref="video"
        class="pillar-video"
        playsinline
        autoplay
        loop
        muted
        preload="auto"
      >
        <source :src="pVid" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'Pillar',
  props: {
    pillar: {
      type: Object,
      default() {
        return {}
      },
      section: {
        type: Array,
        default() {
          return {}
        },
      },
    },
  },
  computed: {
    pVid() {
      const vid = this.pillar.video[0].text
      return require(`../static/videos/${vid}.mp4`)
    },
  },

  mounted() {
    // const pVideo = document.querySelectorAll('.pillar-video')
    const video = this.$refs.video
    const content = this.$refs.content
    const pillar = this.$refs.pillar
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pillar,
        markers: false,
        start: 'top 60%',
        end: 'bottom',
        stagger: { each: 0.5 },
      },
    })

    video.style.height = `540px`
    // pVideo.forEach((pVid) => {
    //   pVid.style.height = '540px'
    // })

    tl.from(content, {
      x: 100,
      scale: 2,
      opacity: 0,
      duration: 1,
    }).from(video, {
      x: 100,
      scale: 2,
      opacity: 0,
      duration: 1,
    })
  },
}
</script>
