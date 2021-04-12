export const state = () => ({
  searchActive: false,
})

export const mutations = {
  searchOpen: (state) => {
    state.searchActive = !state.searchActive
  },
}

export const getters = {
  searchActive: (state) => state.searchActive,
}
