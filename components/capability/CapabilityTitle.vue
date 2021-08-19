<template>
  <div class="capabilities-content-wrapper">
    <h1>{{ $prismic.asText(title) }}</h1>
    <hr />
    <div
      class="capabilities-description"
      v-html="$prismic.asHtml(description)"
    ></div>
  </div>
</template>
<script>
export default {
  name: 'CapabilityTitle',
  props: {
    title: {
      type: Array,
      default() {
        return []
      },
    },
    description: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
