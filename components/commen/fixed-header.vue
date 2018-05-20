<template>
  <mt-header :title="title" class="red" fixed>
    <mt-button icon="back" @click="back" slot="left">返回</mt-button>
    <mt-button icon="more" slot="right" @click="push"></mt-button>
  </mt-header>
</template>

<script>
export default {
  props:["title"],
   methods: {
    back() {
      this.$router.back(-1)
    },
    push() {
      this.$router.push("/conf/index")
    }
  }
}
</script>


<style scoped>
.red {
  background-color: #ef3f41;
}
</style>

