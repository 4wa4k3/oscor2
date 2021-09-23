<template>
  <section class="oem-division-content__intro-container">
    <section class="oem-division-content__intro-content">
      <div class="oem-division-content__svg-container">
        <svg
          id="Layer_1"
          class="oem-division-content__content-svg"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 750 700"
          v-html="$prismic.asText(intro.title_svg)"
        ></svg>
        <div class="oem-division-content__intro-title">
          <h1>{{ $prismic.asText(intro.title1) }}</h1>
        </div>
      </div>
      <section class="oem-division-content__intro-text">
        <h2>{{ $prismic.asText(intro.sub_title) }}</h2>
        <hr />
        <p>{{ $prismic.asText(intro.intro_text) }}</p>
        <div class="oem-division-content__intro-text-cta">
          <a href="#">{{ $prismic.asText(intro.link_text) }}</a>
        </div>
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
