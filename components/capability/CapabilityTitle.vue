<template>
  <h1>{{ $prismic.asText(title) }}</h1>
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
  },
}
</script>
