<template>
  <div class="left">
    <ul>
      <li v-for="(item, index) in data" :key="index" :class="{active: index==id}" @click="nav(index,item.gradeId,item.class_name)">{{item.class_name}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
import {mapMutations} from "vuex"
export default {
  props: ["data"],
  data() {
    return {
      id: "0"
    }
  },
  methods: {
    ...mapMutations([
      "ADDalldata","ADDindexClass"
    ]),
    nav(type, id, name) {
      this.ADDindexClass({
        indexId :id,
        name
      })
      if(id =='15963587') {
        axios.get(`http://127.0.0.1:5000/api/listhome`).then((res)=>{
          this.id = type
          this.ADDalldata(res.data)
        })
      }else {
        axios.get(`http://127.0.0.1:5000/api/listhome/${id}`).then((res)=>{
          this.id = type
          this.ADDalldata(res.data)
        })
      }
    }
  }
}
</script>

<style scoped>

.active {
  border-left:2px solid #ef3f41;
  box-sizing: border-box;
  background-color: #fff;
}
.left {
  float: left;
  font-size: 12px;
}

ul {
  width: 80px;
  position: fixed;
  top: 40px;
  bottom: 65px;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 9999;
}

ul::-webkit-scrollbar {
  display: none;
}

li {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: rgb(245, 245, 245);
  border-bottom: 1px solid #ddd;
  }
</style>


