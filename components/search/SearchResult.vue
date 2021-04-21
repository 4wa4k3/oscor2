<template>
  <section class="search-results-container">
    <template v-for="result in results">
      <div
        v-if="result.type === 'single_product'"
        :key="result.id"
        ref="results"
        class="search-result"
      >
        <template v-if="result.data.searchpath[0]">
          <nuxt-link
            :to="
              localePath({
                name: 'division-category-product',
                params: {
                  division: result.data.searchpath[0].division.uid,
                  category: result.data.searchpath[0].category.uid,
                  product: result.uid,
                },
              })
            "
            ><h2 v-html="$prismic.asText(result.data.product_name)"></h2
          ></nuxt-link>
        </template>
        <p>
          {{ $prismic.asText(result.data.body[0].primary.description1) }}
        </p>
      </div>
      <!-- <div
        v-if="result.type === 'single_component'"
        :key="result.id"
        ref="results"
        class="search-result"
      >
        <template v-if="result.data.searchpath[0]">
          <nuxt-link
            v-if="
              result.data.searchpath[0].division.uid === 'medical-components'
            "
            :to="
              localePath({
                name: 'division-category-component',
                params: {
                  division: result.data.searchpath[0].division.uid,
                  category: result.data.searchpath[0].category.uid,
                  component: result.uid,
                },
              })
            "
            ><h2 v-html="$prismic.asText(result.data.product_name)"></h2
          ></nuxt-link>
        </template>
        <p>
          {{ $prismic.asText(result.data.body[0].primary.description1) }}
        </p>
      </div> -->
    </template>
  </section>
</template>

<script>
import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
export default {
  name: 'SearchResult',
  props: {
    results: {
      type: Array,
      default() {
        return []
      },
    },
  },
  mounted() {
    const results = this.$refs.results
    const targets = gsap.utils.toArray(results)
    const tl = gsap.timeline({})

    if (results) {
      results.forEach((result) => {
        const link = result.children[0]
        const title = link.children[0]
        const sup = title.getElementsByTagName('sup')

        if (sup) {
          sup.forEach((elem) => {
            elem.style.fontSize = '1.8rem'
          })
        }
      })
    }

    tl.from(targets, {
      duration: 1,
      ease: 'linear',
      x: -100,
      opacity: 0,
      stagger: 0.3,
    })
  },
}
</script>
