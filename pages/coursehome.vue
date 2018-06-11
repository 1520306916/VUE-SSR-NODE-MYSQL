<template>
  <div>
    <div class="header">
      <div class="nav red">
        <mt-button icon="back" class="btn" @click="back">返回</mt-button>
        <input type="text" class="search">
        <span class="search-btn"></span>
      </div>
      <!--下拉菜单-->
      <div class="fen">
        <p @click="click(1)" :class="{active : num ==1&&flag }">位置
          <span></span>
        </p>
        <p @click="click(2)" :class="{active :num ==2&&flag}">{{this.coursehomename || courselist[0].class_name}}
          <span></span>
        </p>
        <p @click="click(3)" :class="{active :num ==3&&flag}">{{sort}}
          <span></span>
        </p>
        <p @click="click(4)" :class="{active :num ==4&&flag}">筛选
          <span></span>
        </p>
      </div>
    </div>
    <!--下拉显示-->
    <div class="variable" v-if="flag">
      <!--类型选择-->
      <div v-if="num==2" class="ding">
        <div></div>
        <Left :data="alldata.gradeOne"  class="left"></Left>
        <Right :dat="alldata" @clicks="clicks(2)" ></Right>
      </div>
      <!--排序方式-->
      <ul v-if="num==3">
        <li @click="message('智能排序')">
          <i class="icon_bg_1"></i>
          <span>智能排序</span>
        </li>
        <li @click="message('离我最近')">
          <i class="icon_bg_2"></i>
          <span>离我最近</span>
        </li>
        <li @click="messages('saled DESC','人气最高')">
          <i class="icon_bg_3"></i>
          <span>人气最高</span>
        </li>
        <li>
          <i class="icon_bg_4"></i>
          <span>老师好评</span>
        </li>
        <li @click="messages('mall_cost DESC','价格最高')">
          <i class="icon_bg_5"></i>
          <span>价格最高</span>
        </li>
        <li @click="messages('mall_cost','价格最低')">
          <i class="icon_bg_6"></i>
          <span>价格最低</span>
        </li>
      </ul>
    </div>
    <!--无数据显示-->
    <div class="banner nobanner" v-if="!courselist[0]">
      <p class="icon"></p>
      <p class="icon-text">你要找的课，臣妾做不到呀</p>
    </div>
    <!--正常显示-->
    <div class="banner" v-if="courselist[0]">
      <mt-loadmore ref="loadmore" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
        <ul>
          <li v-for="(item, index) in courselist" :key="index" @click="skip(item.courseId)">
            <nuxt-link to="/">
              <div class="left">
                <img :src="'/img/teacherHead/'+item.teacher_actor" alt="">
                <span>{{item.teacherName}}</span>
              </div>
              <div class="right">
                <h1>{{item.name}}</h1>
                <span class="span">{{item.institutionsName}}({{item.campusesName}})</span>
                <p>{{item.open_date.substr(0,10)}}至{{item.end_date.substr(0,10)}}</p>
                <p class="cost">￥
                  <span>{{item.mall_cost}}</span>
                  <span class="ycost">￥{{item.cost}}</span>
                </p>
                <p class="student">
                  <span>已报{{item.saled}}/{{item.total}}</span>
                  <span class="dizi">{{item.district}}</span>
                </p>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template> 

