<i18n>
{
  "en": {
    "results": "Search Results For"
  }, 
  "es": {
    "results": "Resultados de Búsqueda"
  }, 
  "de": {
    "results": "Suchergebnisse für"
  }
}
</i18n>
<template>
  <div class="container">
    <div class="division-content-container">
      <section class="division-content-hero search-hero">
        <div class="division-content-heading search-heading">
          <h1>
            {{ $t('results') }}: <span>{{ searchTerm }}</span>
          </h1>
          <hr />
        </div>
        <div class="division-content">
          <SearchResult :results="results" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SearchResult from '~/components/search/SearchResult'
export default {
  name: 'SearchPage',
  layout: 'DivisionLight',
  components: {
    SearchResult,
  },
  async asyncData({ $prismic, app, error, query }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0]
    const searchResults = await $prismic.api.query(
      [
        $prismic.predicates.any('document.type', [
          'single_product',
          'single_component',
        ]),
        // $prismic.predicates.at('document.type', 'single_component'),
        // $prismic.predicates.at('document.type', 'product_category'),
        $prismic.predicates.fulltext('document', query.search),
      ],
      {
        lang: currentLocale.iso.toLowerCase(),
      }
    )
    if (searchResults) {
      return {
        searchResults: searchResults.results || searchResults,
        searchTerm: query.search,
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  computed: {
    results() {
      const results = this.searchResults
      return results
    },
  },
  head() {
    return {
      title: 'Search',
    }
  },
}
</script>
