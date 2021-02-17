<template>
  <div class="container">
    <div class="division-content-container">
      <PageTitle :title="title" />
      <section class="division-content">
        <AltProductCards :cards="cards" />
      </section>
    </div>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle'
import AltProductCards from '~/components/AltProductCards'
export default {
  layout: 'DivisionLight',
  name: 'Category',
  components: {
    PageTitle,
    AltProductCards,
  },
  async asyncData({ $prismic, params, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0]
    const doc = await $prismic.api.getByUID(
      'product_category',
      params.category,
      {
        lang: currentLocale.iso.toLowerCase(),
      }
    )

    if (doc) {
      return {
        docs: doc.data || doc,
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  computed: {
    title() {
      const title = this.docs.name
      if (title) {
        return title
      } else {
        return false
      }
    },
    cards() {
      const cards = this.docs.body

      if (cards) {
        return cards
      } else {
        return false
      }
    },
  },
}
</script>
