<template>
  <div class="container">
    <h1>{{ $prismic.asText(docs.title) }}</h1>
  </div>
</template>

<script>
export default {
  layout: 'DivisionLight',
  name: 'QualityPolicy',
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0]
    const doc = await $prismic.api.getSingle('quality_policy', {
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
  data() {
    return {
      docs: [],
    }
  },
}
</script>
