import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from "./mutations.js"
const state = {
   alldata:{},
   indexClass:{
     indexId:'15963587',
     name:'艺术'
   },
  //  全部课程
   courselist: {},
   coursehomeid: "",
   coursehomename: ""
}

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations,
  })
}

export default createStore