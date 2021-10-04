<template>
  <div class="container">
    <HeroTitle :title="docs.title" :img="docs.hero_image" />
    <ExSummary :title="exsum.primary.subtitle" :summary="exsum.items" />
    <History :history="history" />
    <Facilities :facilities="facilities" />
  </div>
</template>

<script>
import HeroTitle from '~/components/company/HeroTitle'
import ExSummary from '~/components/company/ExSummary'
import History from '~/components/company/History'
import Facilities from '~/components/company/Facilities'
export default {
  layout: 'home',
  name: 'Company',
  components: {
    HeroTitle,
    ExSummary,
    History,
    Facilities,
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0]
    const doc = await $prismic.api.getSingle('company', {
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
  computed: {
    exsum() {
      const exsum = this.docs.body.find(
        (el) => el.slice_type === 'executive_summary'
      )
      if (exsum) {
        return exsum
      } else {
        return false
      }
    },
    history() {
      const history = this.docs.body.find((el) => el.slice_type === 'history')
      if (history) {
        return history.primary
      } else {
        return false
      }
    },
    timeline() {
      const timeline = this.docs.body.find((el) => el.slice_type === 'timeline')
      if (timeline) {
        return timeline
      } else {
        return false
      }
    },
    facilities() {
      const facilities = this.docs.body.find(
        (el) => el.slice_type === 'facilities'
      )
      if (facilities) {
        return facilities
      } else {
        return false
      }
    },
  },
  head({ $prismic }) {
    return {
      title: $prismic.asText(this.docs.title),
    }
  },
}
</script>
