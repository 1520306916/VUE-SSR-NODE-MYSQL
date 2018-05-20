<template>
  <div>
    <fix-header :title="title"></fix-header>
    <div class="context">
      <ul>
        <li v-for="item in num" :key="item">
          <div class="left_con">
            <p>￥9999</p>
            <span>满10000元可用</span>
          </div>
          <div class="right_con">
            <h3>
              仅限报名【北京贾静传媒艺术培训】的课程
            </h3>
            <p>
              <span>2015.12.24</span>-
              <span>2017.12.24</span>
            </p>
          </div>
          <div class="top_time">
            <p>剩10天</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import fixHeader from "~/components/commen/fixed-header.vue"
export default {
  data() {
    return {
      title: "优惠卷",
      num: 7
    }
  },
  components: {
    fixHeader
  }
}
</script>


<style scoped>
.top_time {
  color:#fff;
  font-size:12px;
}
.top_time p {
  margin:0;
}
.left_con p {
  font-size:25px;
  text-align: center;
  color:#fff;
  margin-top: 20px;
}

.left_con span {
  display: block;
  font-size:12px;
  text-align: center;
  color:#fff;
  margin-top: 10px;
}
.top_time {
    position: absolute;
    top: 10px;
    right: -26px;
    width: 96px;
    height: 18px;
    background: #f47979;
    color: #fff;
    font-size: 12rem;
    text-align: center;
    transform: rotate(40deg);
}
.right_con h3::before {
  content: '\5B66\8D39\5238';
  width: 40px;
  height: 15px;
  text-align: center;
  line-height: 15px;
  display: inline-block;
  color: #fff;
  background: #ef4040;
  font-size: 12px;
  border-radius: 2.4px;
  margin-right: 3.6px;
  position: relative;
}

h3 {
  padding: 24px 12px 0  12px;
  font-size: 12px;
  font-weight: 300;
}
 p {
   font-size:12px; 
   text-align: center; 
   margin-top: 10px;
 }
.context {
  margin-top: 40px;
  padding: 0 12px;
}

.right_con {
  height: 100%;
  margin-left: 110px;
  background-color: #fff;
}

.left_con {
  float: left;
  width: 110px;
  height: 100%;
  background: url('/img/discount_left_bg.png') no-repeat 0 0
}

li {
  height: 102px;
  position: relative;
  margin-top: 12px;
  overflow: hidden;
}

ul {
  list-style: none;
  margin-top: 52px;
}
</style>




