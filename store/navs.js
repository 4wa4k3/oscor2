export const state = () => ({
  // data property
  navActive: false,
})

export const mutations = {
  // update state
  navOpen: (state) => {
    state.navActive = !state.navActive
  },
}

export const actions = {
  // methods
}

export const getters = {
  // computed properties
  navActive: (state) => state.navActive,
}
