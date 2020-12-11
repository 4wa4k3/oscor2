<template>
  <div class="container">
    <section class="landing-hero">
      <div class="landing-hero__video-wrapper">
        <video ref="vid" playsinline autoplay loop muted preload="auto">
          <source
            src="https://player.vimeo.com/external/463407664.hd.mp4?s=1229b514c313168e2317de55388ff23b170b0bc4&profile_id=175"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
    <template v-for="p in pillar">
      <Pillar :key="`pillar-${p.id}`" :pillar="p" />
    </template>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Pillar from '~/components/Pillar'
gsap.registerPlugin(ScrollTrigger)

export default {
  layout: 'home',
  components: {
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

  mounted() {
    // const pillar = document.querySelector('.landing-pillar')
    const tl = gsap.timeline({})
    // console.log(document.querySelector('.landing-pillar div h1'))

    tl.to(document.querySelector('.landing-pillar div h1'), {
      scrollTrigger: {
        trigger: document.querySelector('.landing-pillar div'),
        markers: false,
        start: 'top 75%',
        bottom: 'bottom 25%',
        scrub: 0.2,
        toggleActions: 'restart pause reverse reset',
      },
      duration: 0.8,
      y: '50vw',
      ease: 'linear',
    })

    this.heroVid()
    window.addEventListener('resize', this.heroVid)
  },
  methods: {
    heroVid() {
      const vid = this.$refs.vid
      vid.style.cssText = `left:50%; min-height: 100%; min-width:100%; position:absolute; top:50%; transform:translate(-50%, -50%);`
      const parentDiv = vid.parentNode
      parentDiv.style.cssText = `position:relative; width:100%; height:${window.innerHeight}px;`
    },
  },
}
</script>
