<template>
  <div class="container">
    <HeroVideo :video="docs.body[0].primary.video_link[0].text" />
    <template v-for="(p, i) in pillar">
      <Pillar :key="`pillar-${i}`" :pillar="p" />
    </template>
  </div>
</template>

<script>
import Pillar from '~/components/Pillar'
import HeroVideo from '~/components/HeroVideo'

export default {
  layout: 'home',
  name: 'FrontPage',
  components: {
    HeroVideo,
    Pillar,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0]
    const doc = await $prismic.api.getSingle('home', {
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

  mounted() {},
  methods: {},
}
</script>
