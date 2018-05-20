<template>
  <div class="to">
    <div v-for="(value, index) in allparentinfo" :key="index" class="course">
      <TopMin :items="value.headinfo"></TopMin>
      <ul class="top-ul">
        <li v-for="(item, index) in value.course.classList" :key="index">
          <nuxt-link to="/coursehome" class="con" id="dao_acti1">
            <img :src="item.imgurl" alt="" />
            <div class="topic_con_txt">
              <span>{{item.classname}}</span>
            </div>
          </nuxt-link>
        </li>
      </ul>
      <ul class="bottom-ul">
        <li v-for="(item, index) in value.course.classMoreList" :key="index">
          <nuxt-link to="/coursehome">
            <p><img :src="item.imgurl" alt=""></p>
            <span>{{item.classname}}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TopMin from "../commen/top-min.vue"
export default {
  props: ["allparentinfo"],
  data() {
    return {

    }
  },
  components: {
    TopMin
  }
}
</script>

<style scoped>
.to {
  margin-bottom:65px;
}
.course {
  background-color: #fff;
  padding: 0 5px;
}
a {
  text-decoration: none;
  display: inline-block;
}
.con {
  position: relative;
  width: 100%;
 
  overflow: hidden;
}

.top-ul {
  list-style: none;
  overflow: hidden;
  margin-bottom: 18px;
}

.top-ul li {
  float: left;
  width: 50%;
  text-align: center;
}
.top-ul li:first-of-type {
  padding-right: 5px;
}
.top-ul li:last-of-type {
  padding-left: 5px;
}
img {
  width: 100%;
  height: 100%;
}
.topic_con_txt {
  position: absolute;
  height: 28px;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, .7);
}
 .topic_con_txt span {
   color: #fff;
   font-size: 12px;
   text-align: center;
   line-height: 28px;
 }
 .bottom-ul{
   padding: 0 0 10px;
   margin: 0;
   list-style: none;
   overflow: hidden;
   
 }
  .bottom-ul p {
   width: 26px;
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   right: 28px;
 }
.bottom-ul li {
  float: left;
  width: 50%;
  position: relative;
  border: 1px solid #eee;
}
.bottom-ul li:first-of-type {
  border-right: 0;
  border-bottom: 0;
}
.bottom-ul li:last-of-type {
  border-left: 0;
  border-top:0;
}
.bottom-ul span {
  line-height: 50px;
  font-size:14px;
  color: #333;
  margin-right: 80px;
  text-align: center;
  display: block;
}
.bottom-ul a {
  display: inline-block;
  width: 100%;
  position: relative;
}
</style>
