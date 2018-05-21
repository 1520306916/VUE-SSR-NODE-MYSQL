<template>
  <div>
    <Header></Header>
    <Footer></Footer>
    <Left :data="alldata.gradeOne"></Left>
    <Right :dat="alldata"></Right>
  </div>
  
</template>

<script>
import Footer from "../components/home/footer.vue"
import Header from "~/components/classify/header.vue"
import Left from "~/components/classify/left.vue"
import Right from "~/components/classify/right.vue"
import axios from "axios"
import {mapState} from "vuex"
export default {
  asyncData({store}) {
   return axios.get(`http://127.0.0.1:5000/api/listhome`).then((res)=> { 
      store.commit('ADDalldata', res.data)
    })
  },
  data() {
    return {
      currentId: '15963587',
      currentclass: '艺术',
      listhome : ""
    }
  },
  components: {
    Footer,
    Header,
    Left,
    Right
  },
  computed: {
    ...mapState([
      'alldata'
    ])
  }
}
</script>

<style scoped>
 html, body {
   height: 100%;
 }
</style>

