<template>
  <div ref="container" class="single-carousel-container">
    <div class="single-carousel-title">
      <h2>{{ $prismic.asText(title) }}</h2>
      <hr />
    </div>
    <div ref="mask" class="single-carousel-slides-container">
      <template v-for="(slide, i) in slides">
        <div :key="i" class="single-carousel-slide">
          <img :src="slide.slide.url" alt="" />
          <div class="single-carousel-slide-text">
            <p>{{ $prismic.asText(slide.slide_text) }}</p>
          </div>
        </div>
      </template>
    </div>
    <div class="single-carousel-controls">
      <button ref="prev" class="single-carousel-controls__prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36.529"
          height="60.882"
          viewBox="0 0 36.529 60.882"
        >
          <path
            id="prev-chevron"
            d="M34.745,34.746,10.393,59.1a6.088,6.088,0,1,1-8.609-8.609L21.832,30.441,1.784,10.393a6.088,6.088,0,0,1,8.609-8.609L34.745,26.136a6.086,6.086,0,0,1,0,8.609Z"
            transform="translate(36.529 60.882) rotate(180)"
          />
        </svg>
      </button>
      <button ref="next" class="single-carousel-controls__next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36.529"
          height="60.882"
          viewBox="0 0 36.529 60.882"
        >
          <path
            id="next-chevron"
            d="M57.745,39.744,33.392,64.1a6.088,6.088,0,0,1-8.609-8.609L44.831,35.439,24.783,15.391a6.088,6.088,0,0,1,8.609-8.609L57.745,31.134a6.086,6.086,0,0,1,0,8.609Z"
            transform="translate(-23 -4.998)"
          />
        </svg>
      </button>
    </div>
    <div ref="shortcuts" class="single-carousel-shortcuts">
      <template v-for="(shortcut, i) in slides">
        <span
          :key="i"
          class="single-carousel-shortcuts--shortcut"
          :class="{ active: i === 0 }"
        ></span>
      </template>
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
  name: 'Carousel',
  props: {
    title: {
      type: Array,
      default() {
        return []
      },
    },
    slides: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {
    const container = this.$refs.container
    const slider = this.$refs.mask
    const slidesCount = slider.children.length
    const slides = slider.children
    const prev = this.$refs.prev
    const next = this.$refs.next
    // const slideSize = slider.offsetWidth
    let currentSlide = 0
    let number = 0
    const fps = 1
    const duration = 8000
    const shortcuts = this.$refs.shortcuts.children

    slider.style.width = `${100 * slidesCount}%`
    slides.forEach((slide) => {
      slide.style.width = `${100 / slidesCount}%`
    })

    // shortcuts[0].style.classList.add('active')

    function moveSlide() {
      slider.style.transform = `translate(${
        (-1 * currentSlide * 100) / slidesCount
      }%)`

      shortcuts.forEach((shortcut, i) => {
        shortcut.classList.remove('active')
        // shortcut.addEventListener('click', () => {
        //   currentSlide = i
        //   moveSlide()
        // })
      })

      shortcuts[currentSlide].classList.add('active')
    }

    function linkShortcuts() {
      shortcuts.forEach((shortcut, i) => {
        shortcut.addEventListener('click', () => {
          currentSlide = i
          moveSlide()
          window.cancelAnimationFrame(autoPlay)
        })
      })
    }
    linkShortcuts()

    function nextSlide() {
      currentSlide = currentSlide >= slidesCount - 1 ? 0 : currentSlide + 1
      window.cancelAnimationFrame(autoPlay)
      number = 0
      moveSlide()
    }

    function prevSlide() {
      currentSlide = currentSlide <= 0 ? slidesCount - 1 : currentSlide - 1
      window.cancelAnimationFrame(autoPlay)
      moveSlide()
    }

    next.addEventListener('click', nextSlide)
    prev.addEventListener('click', prevSlide)

    function autoPlay() {
      if (number < 60) {
        setTimeout(() => {
          number++
          nextSlide()
          window.requestAnimationFrame(autoPlay)
        }, duration / fps)
      }
    }
    window.requestAnimationFrame(autoPlay)

    this.$nextTick(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          markers: false,
          start: 'top center',
          end: 'bottom bottom',
        },
      })

      tl.from(container.children[0], { y: -100, opacity: 0, duration: 1 })
    })
  },
  methods: {},
}
</script>
