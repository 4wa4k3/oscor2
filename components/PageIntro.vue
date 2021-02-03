<template>
  <section class="division-content-intro">
    <section class="division-content-intro-content">
      <svg
        id="Layer_1"
        class="division-content-intro-content-svg"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="721.55px"
        height="727.08px"
        viewBox="0 0 721.55 727.08"
        v-html="$prismic.asText(intro.title_svg)"
      ></svg>
      <div class="division-content-intro-content-title">
        <h1>{{ $prismic.asText(intro.title1) }}</h1>
      </div>
      <section class="division-content-intro-content-text">
        <h2>{{ $prismic.asText(intro.sub_title) }}</h2>
        <hr />
        <p>{{ $prismic.asText(intro.intro_text) }}</p>
        <a href="#">{{ $prismic.asText(intro.link_text) }}</a>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'PageIntro',
  props: {
    intro: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