<script>
import axios from "axios"
import { mapState, mapMutations } from "vuex"
import Left from "~/components/coursehome/left.vue"
import Right from "~/components/coursehome/right.vue"
export default {
  asyncData({ store, route }) {
    return [axios.get("http://127.0.0.1:5000/api/courselist?type=" + route.query.type + "&id=" + route.query.id).then((res) => {
      store.commit('ADDcourselist', res.data)
      store.commit('Addtype', route.query.type)
      store.commit('Datacoursehomeid', route.query.id)
      store.commit('Datacoursehomename', route.query.class)
    }),
    axios.get(`http://127.0.0.1:5000/api/listhome`).then((res) => {
      store.commit('ADDalldata', res.data)
    })
    ]
  },
  data() {
    return {
      list: 50,
      allLoaded: false,
      id: 15963589,
      flag: false,
      sort: '智能排序',
      limit: false,
      num : '',
      method: ''
    }
  },
  components: {
    Left,
    Right
  },
  computed: {
    ...mapState([
      'courselist',
      'coursehomeid',
      'coursehomename',
      'type',
      'alldata'
    ])
  },
  methods: {
    loadBottom() {
      if (!this.courselist[0]) {
        this.allLoaded = true
      }
      if (this.limit) {
        let limit = this.limit*5
        this.limit = this.limit + 1
        axios.get("http://127.0.0.1:5000/api/courselist?type=" + this.type + "&id=" + this.$route.query.id+"&method="+this.method+"&limit="+limit).then((res)=> {
          res.data.forEach((index) => {
            this.PUSHcourselist(index)
          })
          this.$refs.loadmore.onBottomLoaded()
        })
      }else {
        axios.get("http://127.0.0.1:5000/api/courselist?type=" + this.type + "&id=" + this.$route.query.id).then((res) => {
        res.data.forEach((index) => {
          this.PUSHcourselist(index)
        })
        this.$refs.loadmore.onBottomLoaded()
      })
      }
      
    },
    back() {
      this.$router.push('/')
    },
    ...mapMutations(["PUSHcourselist","ADDcourselist"]),
    click(a) {
      if (this.num == a && this.flag == true) {
        this.flag = false
      } else {
        this.flag = true
      }
      this.num = a
    },
    clicks(a) {
     this.flag = false
     this.num = a
     this.sort = "智能排序"
    },
    message(a) {
      this.sort = a
      this.limit = 1
      this.method = a
      axios.get("http://127.0.0.1:5000/api/courselist?type=" + this.type + "&id=" + this.$route.query.id).then((res)=> {
        this.ADDcourselist(res.data)
        this.click(3)
      })
    },
    messages(a,b) {
      this.sort = b
      this.limit = 1
      this.method = a
      axios.get("http://127.0.0.1:5000/api/courselist?type=" + this.type + "&id=" + this.$route.query.id+"&method="+a).then((res)=> {
        this.ADDcourselist(res.data)
        this.click(3)
      })
    },
    skip(a) {
      this.$router.push("/courseDetail/index?id="+a)
    }
  }
}
</script>

