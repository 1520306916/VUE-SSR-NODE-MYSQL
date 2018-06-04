<template>
  <div>
    <div class="header">
      <div class="nav red">
        <mt-button icon="back" class="btn" @click="back">返回</mt-button>
        <input type="text" class="search">
        <span class="search-btn"></span>
      </div>
      <div class="fen">
        <p>位置
          <span></span>
        </p>
        <p>{{this.coursehomename || courselist[0].class_name}}
          <span></span>
        </p>
        <p>智能排序
          <span></span>
        </p>
        <p>筛选
          <span></span>
        </p>
      </div>
    </div>
    <div class="banner" v-if="!courselist[0]">
      123
    </div>

    <div class="banner" v-if="courselist[0]">
      <mt-loadmore ref="loadmore" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
        <ul>
          <li v-for="(item, index) in courselist" :key="index">
            <nuxt-link to="/">
              <div class="left">
                <img :src="'/img/teacherHead/'+item.teacher_actor" alt="">
                <span>{{item.teacherName}}</span>
              </div>
              <div class="right">
                <h1>{{item.name}}</h1>
                <span class="span">{{item.institutionsName}}({{item.campusesName}})</span>
                <p>{{item.open_date.substr(0,10)}}至{{item.end_date.substr(0,10)}}</p>
                <p class="cost">￥<span>{{item.mall_cost}}</span ><span class="ycost">￥{{item.cost}}</span></p>
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
import { mapState,mapMutations } from "vuex"
export default {
  asyncData({ store,route }) {
    return axios.get("http://127.0.0.1:5000/api/courselist?id="+route.query.id).then((res) => {
      store.commit('ADDcourselist', res.data)
    })
  },
  data() {
    return {
      list: 50,
      allLoaded: false,
      id: 15963589
    }
  },
  computed: {
    ...mapState([
      'courselist',
      'coursehomeid',
      'coursehomename'
    ])
  },
  methods: {
    loadBottom() {
        if(!this.courselist[0]) {
         this.allLoaded = true
        }

        axios.get("http://127.0.0.1:5000/api/courselist?id="+this.$route.query.id).then((res)=> {  
        res.data.forEach((index)=> {
          this.PUSHcourselist(index)
        })
        this.$refs.loadmore.onBottomLoaded()
      })
    },
    back() {
      this.$router.back(-1)
    },
    ...mapMutations(["PUSHcourselist"])
  }
}
</script>

<style scoped>
.dizi {
  float: right;
}
.right .student {
  font-size:12px;
  margin-top: 8px;
  color:#333;
}
.right .ycost {
  font-size:12px;
  color:#333;
  padding-left:10px;
  text-decoration:line-through ;
}
.right .cost {
  margin-top:8px;
  color:#ef4040;
}

.right .cost::before {
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
.right p:first-of-type {
  font-size:12px;
  color:#333;
  padding-left:18px;
  margin-top: 8px;
  background: url("/img/icon_clock_.png") no-repeat 0 0;
  background-size: 12px 12px;
  line-height: 12px;
}
.right .span:first-of-type{
  line-height: 12px;
  font-size:12px;
  margin-top: 8px;
  color:#333;
  padding-left: 18px;
  background: url('/img/icon_school.png') no-repeat 0 0;
  background-size: 12px 12px;
}
.right h1 {
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

.right {
  margin-left:70px;
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
  bottom:0;
  left:0;
  height: 18px;
  width: 100%;
  background-color: rgba(255, 0, 0, .8);
  font-size:12px;
  color:#fff;
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

.fen span {
  border: 4px solid transparent;
  border-top: 4px solid #333;
  line-height: 0;
  font-size: 0;
  margin-left: 6px;
  margin-top: -4px;
  vertical-align: middle;
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


