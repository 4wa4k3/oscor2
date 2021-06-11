<template>
  <div class="container">
    <div class="division-content-container">
      <h1>{{ $prismic.asText(docs.title) }}</h1>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'DivisionLight',
  name: 'Company',
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0]
    const doc = await $prismic.api.getSingle('news', {
      lang: currentLocale.iso.toLowerCase(),
    })

    if (doc) {
      return {
        docs: doc.data || doc,
        pillar: doc.data.section,
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
