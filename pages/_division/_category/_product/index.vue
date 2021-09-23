<template>
  <div class="container">
    <template v-if="$route.params.division === 'finished-medical-devices'">
      <Title
        :title="title"
        :image="image"
        :subtitle="subtitle"
        :class="{ 'no-right-pad': docs.no_right_padding }"
      />

      <Description :description="description" />
      <Carousel
        v-if="carousel"
        :title="carousel.primary.title"
        :slides="carousel.items"
      />
      <Video
        v-if="video"
        :link="video.primary.video_link"
        :poster="video.primary.poster"
      />
      <template v-if="configurations.length">
        <Configurations :configs="configurations" />
      </template>
      <ProductTable
        v-if="tables.length > 0"
        :section-title="sectionTitle"
        :rows="rows"
        :tables="tables"
      />
    </template>
    <!-- <template v-if="$route.params.division === 'medical-components'">
      <div class="division-content-container">
        <CompTitle
          :title="title"
          :subtitle="subtitle"
          :description="description"
          :image="image"
        />
      </div>
    </template> -->
  </div>
</template>

<script>
import Title from '~/components/single_product/Title'
import Description from '~/components/single_product/Description'
import Carousel from '~/components/single_product/Carousel'
import Video from '~/components/single_product/Video'
import Configurations from '~/components/single_product/Configurations'
import ProductTable from '~/components/single_product/ProductTable'
// import CompTitle from '~/components/single_component/CompTitle'
export default {
  layout: 'DivisionLight',
  name: 'SingleProductPage',
  components: {
    Title,
    Description,
    Carousel,
    Video,
    Configurations,
    ProductTable,
    // CompTitle,
  },
  async asyncData({ $prismic, params, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0]
    const doc = await $prismic.api.getByUID('single_product', params.product, {
      lang: currentLocale.iso.toLowerCase(),
    })

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
      const title = this.docs.product_name
      if (title) {
        return title
      } else {
        return false
      }
    },

    subtitle() {
      const subtitle = this.docs.subtitle
      if (subtitle) {
        return subtitle
      } else {
        return false
      }
    },

    image() {
      const image = this.docs.intro_image
      if (image) {
        return image
      } else {
        return false
      }
    },
    description() {
      const description = this.docs.body.find(
        (el) => el.slice_type === 'description'
      )
      if (description) {
        return description
      } else {
        return false
      }
    },
    carousel() {
      const carousel = this.docs.body.find((el) => el.slice_type === 'carousel')
      if (carousel) {
        return carousel
      } else {
        return false
      }
    },

    video() {
      const link = this.docs.body.find((el) => el.slice_type === 'video')
      if (link) {
        return link
      } else {
        return false
      }
    },
    configurations() {
      const configs = this.docs.body.filter(
        (el) => el.slice_type === 'configurations'
      )
      return configs
    },
    sectionTitle() {
      const sectionTitle = this.docs.section_name
      if (sectionTitle) {
        return sectionTitle
      } else {
        return false
      }
    },
    tables() {
      const tables = this.docs.body1.filter(
        (el) => el.slice_type === 'table_head'
      )
      if (tables) {
        return tables
      } else {
        return false
      }
    },
    rows() {
      const rows = this.docs.body1.filter((el) => el.slice_type === 'row')
      if (rows) {
        return rows
      } else {
        return false
      }
    },
  },
  head({ $prismic }) {
    return {
      title: $prismic.asText(this.title).replace(/(<([^>]+)>)/gi, ''),
    }
  },
}
</script>
