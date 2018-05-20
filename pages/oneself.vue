<template>
  <div class="oneself">
    <div class="bg">
      <div class="header">
        <p>
          <img src="img/con_lft_tp.jpg" alt="">
        </p>
        <h2>小仙女豆豆</h2>
        <span>余额：¥102.32</span>
      </div>
    </div>

    <div class="self">
      <p>
        我的订单
        <nuxt-link to="/orderList/index">查看全部</nuxt-link>
      </p>
      <ul>
        <li>
          <nuxt-link to="/">
            代付款
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            待评价
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            已取消
          </nuxt-link>
        </li>
      </ul>
    </div>

    <ul class="sel">
      <li>
        <p>
          家长交流
          <nuxt-link to="/orderList/index">点击进入聊天室</nuxt-link>
        </p>
      </li>
      <li>
        <p>
          我的钱包
          <nuxt-link to="/myWallet/index">管理孩子信息</nuxt-link>
        </p>
      </li>
      <li>
        <p>
          我的优惠
          <nuxt-link to="/discount/index">试听课程</nuxt-link>
        </p>
      </li>
      <li>
        <p>
          设置
          <nuxt-link to="/conf/index">设置</nuxt-link>
        </p>
      </li>
    </ul>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/home/footer.vue"

export default {
  components: {
    Footer
  }
}
</script>


<style scoped>

.sel {
  margin-top: 12px;
  margin-bottom:65px;
}
.sel p a {
  float: right;
  font-size: 13px;
  padding-right: 20px;
  color: #999;
  background: url(/img/pay_go.png) no-repeat right center;
  background-size: 7px 8px;
  text-decoration: none;
  font-weight: 300;
}
.sel li:nth-of-type(1) p  {
  background: url('/img/icon_my_child.png') no-repeat 16px center;
   background-size: 24px 24px;
}

.sel li:nth-of-type(2) p  {
  background: url('/img/icon_my_pay.png') no-repeat 16px center;
   background-size: 24px 24px;
}
.sel li:nth-of-type(3) p  {
  background: url('/img/icon_listen.png') no-repeat 16px center;
   background-size: 24px 24px;
}
.sel li:nth-of-type(4) p  {
  background: url('/img/icon_set.png') no-repeat 16px center;
  background-size: 24px 24px; 
}
.sel li:nth-of-type(4) {
  margin-top: 12px;
  box-sizing: border-box;
}
li {
    background-color: #fff;
}
.sel p {
  height: 54px;
  line-height: 54px;
  border-bottom: 1px solid #ddd;
  padding-left: 48px;
  font-size: 14px;
  font-weight: bold;
  color: #666;
  padding-right: 12px;
}
.sel ul {
  margin-top: 12px;
  margin-bottom: 65px;
}

.self ul {
  height: 90px;
  list-style: none;
}

.self li {
  float: left;
  width: 33.33%;
  text-align: center;
  font-size: 13px;
}

.self ul li:nth-of-type(1) a {
  background: url('/img/icon_pay.png') no-repeat center 20px;
  background-size: 30px;
  padding-top: 60px;
  display: inline-block;
}

.self ul li:nth-of-type(2) a {
  background: url('/img/icon_ping.png') no-repeat center 20px;
  background-size: 30px;
  padding-top: 60px;
  display: inline-block;
}

.self ul li:nth-of-type(3) a {
  background: url('/img/icon_cancel.png') no-repeat center 20px;
  background-size: 30px;
  padding-top: 60px;
  display: inline-block;
}

a {
  text-decoration: none;
  color: #333;
}

.self {
  margin-top: 12px;
  background-color: #fff;
}

.self p {
  height: 57px;
  line-height: 57px;
  border-bottom: 1px solid #ddd;
  padding-left: 48px;
  font-size: 15px;
  background: url('/img/icon_my_order.png') no-repeat 16px center;
  background-size: 14px 16px;
  padding-right: 12px;
}

.self p a {
  float: right;
  font-size: 13px;
  padding-right: 20px;
  color: #333;
  background: url('/img/more_tip.png') no-repeat right center;
  background-size: 12px 10px;
  text-decoration: none;
}

.bg {
  height: 200px;
  background: #fff url(/img/my_bg_img.png) no-repeat 0 0;
  background-size: 100% 70%;
  position: relative;
}

.header {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.header p {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 4px #ddd;
  padding: 6px;
  margin: 4px 0;
  background: rgba(220, 220, 220, 0.4);
}

.header img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(200, 200, 200, 0.4);
}

.header h2 {
  font-size: 14px;
}

.header span {
  font-size: 12px;
}
</style>


