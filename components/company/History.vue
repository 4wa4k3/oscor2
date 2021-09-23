<template>
  <div class="company-section">
    <!-- single-description-container -->
    <div class="company-history-container">
      <div class="company-title">
        <h2>{{ $prismic.asText(history.subtitle) }}</h2>
        <hr />
      </div>
      <div class="company-history-content-container">
        <figure>
          <img :src="history.image.url" :alt="history.image.alt" />
          <figcaption>{{ history.image.alt }}</figcaption>
        </figure>
        <div
          class="company-history-text"
          v-html="$prismic.asHtml(history.text)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyHistory',
  props: {
    history: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
