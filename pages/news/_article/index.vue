<template>
  <div class="container">
    <div class="news-content-container">
      <div class="news-article-container">
        <img :src="docs.image.url" alt="" />
        <h1>{{ $prismic.asText(docs.title) }}</h1>
        <hr />
        <div
          class="news-article-content"
          v-html="$prismic.asHtml(docs.text)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsArticle',
  layout: 'DivisionLight',
  async asyncData({ $prismic, params, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0]
    const doc = await $prismic.api.getByUID('news_article', params.article, {
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
  head({ $prismic }) {
    return {
      title: $prismic.asText(this.docs.title),
    }
  },
}
</script>
