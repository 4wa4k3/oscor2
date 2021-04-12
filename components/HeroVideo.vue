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
    const vid = this.$refs.vid
    const parentDiv = vid.parentNode

    function heroVid() {
      vid.style.cssText = `left:50%; min-height: 100%; min-width:100%; position:absolute; top:50%; transform:translate(-50%, -50%);`
      parentDiv.style.cssText = `position:relative; width:100%; height:${window.innerHeight}px;`
    }

    heroVid()
    window.addEventListener('resize', heroVid)
  },
  methods: {},
}
</script>
