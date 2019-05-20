export const state = () => ({
  hogeFromStore: 'Hello, Vuex',
  testImage: '/Elastic-Load-Balancing-ELB.png',
  testImage2: 'https://s3-ap-northeast-1.amazonaws.com/takuto/test1/test1test1/01.jpg'
})

export const mutations = {
  setHogeFromStore(state, value) {
    state.hogeFromStore = value
  },
  setTestImage(state, value) {
    state.testImage = value
  }
}

export const actions = {
  writeHoge(context, value) {
    context.commit('setHogeFromStore', value)
  },
  writeTestImage(context, value) {
    context.commit('setTestImage', value)
  }
}


