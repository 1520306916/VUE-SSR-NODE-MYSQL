<template>
  <div>
    <Myheader></Myheader>
    <Swiper></Swiper>
    <Classation :indexClass="indexClass"></Classation>
    <School></School>
    <Apply></Apply>
    <Course :allparentinfo="allparentinfo"></Course>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from "axios"
import Myheader from "~/components/home/header.vue"
import Swiper from "~/components/home/swiper.vue"
import Classation from "~/components/home/Classification.vue"
import School from "~/components/home/School.vue"
import Apply from "~/components/home/apply.vue"
import Course from "~/components/home/course.vue"
import Footer from "~/components/home/footer.vue"
export default {
  asyncData() {
    return axios.get("http://127.0.0.1:5000/api/").then((res)=>{
      return {
        indexClass:res.data.indexClass,
        allparentinfo:res.data.allparentinfo
      }
    })
  },
  components: {
    Myheader,
    Swiper,
    Classation,
    School,
    Apply,
    Course,
    Footer
  }
}
</script>

