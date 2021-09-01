<template>
  <section class="news-front-section">
    <div class="news-front-section-container">
      <template v-for="(video, i) in videos"
        ><HomeVideoCards
          :key="i"
          :videos-link="$prismic.asText(video.primary.video_link)"
          :videos-poster="video.primary.video_poster.url"
      /></template>
      <div v-for="n in news" :key="n.id" class="news-front-section-card">
        <div class="news-front-section--inner-wrap">
          <nuxt-link
            :to="
              localePath({
                name: 'news-article',
                params: {
                  news,
                  article: n.uid,
                },
              })
            "
            ><img :src="n.data.image.url" alt=""
          /></nuxt-link>
          <!-- <h3>{{ $prismic.asText(n.data.title) }}</h3> -->
        </div>
        <div class="news-front-section--inner-link-wrap">
          <nuxt-link
            :to="
              localePath({
                name: 'news-article',
                params: {
                  news,
                  article: n.uid,
                },
              })
            "
            >READ MORE</nuxt-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomeVideoCards from '~/components/HomeVideoCards'
export default {
  name: 'NewsSection',
  components: {
    HomeVideoCards,
  },
  props: {
    news: {
      type: Array,
      default() {
        return []
      },
    },
    videos: {
      type: Array,
      default() {
        return []
      },
    },
  },
  head() {
    return {
      title: 'Oscor | Innovative Medical Device Solutions',
    }
  },
}
</script>
