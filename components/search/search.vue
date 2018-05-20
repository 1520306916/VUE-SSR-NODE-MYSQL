<template>
  <div>
    <mt-header class="red" fixed>
      <mt-button icon="back" @click="back" slot="left">返回</mt-button>
    </mt-header>
    <div class="context"></div>
    <mt-search v-model="value" cancel-text="取消" placeholder="搜索" :autofocus="true">
    </mt-search>
  </div>
</template>


<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    back() {
      this.$router.back(-1)
    }
  }
}
</script>

<style scoped>
.red {
  background-color:#ef3f41;
}
.context {
  margin-top:40px;
}

</style>

