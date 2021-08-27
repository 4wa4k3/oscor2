import { bootstrap } from 'vue-gtag'
export const state = () => ({
  // data property
  isOpen: false,
})

export const mutations = {
  // update state
  // getGDPR: (state) => {
  //   if (process.browser) {
  //     return localStorage.getItem('GDPR:accepted', true)
  //   }
  // },
  deny: (state) => {
    state.isOpen = false
    localStorage.setItem('GDPR:accepted', false)
  },
  accept: (state) => {
    state.isOpen = true
  },
  accepted: (state) => {
    state.isOpen = false
    localStorage.setItem('GDPR:accepted', true)
    // location.reload()
  },
}

export const actions = {
  // methods
  // ACCEPT is and ACTION!!!!
  accept(context) {
    if (process.browser) {
      bootstrap().then((gtag) => {
        // context.state.isOpen = false
        // localStorage.setItem('GDPR:accepted', true)
        console.log(gtag)
        context.commit('accepted')
      })
    }
  },
  deny(context) {
    if (process.browser) {
      context.commit('deny')
    }
  },
}

export const getters = {
  // computed properties
  isOpen: (state) => state.isOpen,
}
