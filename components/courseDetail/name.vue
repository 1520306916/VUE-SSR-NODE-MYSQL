<template>
  <div class="name">
    <div>
      <p>永春拳QFX--007</p>
      <p>￥60
        <span>￥60</span>
      </p>
      <div class="img"></div>
    </div>
    <div class="message">
      <ul>
        <li>
          <span>随时退班</span>
        </li>
        <li>
          <span>免费试听</span>
        </li>
      </ul>
    </div>
    <div class="messages">
      <span>2017-08-09</span>
      <span>09:30-10:30</span>
      前报名，享9.8折优惠
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.messages>span {
  margin-right: 5px;
  margin-left:5px;
}
.messages::before {
    content: "\5957";
    display: inline-block;
    width: 14px;
    height: 14px;
    line-height: 14px;
    background: #ef4040;
    font-size: 10px;
    color: #fff;
    border-radius: 3px;
    text-align: center;
    position: relative;
    top: -1px;
}
.messages {
  width: 100%;
  height: 40px;
  padding: 12px 0 12px 15px;
  background-color: rgb(250, 250, 250);
  font-size:12px;
  color:#333;
}

.name {
  position: relative;
  background-color: #fff;
}

.img {
  background: url('/img/zhao.png') no-repeat center/cover;
  background-size: 85px 68px;
  width: 85px;
  height: 68px;
  position: absolute;
  right: 20px;
  top: 3px;
}

p {
  display: inline-block;
  width: 100%;
  height: 35px;
  line-height: 35px;
  padding-left: 20px;
  color: #333;
  font-size: 14px;
}

.message {
  width: 100%;
  height: 40px;
  padding: 12px 0 12px 15px;
  background-color: rgb(250, 250, 250);
  border-bottom: 1px solid #dcdcdc;
}

ul {
  list-style: none;
}

li {
  float: left;
  font-size: 14px;
  line-height: 16px;
  margin-left: 5px;
  background: url('/img/icon_class_clas.png') no-repeat 0 1px;
  background-size: 14px 14px;
  padding-left: 18px;
}
</style>


