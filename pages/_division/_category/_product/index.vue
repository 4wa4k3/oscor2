<template>
  <div class="container">
    <div class="division-content-container">
      <Title :title="title" :description="description" :subtitle="subtitle" />
    </div>
  </div>
</template>

<script>
import Title from '~/components/single_product/Title'
export default {
  layout: 'DivisionLight',
  name: 'SingleProductPage',
  components: {
    Title,
  },
  async asyncData({ $prismic, params, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0]
    const doc = await $prismic.api.getByUID('single_product', params.product, {
      lang: currentLocale.iso.toLowerCase(),
    })

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
      const title = this.docs.product_name
      if (title) {
        return title
      } else {
        return false
      }
    },

    subtitle() {
      const subtitle = this.docs.subtitle
      if (subtitle) {
        return subtitle
      } else {
        return false
      }
    },

    description() {
      const description = this.docs.description
      if (description) {
        return description
      } else {
        return false
      }
    },
  },
}
</script>
