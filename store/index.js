export const state = () => ({
  hogeFromStore: 'Hello, Vuex',
  testImage: '/Elastic-Load-Balancing-ELB.png',
  testImage2: '/Amazon-Simple-Storage-Service-S3.png',
  baseImageUrl: 'https://s3-ap-northeast-1.amazonaws.com/takuto',
  baseDir:'/0/0/0/0',
  LB: [0, 1],
  EC2:[1, 2, 3],
  DB:[0, 1, 2],
  S3:[0, 1],
  targetImageUrl: `a`,
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
  getImage(state) {
    state.targetImageUrl = `${state.baseImageUrl}/${state.LB[0]}/${state.EC2[0]}/${state.DB[0]}/${state.S3[0]}`
  }
}
// ${state.baseImageUrl}/${state.LB[0]}/${state.EC2[0]}/${state.DB[0]}/${state.S3[0]
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
  showgetImage(context, value) {
    context.commit('getImage')
  }
}


