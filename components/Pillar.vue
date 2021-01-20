<template>
  <section :id="`pillar${$prismic.asText(pillar.id)}`" class="pillar-container">
    <div class="pillar-container-wrapper">
      <div class="pillar-content">
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
      <!-- <figure
        class="hero-start-frame"
        :style="{ backgroundImage: `url(${pillar.image})` }"
      ></figure> -->
      <video
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
    const pVideo = document.querySelectorAll('.pillar-video')
    pVideo.forEach((pVid) => {
      // pVid.play()
      // pVid.autoplay = true
      // pVid.loop = true
      pVid.style.height = '540px'
      // pVid.style.position = 'absolute'
      // pVid.style.right = '0'
    })
  },
}
</script>