<style scoped>
 .left {
   position: absolute;
   top: 0;
 }

 .ding {
   position: absolute;
   width: 100%;
   top: 0;
   left: 0;
   bottom: 0;
 }

 .variable ul li span {
   font-size: 14px;
   line-height: 44px;
 }

 .variable ul li i {
   display: block;
   width: 17px;
   height: 17px;
   top: 12px;
   left: -23px;
   position: absolute;
 }

 .icon_bg_1 {
   background: url('/img/icon_sort_lisrt.png') no-repeat;
   background-size: 17px 17px;
 }

 .icon_bg_2 {
   background: url('/img/icon_me_jin.png') no-repeat;
   background-size: 17px 17px;
 }

 .icon_bg_3 {
   background: url('/img/icon_mast_star.png') no-repeat;
   background-size: 17px 17px;
 }

 .icon_bg_4 {
   background: url('/img/icon_teacher_good.png') no-repeat;
   background-size: 17px 17px;
 }

 .icon_bg_5 {
   background: url('/img/icon_pay_big.png') no-repeat;
   background-size: 17px 17px;
 }

 .icon_bg_6 {
   background: url('/img/icon_pay_big.png') no-repeat;
   background-size: 17px 17px;
 }

 .variable ul {
   background-color: #fff;
   list-style: none;
 }

 .variable ul li {
   height: 44px;
   background-color: #fff;
   padding: 0;
   margin: 0;
   margin-left: 33px;
   border-bottom: 1px solid #ddd;
   position: relative;
 }

 .fen .active {
   color: #ef3f41;
 }

 .fen .active span {
   background: url('/img/sorting_02.png') no-repeat center;
   background-size: 8px 6px;
 }

 .variable {
   position: fixed;
   width: 100%;
   background-color: rgba(0, 0, 0, .3);
   top: 75px;
   bottom: 0;
   z-index: 55;
 }

 .icon-text {
   font-size: 12px;
   margin-top: 16px;
   color: #888;
   text-align: center;
 }

 .nobanner {
   padding: 30px 0;
 }

 .icon {
   display: block;
   margin: 0 auto;
   width: 168px;
   height: 120px;
   background: url('/img/no_content_class.png');
   background-size: 168px 120px;
 }

 .dizi {
   float: right;
 }

 ul .right .student {
   font-size: 12px;
   margin-top: 8px;
   color: #333;
 }

  ul .right .ycost {
   font-size: 12px;
   color: #333;
   padding-left: 10px;
   text-decoration: line-through;
 }

  ul .right .cost {
   margin-top: 8px;
   color: #ef4040;
 }

  ul .right .cost::before {
   content: "团报价";
   display: inline-block;
   font-size: 12px;
   color: #ef4040;
   border: 1px solid #ef4040;
   text-align: center;
   border-radius: 5px;
   margin-right: 3px;
   line-height: 14px;
   padding: 0 3px;
   position: relative;
   top: -2px;
 }

 ul .right p:first-of-type {
   font-size: 12px;
   color: #333;
   padding-left: 18px;
   margin-top: 8px;
   background: url("/img/icon_clock_.png") no-repeat 0 0;
   background-size: 12px 12px;
   line-height: 12px;
 }

 ul .right .span:first-of-type {
   line-height: 12px;
   font-size: 12px;
   margin-top: 8px;
   color: #333;
   padding-left: 18px;
   background: url('/img/icon_school.png') no-repeat 0 0;
   background-size: 12px 12px;
 }

 ul .right h1 {
   font-size: 16px;
   color: #333;
   margin-bottom: 4px;
   max-width: 100%;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
   padding: 0;
   margin: 0;
 }

  ul .right {
   margin-left: 70px;
   height: 100%;
 }

 li img {
   width: 100%;
   width: 100%;
 }

 li .left {
   width: 60px;
   height: 60px;
   float: left;
   position: relative;
 }

 li .left span {
   position: absolute;
   bottom: 0;
   left: 0;
   height: 18px;
   width: 100%;
   background-color: rgba(255, 0, 0, .8);
   font-size: 12px;
   color: #fff;
   text-align: center;
   line-height: 18px;
 }

 li a {
   display: inline-block;
   width: 100%;
   height: 100%;
   position: relative;
   text-decoration: none;
 }

 li {
   height: 140px;
   margin-top: 10px;
   padding: 18px 12px 14px;
   background-color: #fff;
 }

 .banner::-webkit-scrollbar {
   display: none;
 }

 .banner {
   position: absolute;
   top: 75px;
   bottom: 0;
   left: 0;
   right: 0;
   overflow: auto;
 }

 .fen {
   position: relative;
 }
 /*.fen span {
  border: 4px solid transparent;
  border-top: 4px solid #333;
  line-height: 0;
  font-size: 0;
  margin-left: 6px;
  margin-top: -4px;
  vertical-align: middle;
}*/

 .fen span {
   display: inline-block;
   width: 8px;
   height: 6px;
   background: url('/img/sorting_01.png') no-repeat center;
   background-size: 8px 6px;
 }

 .fen p {
   float: left;
   width: 25%;
   text-align: center;
   line-height: 35px;
   font-size: 14%;
   color: #333;
   border-right: 1px solid #eee;
   position: relative;
 }

 .fen p:last-of-type {
   border-right: 0;
 }

 .fen {
   height: 35px;
   border-top: 1px solid #eee;
   border-bottom: 1px solid #eee;
   background-color: #fff;
 }

 .header {
   position: fixed;
   top: 0;
   width: 100%;
 }

 .search-btn {
   height: 25px;
   width: 35px;
   display: inline-block;
   background-color: #fff;
   line-height: 40px;
   transform: translateY(8px);
   border-radius: 0 15px 15px 0;
   background: #fff url("/img/search_page.png") no-repeat center;
   background-size: 15px 15px;
 }

 .search {
   padding: 5px 10px;
   width: 160px;
   margin-left: 10px;
   border-radius: 15px 0 0 15px;
   border: 0;
   outline: none;
 }

 .red {
   background-color: #ef3f41;
 }

 .nav {
   height: 40px;
 }

 .btn {
   font-size: 14px;
   background-color: transparent;
   border: 0;
   color: #fff;
   box-shadow: 0 0 1px transparent;
 }

 .mint-button:after {
   background-color: transparent;
 }
</style>


