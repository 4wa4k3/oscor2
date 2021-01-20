export const state = () => ({
  // data
  showLight: null,
  menuButton: [
    {
      name: 'tLine',
      x1: '0.01',
      y1: '2',
      x2: '24.01',
      y2: '2.01',
      stroke: '',
    },
    {
      name: 'cLine',
      x1: '-0.01',
      y1: '12.01',
      x2: '23.99',
      y2: '12.03',
      stroke: '',
    },
    {
      name: 'bLine',
      x1: '-0.04',
      y1: '22.03',
      x2: '23.96',
      y2: '22.04',
      stroke: '',
    },
  ],
})

export const mutations = {
  changeShowLight(state, payload) {
    state.showLight = payload
  },
  changeMenuButtonColor(state, payload) {
    state.menuButton.forEach((stroke) => {
      stroke.stroke = payload
    })
  },
}

export const actions = {}

export const getters = {
  getShowLight(state) {
    return state.showLight
  },

  getMenuBtn(state) {
    return state.menuButton
  },
}
