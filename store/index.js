export const state = () => ({
  isIran: false
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setIran(state, isIran){
    state.isIran = isIran;
  }
}
