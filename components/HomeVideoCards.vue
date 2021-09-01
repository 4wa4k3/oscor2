<template>
  <div class="news-front-section-card">
    <div class="news-front-section-video-wrap">
      <video
        playsinline
        controls
        loop
        muted
        preload="auto"
        :poster="videosPoster"
      >
        <source :src="videosLink" type="video/mp4" />
      </video>
    </div>
    <div class="news-front-section--inner-link-wrap">
      <a :href="videosLink">WATCH</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeVideoCards',
  props: {
    videosLink: {
      type: String,
      default: '',
    },
    videosPoster: {
      type: String,
      default: '',
    },
  },
}
</script>
