<template>
  <div class="container">
    <div
      v-if="this.$route.params.division === 'finished-medical-devices'"
      class="division-content-container"
    >
      <PageTitle :title="title" />
      <section class="division-content">
        <AltProductCards :cards="cards" />
      </section>
    </div>
    <!-- <div
      v-else-if="this.$route.params.division === 'medical-components'"
      class="division-content-container"
    >
      <PageTitle :title="title" />
      <section class="division-content">
        <AltProductCards :cards="cards" />
      </section>
    </div> -->
    <div
      v-else-if="
        this.$route.params.division === 'contract-development-manufacturing'
      "
    >
      <CapabilityHeroImg :capabilities-img="capabilitiesImg" />
      <section class="capabilities-content-container">
        <CapabilityLinks :title="title[0].text" />
        <CapabilityTitle :title="title" :description="description" />
      </section>
    </div>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle'
// import AltProductCards from '~/components/AltProductCards'
import CapabilityTitle from '~/components/capability/CapabilityTitle'
import CapabilityHeroImg from '~/components/capability/CapabilityHeroImg'
import CapabilityLinks from '~/components/capability/CapabilityLinks'
export default {
  layout: 'DivisionLight',
  name: 'Category',
  components: {
    PageTitle,
    // AltProductCards,
    CapabilityTitle,
    CapabilityHeroImg,
    CapabilityLinks,
  },
  async asyncData({ $prismic, params, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0]
    const doc = await $prismic.api.getByUID(
      'product_category',
      params.category,
      {
        lang: currentLocale.iso.toLowerCase(),
      }
    )

    if (doc) {
      return {
        docs: doc.data || doc,
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  computed: {
    title() {
      const title = this.docs.name
      if (title) {
        return title
      } else {
        return false
      }
    },
    cards() {
      const cards = this.docs.body

      if (cards) {
        return cards
      } else {
        return false
      }
    },
    capabilitiesImg() {
      const capabilitiesImg = this.docs.body.find(
        (el) => el.slice_type === 'capability'
      )
      if (capabilitiesImg) {
        return capabilitiesImg.primary.image.url
      } else {
        return false
      }
    },
    description() {
      const description = this.cards[0].primary.description
      return description
    },
  },
  head({ $prismic }) {
    return {
      title: $prismic.asText(this.title),
    }
  },
}
</script>
