<template>
  <div class="container">
    <div class="quality-policy-content-container" style="min-height: 100vh">
      <div class="quality-policy-content-hero">
        <h1>{{ $prismic.asText(docs.title) }}</h1>
        <hr />
      </div>
      <div class="quality-policy-container">
        <div
          class="quality-policy-text"
          v-html="$prismic.asHtml(docs.text)"
        ></div>
      </div>
    </div>
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
  head({ $prismic }) {
    return {
      title: $prismic.asText(this.docs.title),
    }
  },
}
</script>
