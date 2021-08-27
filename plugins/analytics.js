import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  const getGDPR = localStorage.getItem('GDPR:accepted')

  Vue.use(
    VueGtag,
    {
      config: { id: 'UA-64704336-1' },
      bootstrap: getGDPR === 'true',
      appName: 'OSCOR NEW SITE',
      enabled: getGDPR === 'true',
      pageTrackerScreenviewEnabled: true,
    },
    app.router
  )
}
