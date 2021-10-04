<template>
  <footer class="footer">
    <div class="footer-left-col">
      <div class="footer-top-container">
        <div class="footer-top-container-brand">
          <Logo :logo="logo" />
        </div>
      </div>
    </div>
    <div class="footer-center-col">
      <div class="footer-top-container-links">
        <template v-for="(link, i) in footerLinks">
          <span :key="i">
            <nuxt-link :to="localePath(`/${link.primary.nav_link.uid}`)">{{
              link.primary.link_text
            }}</nuxt-link>
          </span>
        </template>
        <span><nuxt-link to="/quality-policy">Quality Policy</nuxt-link></span>
        <span><nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link></span>
      </div>
      <div class="footer-bottom-container">
        <div class="footer-bottom-contact">
          <h3>Oscor Global Head Quarters</h3>
          <a
            href="https://goo.gl/maps/vPj6ZGtVMDSkPZrh8"
            target="_blank"
            rel="noopener"
            ><address>3816 DeSoto Blvd. Palm Harbor, FL 34683 USA</address></a
          >
          <div class="footer-bottom-contact-numbers">
            <a href="tel:18007267267" rel="noopener">US: 1-800-726-7267</a>
            <a href="tel:17279372511" rel="noopener"
              >Outside US: +17279372511</a
            >
            <a href="tel:149021158678600" rel="noopener"
              >DE: +49(0)211-586-786-00</a
            >
            <a href="tel:08000067267" rel="noopener"
              >DE Toll Free: 0800 00-67267</a
            >
          </div>
        </div>
        <div class="footer-bottom-links-container">
          <span>Oscor &copy; {{ new Date().getFullYear() }}</span>
        </div>
      </div>
    </div>
    <div class="footer-right-col">
      <div class="footer-top-container-social-media">
        <a
          href="https://www.facebook.com/oscor.inc/"
          target="_blank"
          alt="Oscor Facebook"
          ><svg
            id="Layer_1"
            class="footer-top-container-social-media-icon--svg"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
            xml:space="preserve"
          >
            <g>
              <path
                class="footer-top-container-social-media-icon"
                d="M35 1v34H1V1h34m0-.5H1C.7.5.5.7.5 1v34c0 .3.2.5.5.5h34c.3 0 .5-.2.5-.5V1c0-.3-.2-.5-.5-.5z"
              />
              <path
                class="footer-top-container-social-media-icon"
                d="M19 9.5c2.2 0 3.2.3 3.2.3l-.4 2.6s-.7-.2-1.4-.2-1.3.2-1.3.9v2h2.8l-.2 2.5H19v8.8h-3.3v-8.8h-1.8v-2.5h1.8v-1.7c0-.8 0-1.9.6-2.6.5-.8 1.3-1.3 2.7-1.3m0-.5c-1.4 0-2.4.5-3.1 1.5-.7.9-.7 2.2-.7 2.9v1.2h-1.3c-.3 0-.5.2-.5.5v2.5c0 .3.2.5.5.5h1.3v8.3c0 .3.2.5.5.5H19c.3 0 .5-.2.5-.5v-8.3h2.1c.3 0 .5-.2.5-.5l.2-2.5V15c0-.3-.2-.5-.5-.5h-2.3V13c0-.3.3-.4.8-.4.6 0 1.3.2 1.3.2h.1c.1 0 .2 0 .3-.1.1-.1.2-.2.2-.3l.4-2.6c0-.2-.1-.5-.3-.6-.1.1-1.1-.2-3.3-.2z"
              />
            </g></svg
        ></a>

        <a
          href="https://twitter.com/oscorinc"
          target="_blank"
          alt="Oscor Twitter"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="footer-top-container-social-media-icon--svg"
            viewBox="0 0 36 36"
          >
            <g>
              <path
                class="footer-top-container-social-media-icon"
                d="M35 1v34H1V1h34m0-.5H1C.7.5.5.7.5 1v34c0 .3.2.5.5.5h34c.3 0 .5-.2.5-.5V1c0-.3-.2-.5-.5-.5z"
              />
              <path
                class="footer-top-container-social-media-icon"
                d="M26.5 12.7c-.6.3-1.3.5-2 .6.7-.4 1.3-1.1 1.5-1.9-.7.4-1.4.7-2.2.8-.6-.7-1.5-1.1-2.6-1.1-1.9 0-3.5 1.6-3.5 3.5 0 .3 0 .5.1.8-2.9-.1-5.5-1.5-7.2-3.7-.3.5-.5 1.1-.5 1.8 0 1.2.6 2.3 1.6 2.9-.6 0-1.1-.2-1.6-.4v0c0 1.7 1.2 3.1 2.8 3.4-.3.1-.6.1-.9.1-.2 0-.4 0-.7-.1.4 1.4 1.7 2.4 3.3 2.4-1.2.9-2.7 1.5-4.3 1.5h-.8c1.5 1 3.4 1.6 5.4 1.6 6.4 0 9.9-5.3 9.9-9.9v-.5c.7-.5 1.3-1.1 1.7-1.8"
              />
            </g></svg
        ></a>

        <a
          href="https://www.youtube.com/channel/UCjuW4lI4Wyo1Ef_a95xXyCg"
          target="_blank"
          alt="Oscor YouTube Channel"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="footer-top-container-social-media-icon--svg"
            viewBox="0 0 36 36"
          >
            <g>
              <path
                class="footer-top-container-social-media-icon"
                d="M35 1v34H1V1h34m0-.5H1C.7.5.5.7.5 1v34c0 .3.2.5.5.5h34c.3 0 .5-.2.5-.5V1c0-.3-.2-.5-.5-.5z"
              />
              <path
                class="footer-top-container-social-media-icon"
                d="M21.3 18l-5.6 3.3v-6.5l5.6 3.2zm5.2 3v-6s0-2.9-2.9-2.9H12.4s-2.9 0-2.9 2.9v6s0 2.9 2.9 2.9h11.1c.1.1 3 .1 3-2.9"
              />
            </g></svg
        ></a>

        <a
          href="https://www.linkedin.com/company/oscor-inc."
          target="_blank"
          alt="Oscor LinkedIn"
          ><svg
            id="Layer_1"
            class="footer-top-container-social-media-icon--svg"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 36 36"
            xml:space="preserve"
          >
            <style></style>
            <path
              class="st0 footer-top-container-social-media-icon"
              d="M-225.4 1.2v34h-34v-34h34m0-.5h-34c-.3 0-.5.2-.5.5v34c0 .3.2.5.5.5h34c.3 0 .5-.2.5-.5v-34c0-.3-.2-.5-.5-.5zM-123 1v34h-34V1h34m0-.5h-34c-.3 0-.5.2-.5.5v34c0 .3.2.5.5.5h34c.3 0 .5-.2.5-.5V1c0-.3-.2-.5-.5-.5zM-21 1v34h-34V1h34m0-.5h-34c-.3 0-.5.2-.5.5v34c0 .3.2.5.5.5h34c.3 0 .5-.2.5-.5V1c0-.3-.2-.5-.5-.5z"
            />
            <path
              class="st1 footer-top-container-social-media-icon"
              d="M-233.9 12.9c-.6.3-1.3.5-2 .6.7-.4 1.3-1.1 1.5-1.9-.7.4-1.4.7-2.2.8-.6-.7-1.5-1.1-2.6-1.1-1.9 0-3.5 1.6-3.5 3.5 0 .3 0 .5.1.8-2.9-.1-5.5-1.5-7.2-3.7-.3.5-.5 1.1-.5 1.8 0 1.2.6 2.3 1.6 2.9-.6 0-1.1-.2-1.6-.4 0 1.7 1.2 3.1 2.8 3.4-.3.1-.6.1-.9.1-.2 0-.4 0-.7-.1.4 1.4 1.7 2.4 3.3 2.4-1.2.9-2.7 1.5-4.3 1.5h-.8c1.5 1 3.4 1.6 5.4 1.6 6.4 0 9.9-5.3 9.9-9.9v-.5c.7-.5 1.3-1.1 1.7-1.8"
            />
            <path
              class="st0 footer-top-container-social-media-icon"
              d="M-139 9.5c2.2 0 3.2.3 3.2.3l-.4 2.6s-.7-.2-1.4-.2-1.3.2-1.3.9v2h2.8l-.2 2.5h-2.6v8.8h-3.3v-8.8h-1.8v-2.5h1.8v-1.7c0-.8 0-1.9.6-2.6.4-.8 1.2-1.3 2.6-1.3m0-.5c-1.4 0-2.4.5-3.1 1.5-.7.9-.7 2.2-.7 2.9v1.2h-1.3c-.3 0-.5.2-.5.5v2.5c0 .3.2.5.5.5h1.3v8.3c0 .3.2.5.5.5h3.3c.3 0 .5-.2.5-.5v-8.3h2.1c.3 0 .5-.2.5-.5l.2-2.5V15c0-.3-.2-.5-.5-.5h-2.3V13c0-.3.3-.4.8-.4.6 0 1.3.2 1.3.2h.1c.1 0 .2 0 .3-.1.1-.1.2-.2.2-.3l.4-2.6c0-.2-.1-.5-.3-.6-.1.1-1.1-.2-3.3-.2z"
            />
            <path
              class="st1 footer-top-container-social-media-icon"
              d="M-34.7 18l-5.6 3.3v-6.5l5.6 3.2zm5.2 3v-6s0-2.9-2.9-2.9h-11.1s-2.9 0-2.9 2.9v6s0 2.9 2.9 2.9h11.1c0 .1 2.9.1 2.9-2.9"
            />
            <path
              class="st2 footer-top-container-social-media-icon"
              d="M-183.7-60h-30.7c-1.5 0-2.7 1.2-2.7 2.6v30.8c0 1.4 1.2 2.6 2.7 2.6h30.7c1.5 0 2.7-1.2 2.7-2.6v-30.8c0-1.4-1.2-2.6-2.7-2.6z"
            />
            <path
              class="st2 footer-top-container-social-media-icon"
              d="M-211.7-46.5h5.3v17.2h-5.3v-17.2zm2.7-8.5c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.8 1.4-3.1 3.1-3.1M-203-46.5h5.1v2.3h.1c.7-1.4 2.5-2.8 5.1-2.8 5.4 0 6.4 3.6 6.4 8.2v9.4h-5.3v-8.4c0-2 0-4.6-2.8-4.6s-3.2 2.2-3.2 4.4v8.5h-5.3v-17z"
            />
            <g>
              <path
                class="st0 footer-top-container-social-media-icon"
                d="M35 1v34H1V1h34m0-.5H1C.7.5.5.7.5 1v34c0 .3.2.5.5.5h34c.3 0 .5-.2.5-.5V1c0-.3-.2-.5-.5-.5z"
              />
            </g>
            <g>
              <path
                class="st3 footer-top-container-social-media-icon"
                d="M25.2 9.5H10.8c-.7 0-1.3.5-1.3 1.2v14.5c0 .7.6 1.2 1.3 1.2h14.5c.7 0 1.3-.5 1.3-1.2V10.7c-.1-.7-.7-1.2-1.4-1.2z"
              />
              <path
                class="st3 footer-top-container-social-media-icon"
                d="M12 15.9h2.5V24H12v-8.1zm1.3-4.1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5M16.1 15.9h2.4V17c.3-.6 1.2-1.3 2.4-1.3 2.6 0 3 1.7 3 3.9V24h-2.5v-4c0-.9 0-2.2-1.3-2.2s-1.5 1-1.5 2.1v4h-2.5v-8z"
              />
            </g></svg
        ></a>
      </div>
    </div>
  </footer>
</template>
<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo,
  },
  async fetch() {
    try {
      const currentLocale = await this.$i18n.locales.filter(
        (lang) => lang.code === this.$i18n.locale
      )[0]
      const query = await this.$prismic.api.query(
        this.$prismic.predicates.at('document.type', 'navigation'),
        {
          lang: currentLocale.iso.toLowerCase(),
        }
      )
      this.menuLinks = query.results[0].data.body
    } catch (e) {
      console.log(e)
    } finally {
    }
  },
  data() {
    return {
      logo: {
        width: '1.9725in',
        height: '0.4275in',
        color: '#fff',
      },
      menuLinks: [],
    }
  },
  computed: {
    footerLinks() {
      return this.menuLinks.filter(
        (link) => link.primary.link_text.toLowerCase() !== 'careers'
      )
    },
  },
}
</script>
