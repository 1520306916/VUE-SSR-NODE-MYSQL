<template>
  <mt-swipe :auto="4000" class="height">
    <mt-swipe-item 
    v-for="(item, index) in imgs" 
    :key="index"
    class="banner" 
    :style="{ 'background-image': `url(${item})` }">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        "img/round01.jpg",
        "img/banner_test.jpg",
        "img/round01.jpg"
      ]
    }
  }
}
</script>


<style scoped>
.height {
  margin-top: 40px;
  height: 140px;
}

.banner {
  background-size: 100% 100%!important
}
</style>
