<template>
  <div class="container">
    <template
      v-if="
        this.$route.params.division === 'contract-development-manufacturing'
      "
    >
      <HeroVideo v-if="video" :video="$prismic.asText(video)" />
      <PageIntro :intro="intro" />
      <Capabilities :title="title" :cards="cards" />
    </template>
    <div
      v-if="this.$route.params.division === 'finished-medical-devices'"
      class="division-content-container"
    >
      <PageTitle :title="title" />
      <section v-if="cards" class="division-content">
        <ProductCards :cards="cards" />
      </section>
    </div>
    <div
      v-if="this.$route.params.division === 'prototype-development'"
      class="division-content-container"
    >
      <PageTitle :title="title" />
      <section v-if="cards" class="division-content">
        <ProductCards :cards="cards" />
      </section>
    </div>
    <div
      v-if="this.$route.params.division === 'medical-components'"
      class="division-content-container"
    >
      <PageTitle :title="title" />
      <section v-if="cards" class="division-content">
        <ProductCards :cards="cards" />
      </section>
    </div>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle'
import HeroVideo from '~/components/HeroVideo'
import PageIntro from '~/components/PageIntro'
import ProductCards from '~/components/ProductCards'
import Capabilities from '~/components/oem/Capabilities'
export default {
  layout: 'DivisionLight',
  name: 'Division',
  components: {
    PageTitle,
    HeroVideo,
    PageIntro,
    ProductCards,
    Capabilities,
  },
  async asyncData({ $prismic, params, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0]
    const doc = await $prismic.api.getByUID('page', params.division, {
      lang: currentLocale.iso.toLowerCase(),
    })

    const search = await $prismic.predicates.fulltext('page', 'destino')

    if (doc) {
      return {
        docs: doc.data || doc,
        search,
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  computed: {
    title() {
      const title = this.docs.body.find((t) => t.slice_type === 'title')
      if (title) {
        return title.primary.page_title
      } else {
        return false
      }
    },
    video() {
      const video = this.docs.body.find(
        (vid) => vid.slice_type === 'hero_video'
      )
      if (video) {
        return video.primary.video_link
      } else {
        return false
      }
    },
    intro() {
      const intro = this.docs.body.find((i) => i.slice_type === 'intro')
      if (intro) {
        return intro.primary
      } else {
        return false
      }
    },
    cards() {
      const cards = this.docs.body.find((card) => card.slice_type === 'cards')

      if (cards) {
        return cards.items
      } else {
        return false
      }
    },
  },
}
</script>
