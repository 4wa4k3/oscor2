<template>
  <section class="product-cards-section">
    <template v-for="(card, i) in cards">
      <div :key="i" class="product-cards-wrap">
        <div class="product-cards-inner">
          <div
            ref="cards"
            class="product-cards-container"
            :style="{ backgroundColor: card.primary.color }"
          >
            <div class="product-cards-circle">
              <span
                v-if="card.primary.new_product"
                ref="newTag"
                class="product-cards-circle--new-tag"
                >NEW</span
              >
              <span v-else></span>
            </div>
            <div
              class="product-cards-content-container"
              :style="{ backgroundImage: `url(${card.primary.image.url})` }"
            ></div>
            <div ref="content" class="product-cards-content-container-content">
              <h2
                ref="titles"
                v-html="$prismic.asText(card.primary.product_name)"
              ></h2>
              <h3 ref="subtitles">
                {{ $prismic.asText(card.primary.product_subtext) }}
              </h3>
              <div ref="frenchSizes" class="french-sizes-container">
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
                ref="link"
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
            </div>
          </div>
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
    const cardContent = this.$refs.content
    // const cardTitles = this.$refs.titles
    // const cardSubTitles = this.$refs.subtitles
    // const link = this.$refs.link
    const frenchSizes = this.$refs.frenchSizes
    const contentHeight = `-${getMaxheight(frenchSizes)}px`

    function getMaxheight(elem) {
      let elemHeight = -1
      elem.forEach((e) => {
        elemHeight = Math.max(elemHeight, e.offsetHeight)
      })
      return elemHeight
    }
    console.log(
      getMaxheight(cardContent),
      `frenchSizes is: ${getMaxheight(frenchSizes)}`
    )

    if (cards) {
      cards.forEach(function (elem, index) {
        const circle = elem.childNodes[0]
        // const newTag = circle.childNodes[0]
        const product = elem.childNodes[2]
        const content = elem.childNodes[4]
        const link = content.children[3]

        const sup = content.getElementsByTagName('sup')
        if (sup) {
          for (let i = 0; i < sup.length; i++) {
            sup[i].style.fontSize = '1.8rem'
            sup[i].style.textDecoration = 'none'
          }
        }
        // maintain scale of New product tags
        function newTag(tag, event) {
          if (
            tag.classList.contains('product-cards-circle--new-tag') &&
            event === 'mouseenter'
          ) {
            tag.classList.add('over')
          } else if (
            tag.classList.contains('product-cards-circle--new-tag') &&
            event === 'mouseleave'
          ) {
            tag.classList.remove('over')
          }
        }

        content.children[2].style.visibility = 'hidden'
        link.style.transform = 'translateY(55px)'

        content.style.height = `${getMaxheight(cardContent)}px`
        content.style.bottom = contentHeight

        window.addEventListener('resize', () => {
          content.style.bottom = contentHeight
        })

        elem.addEventListener('mouseenter', function (e) {
          circle.classList.add('over')
          newTag(circle.childNodes[0], e.type)
          product.classList.add('shrink')
          content.classList.add('slide-up')
          content.style.bottom = `${0}px`
          link.style.transform = 'translateY(0)'
          content.children[2].style.visibility = 'visible'
        })

        elem.addEventListener('mouseleave', function (e) {
          circle.classList.remove('over')
          newTag(circle.childNodes[0], e.type)
          product.classList.remove('shrink')
          content.classList.remove('slide-up')
          link.style.transform = 'translateY(55px)'
          content.children[2].style.visibility = 'hidden'
          content.style.bottom = contentHeight
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
