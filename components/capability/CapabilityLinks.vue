<template>
  <div class="capabilities-links">
    <nuxt-link
      v-for="cap in capability"
      :key="cap.id"
      :to="
        localePath({
          name: 'division-category',
          params: {
            division: 'contract-development-manufacturing',
            category: cap.uid,
          },
        })
      "
      >{{ $prismic.asText(cap.data.name) }}</nuxt-link
    >
  </div>
</template>

<script>
export default {
  name: 'CapabilityLinks',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  async fetch() {
    try {
      const currentLocale = await this.$i18n.locales.filter(
        (lang) => lang.code === this.$i18n.locale
      )[0]
      const query = await this.$prismic.api.query(
        [
          this.$prismic.predicates.at('document.type', 'product_category'),
          this.$prismic.predicates.at('document.tags', ['capability']),
        ],
        {
          orderings: '[document.first_publication_date]',
          lang: currentLocale.iso.toLowerCase(),
        }
      )
      console.log(query.results[0].data.name[0].text)
      this.links = query.results
    } catch (e) {
      console.log(e)
    } finally {
    }
  },
  data() {
    return {
      links: [],
    }
  },
  computed: {
    capability() {
      return this.links.filter((el) => el.data.name[0].text !== this.title)
    },
  },
}
</script>
