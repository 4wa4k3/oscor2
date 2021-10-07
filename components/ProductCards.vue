<template>
  <section class="product-cards-section">
    <template v-for="(card, i) in cards">
      <div :key="i" class="product-cards-wrap">
        <div class="product-cards-inner">
          <div
            ref="cards"
            class="product-cards-container"
            :style="{ backgroundColor: card.color }"
          >
            <div class="product-cards-circle"></div>
            <div
              class="product-cards-content-container"
              :style="{
                backgroundImage: `url(${card.image.url})`,
              }"
            ></div>
            <div class="product-cards-content-container-content">
              <h2 ref="titles">{{ $prismic.asText(card.name) }}</h2>
              <!-- <div class="french-sizes-container"></div> -->
              <nuxt-link
                :to="
                  localePath({
                    name: `division-category`,
                    params: {
                      division: $route.params.division,
                      category: card.link.uid,
                    },
                  })
                "
                >{{ $prismic.asText(card.link_text) }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'ProductCards',
  props: {
    cards: {
      type: Array,
      default() {
        return []
      },
    },
  },
  mounted() {
    const cards = this.$refs.cards
    const cardTitles = this.$refs.titles

    function getMaxheight(elem) {
      let elemHeight = -1
      elem.forEach((e) => {
        elemHeight = Math.max(elemHeight, e.offsetHeight)
      })
      return elemHeight
    }

    if (cards) {
      cards.forEach(function (elem, index) {
        const circle = elem.childNodes[0]
        const product = elem.childNodes[2]
        const content = elem.childNodes[4]

        content.children[1].style.visibility = 'hidden'

        content.style.bottom = `-${getMaxheight(cardTitles) - 80}px`

        window.addEventListener('resize', () => {
          content.style.bottom = `-${getMaxheight(cardTitles) - 80}px`
        })

        elem.addEventListener('mouseover', function (e) {
          circle.classList.add('over')
          product.classList.add('shrink')
          content.classList.add('slide-up')
          content.style.bottom = `${0}px`
          content.children[1].style.visibility = 'visible'
        })

        elem.addEventListener('mouseout', function (e) {
          circle.classList.remove('over')
          product.classList.remove('shrink')
          content.classList.remove('slide-up')
          content.style.bottom = `-${getMaxheight(cardTitles) - 80}px`
          content.children[1].style.visibility = 'hidden'
        })
      })
    }

    ScrollTrigger.batch(cards, {
      onEnter: (batch) =>
        gsap.from(batch, {
          opacity: 0,
          y: -100,
          stagger: {
            each: 0.15,
          },
        }),
    })
  },
}
</script>
