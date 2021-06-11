<template>
  <div
    class="single-content-hero single-image-hero"
    :style="{
      background: `no-repeat center/cover url(${img.url})`,
    }"
  >
    <!-- <div
    class="single-content-hero single-image-hero"
    :style="{
      background: `no-repeat center/cover url(${img.url}),linear-gradient(0deg, #7D7D80 20%, #f2f2f2 60%)`,
    }"
  > -->
    <div class="single-description-container">
      <div class="company-description-content">
        <div class="company-title">
          <!-- <h1>{{ $prismic.asText(title) }}</h1>
          <hr /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroTitle',
  props: {
    title: {
      type: Array,
      default() {
        return []
      },
    },
    img: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
