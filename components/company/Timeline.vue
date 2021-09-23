<template>
  <div ref="container" class="company-timeline-container company-section">
    <div class="">
      <!-- single-description-container -->
      <div class="company-title">
        <h2>{{ $prismic.asText(timeline.primary.subtitle) }}</h2>
        <hr />
      </div>
      <div ref="timelineCont" class="company-timeline-content-container">
        <ol ref="timeline" class="company-timeline">
          <template v-for="(moment, i) in timeline.items">
            <li ref="moment" :key="i" class="company-timeline-moment">
              <div
                ref="momentDiv"
                :class="{
                  future: checkYear(parseInt($prismic.asText(moment.event))),
                }"
              >
                <time ref="momentYear">{{
                  $prismic.asText(moment.event)
                }}</time>
                <figure :class="{ float: moment.float }">
                  <img v-if="moment.image.url" :src="moment.image.url" alt="" />
                </figure>
                <span v-html="$prismic.asHtml(moment.text)"></span>
              </div>
            </li>
          </template>
          <li></li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
export default {
  name: 'Timeline',
  props: {
    timeline: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    checkY(i) {
      this.checkYear(i)
    },
  },
  mounted() {
    const moments = gsap.utils.toArray(this.$refs.moment)
    const momentDiv = this.$refs.momentDiv
    // const timelineCont = this.$refs.timelineCont
    const timeline = this.$refs.timeline
    const container = this.$refs.container
    let counter = 0

    // momentDiv.forEach((moment) => {
    //   if (counter < moment.offsetHeight) {
    //     counter = moment.offsetHeight
    //   }
    //   moment.style.height = `${counter}px`
    // })

    // console.log(moments)

    for (let i = 0; i < momentDiv.length; i++) {
      if (counter < momentDiv[i].offsetHeight) {
        counter = momentDiv[i].offsetHeight
      }
      momentDiv[i].style.height = `${counter / 16}em`
    }

    gsap.to(moments, {
      xPercent: -100 * (moments.length - 1),
      // x: () =>
      //   `-${timelineCont.scrollWidth - document.documentElement.clientWidth}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        markers: false,
        pin: true,
        scrub: 1,
        snap: 1 / (moments.length - 1),
        end: () => `+=${timeline.offsetWidth}`,
      },
    })
  },
  methods: {
    checkYear(i) {
      const year = new Date().getFullYear()
      if (i > year) {
        return true
      }
    },
  },
}
</script>
