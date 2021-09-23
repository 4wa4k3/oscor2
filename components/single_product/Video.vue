<template>
  <section class="single-video-container">
    <video
      class="single-video--video"
      playsinline
      controls
      loop
      muted
      preload="auto"
      :poster="poster.url"
    >
      <source :src="link.url" type="video/mp4" />
    </video>
  </section>
</template>

<script>
export default {
  name: 'Video',
  props: {
    link: {
      type: Object,
      default() {
        return {}
      },
    },
    poster: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
