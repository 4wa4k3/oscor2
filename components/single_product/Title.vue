<template>
  <section class="single-content-hero">
    <div class="single-content-ratio">
      <div class="single-content-heading">
        <h1>{{ $prismic.asText(title) }}</h1>
        <hr />
        <h2>{{ $prismic.asText(subtitle) }}</h2>
        <article>
          <p>
            {{ $prismic.asText(description) }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SingleProductPage',
  props: {
    title: {
      type: Array,
      default() {
        return []
      },
    },
    subtitle: {
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
