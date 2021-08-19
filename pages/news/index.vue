<template>
  <div class="container">
    <div class="news-content-container">
      <div class="news-content-hero">
        <h1>{{ $prismic.asText(docs.title) }}</h1>
        <hr />
      </div>
      <div class="news-events-container">
        <div class="news-articles-container">
          <template v-for="article in articles">
            <div
              v-if="article.data.image.url"
              :key="article.id"
              class="news-article-card"
            >
              <div class="news-article-card-image-container">
                <img :src="article.data.image.url" alt="" />
              </div>
              <h2>{{ $prismic.asText(article.data.title) }}</h2>
              <nuxt-link
                :to="
                  localePath({
                    name: 'news-article',
                    params: {
                      news,
                      article: article.uid,
                    },
                  })
                "
                >read more</nuxt-link
              >
            </div>
          </template>
        </div>
        <div class="news-tradeshows-container">
          <h2>{{ new Date().getFullYear() }} Trade Shows</h2>
          <template v-for="show in tradeshows">
            <div
              v-if="
                new Date(show.data.body[0].primary.to_date).getTime() >
                new Date().getTime()
              "
              :key="show.id"
              class="news-tradeshow-card"
            >
              <h3>{{ $prismic.asText(show.data.body[0].primary.name) }}</h3>
              <div class="news-tradeshow-card-info">
                <span>{{
                  $prismic.asText(show.data.body[0].primary.location)
                }}</span>
                <span>
                  {{
                    $prismic.asText(show.data.body[0].primary.from_date)
                  }}</span
                >
                <span
                  >Booth #{{
                    $prismic.asText(show.data.body[0].primary.booth)
                  }}</span
                >
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Company',
  layout: 'DivisionLight',
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0]
    const doc = await $prismic.api.getSingle('news', {
      lang: currentLocale.iso.toLowerCase(),
    })

    const news = await $prismic.api.query(
      [$prismic.predicates.at('document.type', 'news_article')],
      {
        orderings: '[document.last_publication_date desc]',
        lang: currentLocale.iso.toLowerCase(),
      }
    )

    const tradeshows = await $prismic.api.query(
      [
        $prismic.predicates.at('document.type', 'news_article'),
        $prismic.predicates.at('document.tags', ['tradeshow']),
      ],
      {
        orderings: '[document.first_publication_date]',
        lang: currentLocale.iso.toLowerCase(),
      }
    )

    if (doc) {
      return {
        docs: doc.data || doc,
        news,
        tradeshows: tradeshows.results,
        pillar: doc.data.section,
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data() {
    return {
      docs: [],
      news: {},
      tradeshows: {},
    }
  },
  computed: {
    articles() {
      return this.news.results
    },
    // events() {
    //   // const events = this.articles.filter((e) => e.tags[0] === 'tradeshow')
    //   // return events
    //   // const events = this.tradeshows.filter(
    //   //   (e) => e.data.body[0].slice_type === 'date'
    //   // )

    //   // return events.data.body[0]
    //   return this.articles.data.body[0]
    // },
  },
  head({ $prismic }) {
    return {
      title: $prismic.asText(this.docs.title),
    }
  },
}
</script>
