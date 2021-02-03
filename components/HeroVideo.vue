<template>
  <section class="landing-hero">
    <div class="landing-hero__video-wrapper">
      <video ref="vid" playsinline autoplay loop muted preload="auto">
        <source :src="video" type="video/mp4" />
      </video>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HeroVideo',
  props: {
    video: {
      type: String,
      default: '',
    },
  },
  mounted() {
    this.heroVid()
    window.addEventListener('resize', this.heroVid)
  },
  methods: {
    heroVid() {
      const vid = this.$refs.vid
      vid.style.cssText = `left:50%; min-height: 100%; min-width:100%; position:absolute; top:50%; transform:translate(-50%, -50%);`
      const parentDiv = vid.parentNode
      parentDiv.style.cssText = `position:relative; width:100%; height:${window.innerHeight}px;`
    },
  },
}
</script>
