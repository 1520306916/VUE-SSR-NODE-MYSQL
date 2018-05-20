<template>
  <div class="footer">
    <p class="top"></p>
    <div class="tabs">
      <ul>
        <li class="tabs_one">
          <nuxt-link to="/"></nuxt-link>
          <span>首页</span>
        </li>
        <li class="tabs_two">
          <nuxt-link to="/classify"></nuxt-link>
          <span>分类</span>
        </li>
        <li class="tabs-three">
          <nuxt-link to="/"></nuxt-link>
          <span>购物车</span>
        </li>
        <li class="tabs-four">
          <nuxt-link to="/oneself"></nuxt-link>
          <span>我的</span>
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
.footer {
  height: 65px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}

.top {
  height: 10px;
  background: #eee;
  border-bottom: 1px solid #ddd;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  padding-bottom: 7px;
}

li {
  width: 25%;
  height: 100%;
  float: left;
  position: relative;
  background-color: #fff;
  display: block;
}

.tabs {
  height: 100%;
}

a {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.tabs_one a{
  background: url("/img/icon_tab_home.png") no-repeat center 10px;
  background-size: 19px 20px;
}

.tabs_two a{
  background: url(/img/icon_tab_class.png) no-repeat center 10px;
  background-size: 19px 20px;
}

.tabs-three a{
  background: url(/img/icon_cart.png) no-repeat center 10px;
  background-size: 19px 20px;
}

.tabs-four a{
  background: url(/img/icon_tab_my.png) no-repeat center 10px;
  background-size: 19px 20px;
}

span {
  width: 100%;
  position: absolute;
  bottom: 10px;
  left: 0;
  font-size: 12px;
  color: #333;
  text-align: center;
}
</style>

