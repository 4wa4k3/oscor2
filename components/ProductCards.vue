<template>
  <section class="product-cards-section">
    <template v-for="(card, i) in cards">
      <div
        :key="i"
        class="product-cards-container"
        :style="{ backgroundColor: card.color }"
      >
        <div class="product-cards-circle"></div>
        <div
          class="product-cards-content-container"
          :style="{
            backgroundImage: `url(${card.product_category_image.url})`,
          }"
        ></div>
        <div class="product-cards-content-container-content">
          <h2>{{ $prismic.asText(card.product_category_title) }}</h2>
          <div class="french-sizes-container"></div>
          <nuxt-link to="#">{{
            $prismic.asText(card.product_category_link_text)
          }}</nuxt-link>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
export default {
  name: 'ProductCards',
  props: {
    cards: {
      type: Array,
      default() {
        return {}
      },
    },
  },
}
</script>
