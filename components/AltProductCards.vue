<template>
  <section class="product-cards-section">
    <template v-for="(card, i) in cards">
      <div
        ref="cards"
        :key="i"
        class="product-cards-container"
        :style="{ backgroundColor: card.primary.color }"
      >
        <div class="product-cards-circle"></div>
        <div
          class="product-cards-content-container"
          :style="{ backgroundImage: `url(${card.primary.image.url})` }"
        ></div>
        <div class="product-cards-content-container-content">
          <h2
            ref="title"
            v-html="$prismic.asText(card.primary.product_name)"
          ></h2>
          <h3>{{ $prismic.asText(card.primary.product_subtext) }}</h3>
          <div class="french-sizes-container">
            <template v-for="(fsize, index) in card.items">
              <div
                v-if="fsize.color !== null"
                :key="index"
                class="french-size-container"
                :data-french-size="fsize.color"
              >
                <span class="french-size-text">
                  {{ $prismic.asText(fsize.french_size) }}
                </span>
              </div>
            </template>
          </div>
          <nuxt-link
            :to="
              localePath({
                name: `division-category-product`,
                params: {
                  division: $route.params.division,
                  category: $route.params.category,
                  product: card.primary.link.uid,
                },
              })
            "
            >{{ $prismic.asText(card.primary.link_text) }}</nuxt-link
          >
          <!-- <nuxt-link
            v-if="$route.params.division === 'medical-components'"
            :to="
              localePath({
                name: `division-category-component`,
                params: {
                  division: $route.params.division,
                  category: $route.params.category,
                  component: card.primary.link.uid,
                },
              })
            "
            >{{ $prismic.asText(card.primary.link_text) }}</nuxt-link
          > -->
        </div>
      </div>
    </template>
  </section>
</template>

<script>
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'AltProductCards',
  props: {
    cards: {
      type: Array,
      default() {
        return {}
      },
    },
  },
  mounted() {
    // Animate the cards
    const cards = this.$refs.cards
    if (cards) {
      cards.forEach(function (elem, index) {
        const circle = elem.childNodes[0]
        const product = elem.childNodes[2]
        const content = elem.childNodes[4]
        const sup = content.getElementsByTagName('sup')

        if (sup) {
          sup.forEach((elem) => {
            elem.style.fontSize = '1.8rem'
            elem.style.textDecoration = 'none'
          })
        }

        content.style.bottom = `-${
          content.children[2].clientHeight +
          content.children[3].clientHeight +
          6
        }px`

        elem.addEventListener('mouseover', function (e) {
          circle.classList.add('over')
          product.classList.add('shrink')
          content.classList.add('slide-up')
          content.style.bottom = `${0}px`
          // circle.style.background = 'radial-gradient(#323233, #7D7D80)'
          // circle.style.transition = 'background-color 0.3s'
        })

        elem.addEventListener('mouseout', function (e) {
          circle.classList.remove('over')
          product.classList.remove('shrink')
          content.classList.remove('slide-up')
          content.style.bottom = `-${
            content.children[2].clientHeight +
            content.children[3].clientHeight +
            6
          }px`
          // circle.style.background = 'radial-gradient(#fff, #fff)'
          // circle.style.transition = 'background-color 0.3s'
        })
      })
    }

    // ScrollTrigger.batch(cards, {
    //   onEnter: (batch) =>
    //     gsap.from(batch, {
    //       opacity: 0,
    //       y: -100,
    //       stagger: {
    //         each: 0.15,
    //       },
    //     }),
    // })
  },
}
</script>
