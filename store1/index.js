import Vuex from "vuex"
import state from "./state.js"
import mutations from "./mutations.js"

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations,
  })
}

export default createStore