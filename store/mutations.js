 const mutations  = {
  ADDalldata (state, value) {
    state.alldata = value
  },
  ADDindexClass (state, value) {
    state.indexClass = value
  },
  ADDcourselist (state, value) {
    state.courselist = value
  },
  PUSHcourselist (state, value) {
    state.courselist.push(value)
  },
  Datacoursehomeid (state, value) {
    state.coursehomeid=value
  },
  Datacoursehomename (state, value) {
    state.coursehomename= value
  },
  Addtype(state, value) {
    state.type = value
  }
} 
export default mutations