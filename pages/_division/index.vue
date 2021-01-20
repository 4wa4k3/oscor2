<template>
  <div class="container">
    <div class="division-content-container">
      <section class="division-content-hero">
        <div class="division-content-heading">
          <h1>{{ $prismic.asText(pillar.title) }}</h1>
          <hr />
        </div>
      </section>
      <section class="division-content">
        <ProductCards :cards="pillar.product_categories" />
      </section>
    </div>
  </div>
</template>

<script>
import ProductCards from '~/components/ProductCards'
export default {
  layout: 'DivisionLight',
  name: 'Division',
  components: {
    ProductCards,
  },
  async asyncData({ $prismic, params, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0]
    const doc = await $prismic.api.getByUID('page', params.division, {
      lang: currentLocale.iso.toLowerCase(),
    })

    if (doc) {
      return {
        docs: doc.data || doc,
        pillar: doc.data,
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data() {
    return {
      docs: [],
      pillar: [],
    }
  },
}
</script>
