<i18n>
{
  "en": {
    "home": "Home"
  }, 
  "es": {
    "home": "Inicio"
  }, 
  "de": {
    "home": "Startseite"
  }
}
</i18n>
<template>
  <nav ref="nav" class="side-nav">
    <button class="side-nav--menu-close-btn" @click="navOpen">&times;</button>
    <div class="side-nav--link" @click="navOpen">
      <nuxt-link :to="localePath('/')">{{ $t('home') }}</nuxt-link>
    </div>
    <DivisionLink v-for="(lvl, i) in division" :key="i" :lvl="lvl" />
    <NewsLink v-for="n in news" :key="n.primary.link_text" :n="n" />
    <CompanyLink
      v-for="comp in company"
      :key="comp.primary.link_text"
      :comp="comp"
    />
    <CareersLink
      v-for="car in careers"
      :key="car.primary.link_text"
      :car="car"
    />
  </nav>
  <!-- <div ref="lvl1" :key="i" class="side-nav--link">
    <nuxt-link
      :to="
        localePath({
          name: 'division',
          params: { division: lvl.primary.nav_link.uid },
        })
      "
      >{{ lvl.primary.link_text }}</nuxt-link
    ><span
      v-if="lvl.items[0].second_level_link_name[0]"
      ref="moreBtn"
      class="side-nav--more-btn"
      @click="lvl2Open(i)"
      >+</span
    >
    <div
      v-if="lvl.items[0].second_level_link_name[0]"
      ref="lvl2"
      class="side-nav--lvl2"
    >
      <span ref="backBtn" class="side-nav--back-btn" @click="lvl2Open(i)"
        >&larr;</span
      >
      <template v-for="lvl2 in lvl.items">
        <nuxt-link
          :key="lvl2.second_lvl_link.id"
          :to="
            localePath({
              name: 'division-category',
              params: {
                division: lvl.primary.nav_link.uid,
                category: lvl2.second_lvl_link.uid,
              },
            })
          "
          >{{ $prismic.asText(lvl2.second_level_link_name) }}</nuxt-link
        >
      </template>
    </div>
  </div> -->
</template>

<script>
import { mapGetters } from 'vuex'
import DivisionLink from '~/components/navigation/DivisionLink'
import NewsLink from '~/components/navigation/NewsLink'
import CompanyLink from '~/components/navigation/CompanyLink'
import CareersLink from '~/components/navigation/CareersLink'
export default {
  name: 'Navigation',
  components: {
    DivisionLink,
    NewsLink,
    CompanyLink,
    CareersLink,
  },
  async fetch() {
    try {
      const currentLocale = await this.$i18n.locales.filter(
        (lang) => lang.code === this.$i18n.locale
      )[0]
      const query = await this.$prismic.api.query(
        this.$prismic.predicates.at('document.type', 'navigation'),
        {
          lang: currentLocale.iso.toLowerCase(),
        }
      )
      this.menuLinks = query.results[0].data.body
    } catch (e) {
      console.log(e)
    } finally {
    }
  },
  data() {
    return {
      menuLinks: [],
    }
  },
  computed: {
    ...mapGetters({
      nav: 'navs/navActive',
    }),
    lvlOne() {
      return this.menuLinks.filter((lvl) => lvl.slice_type === '1st_level')
    },
    division() {
      return this.menuLinks.filter(
        (div) => div.primary.link_type[0].text === 'division'
      )
    },
    news() {
      return this.menuLinks.filter(
        (n) => n.primary.link_type[0].text === 'news'
      )
    },
    company() {
      return this.menuLinks.filter(
        (comp) => comp.primary.link_type[0].text === 'company'
      )
    },
    careers() {
      return this.menuLinks.filter(
        (car) => car.primary.link_type[0].text === 'careers'
      )
    },
    lvlTwo() {
      return this.menuLinks.filter((lvl) => lvl.slice_type === '2nd_level')
    },
  },
  watch: {
    '$route.query': '$fetch',
    '$store.commit': 'navs/navOpen',
  },
  methods: {
    navOpen() {
      this.$store.commit('navs/navOpen')
    },

    // lvl2Open() {
    //   const lvl2Open = this.$refs.lvl2

    //   lvl2Open.forEach((lvl) => {
    //     console.log(this.el)
    //     if (lvl.classList.contains('nav-open')) {
    //       lvl.classList.remove('nav-open')
    //     } else {
    //       lvl.classList.add('nav-open')
    //     }
    //   })
    // },
  },
}
</script>
