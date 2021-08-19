<template>
  <div class="container">
    <HeroVideo :video="docs.body[0].primary.video_link[0].text" />
    <template v-for="(p, i) in pillar">
      <Pillar :key="`pillar-${i}`" :pillar="p" />
    </template>
    <NewsSection :news="newsArticles" :videos="videoCards" />
  </div>
</template>

<script>
import Pillar from '~/components/Pillar'
import HeroVideo from '~/components/HeroVideo'
import NewsSection from '~/components/NewsSection'

export default {
  layout: 'home',
  name: 'FrontPage',
  components: {
    HeroVideo,
    Pillar,
    NewsSection,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0]
    const doc = await $prismic.api.getSingle('home', {
      lang: currentLocale.iso.toLowerCase(),
    })

    const news = await $prismic.api.query(
      [
        $prismic.predicates.at('document.type', 'news_article'),
        $prismic.predicates.at('document.tags', ['new article']),
      ],
      {
        orderings: '[document.last_publication_date desc]',
        fetch: ['news_article.title', 'news_article.image'],
        pageSize: 2,
        lang: currentLocale.iso.toLowerCase(),
      }
    )

    if (doc) {
      return {
        docs: doc.data || doc,
        news,
        pillar: doc.data.section,
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

  data() {
    return {
      docs: [],
      section: [],
      pillar: [
        // {
        //   id: 1,
        //   video: 'movie_1',
        //   image: '/static/images/0001.png',
        // },
        // {
        //   id: 2,
        //   video: 'movie_2',
        //   image: '~static/images/0001.png',
        // },
        // {
        //   id: 3,
        //   video: 'movie_3',
        //   image: '~static/images/0001.png',
        // },
        // {
        //   id: 4,
        //   video: 'movie_4',
        //   image: '~static/images/0001.png',
        // },
      ],
    }
  },
  computed: {
    newsArticles() {
      const news = this.news.results
      // const nA = news.filter((n) => n.data.image.url)
      return news
    },
    videoCards() {
      const videoCards = this.docs.body.filter(
        (v) => v.slice_type === 'video_card'
      )
      return videoCards
    },
  },

  mounted() {},
  methods: {},
}
</script>
