<template>
  <div class="company-facilities-container company-section">
    <div class="single-description-container">
      <div class="company-title">
        <h2>{{ $prismic.asText(facilities.primary.subtitle) }}</h2>
        <hr />
      </div>
      <div class="company-facilities-text-container">
        <p>{{ $prismic.asText(facilities.primary.text) }}</p>
      </div>
      <div class="company-facilities-cards-container">
        <template v-for="(facility, i) in facilities.items">
          <div :key="i" class="company-facilities-cards">
            <img :src="facility.img.url" alt="" />
            <h3>{{ $prismic.asText(facility.name) }}</h3>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Facilities',
  props: {
    facilities: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
