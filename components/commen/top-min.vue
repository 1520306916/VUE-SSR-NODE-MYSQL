<template>
  <div class="top-min">
    <h1>
      <img :src="items.imgurl" alt="" style="width:16px;">
      <span>{{items.after}}</span>
      <a href="#" class="top-right">{{items.before}}<img src="img/icon_more.jpg" alt="" style="width:10px" class="right-is"></a>
    </h1>
  </div>
</template>

<script>
export default {
  props:["items"]
}
</script>




<style scoped>
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
