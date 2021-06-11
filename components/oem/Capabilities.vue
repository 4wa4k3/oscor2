<template>
  <section class="division-content-capabilities-container">
    <div class="division-content-capabilities-title">
      <h2>{{ $prismic.asText(title) }}</h2>
      <hr />
    </div>
    <div class="division-content-capabilities-cards-container">
      <template v-for="(card, i) in cards">
        <nuxt-link
          :key="i"
          class="division-content-capabilities-cards-card"
          :to="
            localePath({
              name: 'division-category',
              params: {
                division: $route.params.division,
                category: card.link.uid,
              },
            })
          "
          ><div class="division-content-capabilities-cards-card__container">
            <img :src="card.image.url" alt="" />
            <h3>{{ $prismic.asText(card.name) }}</h3>
          </div>
        </nuxt-link>
      </template>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Capabilities',
  props: {
    title: {
      type: Array,
      default() {
        return []
      },
    },
    cards: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
