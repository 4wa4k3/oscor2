<template>
  <section class="division-content-hero">
    <div class="division-content-heading">
      <h1>{{ $prismic.asText(title) }}</h1>
      <hr />
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageTitle',
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
