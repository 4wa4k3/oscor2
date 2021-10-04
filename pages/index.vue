<template>
  <div class="container">
    <HeroVideo :video="docs.body[0].primary.video_link[0].text" />
    <template v-for="(p, i) in pillar">
      <Scene
        :key="i"
        :pillar-info="pillar[i]"
        :model-info="modelInfo.scene[i]"
      />
    </template>
    <NewsSection :news="newsArticles" :videos="videoCards" />
  </div>
</template>

<script>
import HeroVideo from '~/components/HeroVideo'
import NewsSection from '~/components/NewsSection'
import Scene from '~/components/three/Scene'

export default {
  layout: 'home',
  name: 'FrontPage',
  components: {
    HeroVideo,
    Scene,
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
      pillar: [],
      modelInfo: {
        scene: [
          {
            color: '#cac6ca',
            file: 'gltf4/adelante.gltf',
            rotationY: 0.65,
            wireframe: false,
          },
          {
            color: '#112b52',
            file: 'gltf5/adelante.gltf',
            rotationY: 2,
            wireframe: true,
          },
        ],
      },
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
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.docs.meta_description[0].text,
        },
      ],
    }
  },
}
</script>
