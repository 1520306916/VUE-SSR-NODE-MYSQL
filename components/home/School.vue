<template>
  <div class="school">
    <Top-min :items="msg"></Top-min>
    <ul>
      <li>
        <a href="#"><img src="img/school_1.jpg" alt=""></a>
        <p>中考冲刺</p>
      </li>
      <li>
        <a href="#"><img src="img/school_2.png" alt=""></a>
        <p>新东方教育</p>
      </li>
      <li>
        <a href="#"><img src="img/school_3.jpg" alt=""></a>
        <p>英语四六级</p>
      </li>
      <li>
        <a href="#"><img src="img/school_4.jpg" alt=""></a>
        <p>3节课</p>
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
        imgurl: "img/icon_jigou.png",
        after: "推荐学校",
        before:"更多学校"
      }
    }
  },
  components: {
    TopMin
  }

}
</script>


<style scoped>
ul {
  list-style: none;
  overflow: hidden;
  margin-left: 1px;
  padding: 0 0 18px;

}
p {
  font-size: 12px;
  margin-top:5px;
  text-align: center;
}
li {
  float: left;
  width: 25%;
  padding-right: 5px;
}
li a img{
  width: 100%;
}
.school {
  padding: 0 5px;
  background-color: #fff;
}

.top-min {
  padding: 12px 0;
  margin-top: 12px;
}

h1 {
  font-size: 12px;
  line-height: 24px;
}

h1 img {
  margin-top: -3px;
}

span {
  font-size: 12px;
  margin-left: 6px;
  line-height: 24px;
}

img {
  vertical-align: middle;
}

.top-right {
  font-size: 12px;
  line-height: 24px;
  float: right;
  color: #999;
  text-decoration: none;
}

.right-is {
  margin-left: 3.5px;
}
</style>

