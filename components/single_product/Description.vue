<template>
  <div
    class="single-description-container"
    :style="{ backgroundColor: description.primary.color }"
  >
    <div class="single-description-content">
      <div
        class="single-description-image"
        :style="{ backgroundImage: `url(${description.primary.image.url})` }"
      ></div>
      <div class="single-description-text">
        <p>
          {{ $prismic.asText(description.primary.description1) }}
        </p>
        <template v-for="(link, i) in description.items">
          <a
            v-if="link.link.kind"
            :key="i"
            :href="$prismic.asLink(link.link)"
            >{{ $prismic.asText(link.link_text) }}</a
          >
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleProductDescription',
  props: {
    description: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
