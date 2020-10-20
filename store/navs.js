export const state = () => ({
  navActive: false,
  mBtn: [
    {
      name: 'tLine',
      x1: '0.01',
      y1: '2',
      x2: '24.01',
      y2: '2.01',
    },
    {
      name: 'cLine',
      x1: '-0.01',
      y1: '12.01',
      x2: '23.99',
      y2: '12.03',
    },
    {
      name: 'bLine',
      x1: '-0.04',
      y1: '22.03',
      x2: '23.96',
      y2: '22.04',
    },
  ],
})

export const mutations = {
  navOpen: (state) => {
    state.navActive = !state.navActive
  },
}

export const actions = {}

export const getters = {
  navActive: (state) => state.navActive,
  mBtn: (state) => state.mBtn,
}
