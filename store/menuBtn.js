export const state = () => ({
  // data
  showLight: null,
  menuButton: [
    {
      name: 'tLine',
      x1: '0',
      y1: '5',
      x2: '24',
      y2: '5',
      stroke: '',
    },
    {
      name: 'cLine',
      x1: '0',
      y1: '12',
      x2: '24',
      y2: '12',
      stroke: '',
    },
    {
      name: 'bLine',
      x1: '0',
      y1: '19',
      x2: '24',
      y2: '19',
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
