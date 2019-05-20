export const state = () => ({
  hogeFromStore: 'Hello, Vuex',
  testImage: '/Elastic-Load-Balancing-ELB.png',
  testImage2: '/Amazon-Simple-Storage-Service-S3.png'
})

export const mutations = {
  setHogeFromStore(state, value) {
    state.hogeFromStore = value
  },
  setTestImage(state, value) {
    state.testImage = value
  },
  setTestImage2(state, value) {
    state.testImage2 = value
  },
}

export const actions = {
  writeHoge(context, value) {
    context.commit('setHogeFromStore', value)
  },
  writeTestImage(context, value) {
    context.commit('setTestImage', value)
  },
  writeTestImage2(context, value) {
    context.commit('setTestImage2', value)
  },
}


