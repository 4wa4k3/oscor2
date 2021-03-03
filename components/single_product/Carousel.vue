<template>
  <div class="single-carousel-container">
    <div class="single-carousel-title">
      <h2>{{ $prismic.asText(title) }}</h2>
      <hr />
    </div>
    <div class="single-carousel-slides-container">
      <template v-for="(slide, i) in slides">
        <div
          :key="i"
          class="single-carousel-slide"
          :style="{ backgroundImage: `url(${slide.slide.url})` }"
        >
          <div class="single-carousel-slide-text">
            <p>{{ $prismic.asText(slide.slide_text) }}</p>
          </div>
        </div>
      </template>
    </div>
    <div class="single-carousel-controls">
      <button class="single-carousel-controls__prev">prev</button>
      <button class="single-carousel-controls__next">next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    title: {
      type: Array,
      default() {
        return []
      },
    },
    slides: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
