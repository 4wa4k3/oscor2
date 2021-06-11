<template>
  <section class="single-component-content-hero">
    <div class="single-component-content-container">
      <div class="single-component-content-heading">
        <h1 v-html="$prismic.asText(title)"></h1>
        <hr />
        <h2 v-if="$prismic.asText(subtitle)">
          {{ $prismic.asText(subtitle) }}
        </h2>
        <div
          class="single-component-description-container"
          v-html="$prismic.asHtml(description.primary.description1)"
        ></div>
        <h2>Pricing Information</h2>
        <div class="single-component-quantity-container">
          <label for="quantity">Price (Units)</label>
          <select ref="quantity" name="quantity">
            <option value="15">$180 15 Units</option>
            <option value="250">$3000 250 Units</option>
            <option value="500">$6000 500 Units</option>
          </select>
        </div>

        <button
          ref="button"
          class="snipcart-add-item single-component-button"
          :data-item-id="$prismic.asText(title)"
          data-item-price="12.00"
          data-item-stackable="never"
          :data-item-url="$route.fullPath"
          :data-item-description="
            $prismic.asText(description.primary.description1)
          "
          :data-item-name="$prismic.asText(title)"
        >
          Add to Cart
        </button>
      </div>
      <div class="single-content-image-container">
        <img :src="image.url" :alt="$prismic.asText(title)" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SingleComponentPage',
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
      type: Object,
      default() {
        return {}
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
    const qty = this.$refs.quantity
    const btn = this.$refs.button
    btn.setAttribute('data-item-quantity', qty.value)
    btn.setAttribute('data-item-price', Math.round(12))
    qty.addEventListener('change', () => {
      btn.setAttribute('data-item-quantity', qty.value)
    })
  },
}
</script>
