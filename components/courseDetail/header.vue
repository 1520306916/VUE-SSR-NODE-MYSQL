<template>
  <div class="header">
    <span class="one"></span>
    <span class="two"></span>
    <span class="three"></span>
    <p>
      <span>已报56/90人</span>
      <span>浏览量132</span>
    </p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .header {
    background: url('/img/header_pic.jpg') no-repeat center/cover;
    height: 210px;
    width: 100%;
    position: relative;
  }
 .header>span {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, .1);
    position: absolute;
    top:12px;
  }
  .one {
    left:12px;  
    background: url('/img/icon_back_page.png') no-repeat center/cover ;
  }
  .two {
    right: 48px;
    background: url('/img/icon_phone.png') no-repeat center/cover;
  }
  .three {
    right :12px;
    background: url('/img/icon_more.png') no-repeat center/cover;
  }
  p  {
    bottom: 0;
    position: absolute;
    height: 35px;
    background-color: rgba(0, 0, 0, .1);
    width: 100%;
  }
  p span {
    display: inline-block;
    width: 50%;
    height: 100%;
    line-height: 35px;
    text-align: center;
    color:#fff;
    font-size:14px;
  }
</style>


