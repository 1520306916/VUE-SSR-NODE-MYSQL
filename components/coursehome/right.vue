<template>
  <div class="right">
    <div class="top" :style="{background: `url(/img/headImg/${this.indexClass.indexId}.jpg)no-repeat center/cover`}">
      <span></span>
      <a href="javascript:;">全部{{this.indexClass.name}}课程</a>
    </div>

    <div v-for="(item, index) in dat.gradeTwo" :key="index">
      <a href="javascript:;"  :class="index==id ? navactive : nav" @click="clickActive(index)" :data-id="item.gradeTwoId" :data-pid="item.pid" >
        {{item.twoClass_name}}
      </a>

      <ul>
        <li v-for="(it, i) in dat.gradeThree[index]" :key="i" v-show="index==id" @click="clicka(it.gradeThreeId, it.threeClass_name)">
          {{it.threeClass_name}}
        </li>
      </ul>
     
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex"
import axios from "axios"
export default {
  props: ["dat"],

  data() {
    return {
      currentclass: '艺术',
      id: null,
      nav:"nav",
      navactive : "nav-active"
    }
  },
  methods: {
    clickActive(type) {
      if(this.id == type) {
        this.id = null
      }else {
        this.id = type
      }
    },
     clicka(a,b) {
      this.Datacoursehomeid(a)
      this.Datacoursehomename(b)
      this.Addtype(2)
      this.$router.push("/coursehome?id="+a+"&type=2&class="+b)
      axios.get("http://127.0.0.1:5000/api/courselist?type=2&id="+a).then((res) => {
      this.$store.commit('ADDcourselist', res.data)
      this.$store.commit('Addtype', 2)
      this.$store.commit('Datacoursehomeid', a)
      this.$store.commit('Datacoursehomename', b)
      this.$emit('clicks')
    })
    },
    ...mapMutations(["ADDcourselist","Datacoursehomeid","Datacoursehomename","Addtype"])
  },
  computed: {
    ...mapState([
      'indexClass'
    ])
  },
}
</script>


<style scoped>

 li {
   float: left;
   width: 33.33%;
   font-size: 14px;
   text-align: center;
   color:#333;
   height: 40px;
   line-height: 40px;
   border-right: 1px solid #eee;
   border-bottom: 1px solid #eee;
   color: #333;
 }

 ul {
   list-style: none;
   overflow: hidden;
   border-top: 1px solid #eee;
   border-left: 1px solid #eee;
 }
.nav {
  font-size: 14px;
  display: block;
  padding: 12px 0;
  text-decoration: none;
  color: #333;
  background: url('/img/area_no_new.png') no-repeat right 18px;
  background-size: 12px 6px;
}
.nav-active {
  font-size: 14px;
  display: block;
  padding: 12px 0;
  text-decoration: none;
  color: #333;
  background: url('/img/area_no_new_on.png') no-repeat right 18px;
  background-size: 12px 6px;
}
.top a {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  line-height: 60px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 0px;
}

.top span {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url('/img/icon_more_head.png') no-repeat center center;
  background-size: 20px;
  position: absolute;
  right: 35px;
  top: 50%;
  transform: translateY(-50%)
}

.right {
  position: fixed;
  top: 75px;
  bottom: 0px;
  right: 0;
  width: 100%;
  padding-left: 90px;
  background-color: #fff;
  padding-right: 10px;
  overflow: auto;
}

.right::-webkit-scrollbar {
  display: none;
}

.top {
  height: 60px;
  margin-top: 10px;
  position: relative;
  margin-bottom: 5px;
}
</style>




