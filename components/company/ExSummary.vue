<template>
  <div class="single-description-container company-section">
    <div class="company-executive-summary-container">
      <div class="company-title">
        <h2>{{ $prismic.asText(title) }}</h2>
        <hr />
      </div>
      <div class="company-executive-summary-content">
        <template v-for="(summ, i) in summary">
          <div :key="i" class="company-executive-summary">
            <div
              class="company-executive-summary-icon"
              v-html="summ.icon[0].text"
            ></div>
            <div
              class="company-executive-summary-text"
              v-html="$prismic.asHtml(summ.text)"
            ></div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExecutiveSummary',
  props: {
    title: {
      type: Array,
      default() {
        return []
      },
    },
    summary: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
