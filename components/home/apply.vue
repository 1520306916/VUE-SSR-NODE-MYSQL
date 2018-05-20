<template>
  <div class="apply">
    <TopMin :items="msg"></TopMin>
    <ul>
      <li>
        <nuxt-link to="/coursehome" class="con" id="dao_acti1">
          <img src="img/favorable_1.jpg" alt="" />
          <div class="topic_con_txt">
            <span>钢琴精品课</span>
          </div>
          <p>
            距开抢5天24: 52: 23
          </p>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/coursehome" class="con" id="dao_acti2">
          <img src="img/favorable_2.jpg" alt="" />
          <div class="topic_con_txt">
            <span>钢琴精品课</span>
          </div>
          <p>
            距开抢5天24: 52: 23
          </p>
        </nuxt-link>
      </li>

    </ul>
  </div>
</template>
<script>
import TopMin from "../commen/top-min.vue"
export default {
  data() {
    return {
      msg: {
        imgurl: "img/icon_time.png",
        after: "限时抢报",
        before: "更多优惠"
      }
    }
  },
  components: {
    TopMin
  }
}
</script>


<style scoped>
p {
  font-size: 12px;
  margin-top: 5px;
  color: #333;
  -webkit-tap-highlight-color: transparent;
}
a {
  text-decoration: none;
}
.con {
  position: relative;
  width: 100%;
 
  overflow: hidden;
}
.apply {
  background-color: #fff;
  padding: 0 5px;
  padding-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
  overflow: hidden;
  margin-bottom: 18px;
}

li {
  float: left;
  width: 50%;
  text-align: center;
}
li:first-of-type {
  padding-right: 5px;
}
li:last-of-type {
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
</style>


