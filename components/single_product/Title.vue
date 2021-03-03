<template>
  <section class="single-content-hero">
    <div class="single-content-container">
      <div class="single-content-heading">
        <h1 ref="title" v-html="$prismic.asText(title)"></h1>
        <hr />
        <h2>{{ $prismic.asText(subtitle) }}</h2>
      </div>
      <div class="single-content-image-container">
        <img :src="image.url" alt="" />
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
    image: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  mounted() {
    const title = this.$refs.title
    const sup = title.getElementsByTagName('sup')

    if (sup) {
      sup.forEach((elem) => {
        elem.style.fontSize = '1.8rem'
      })
    }
  },
}
</script>
