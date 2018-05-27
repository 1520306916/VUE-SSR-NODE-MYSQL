<template>
  <div>
    <fix-header :title="title"></fix-header>
    <div class="centext">
      <h3>当前余额(元)</h3>
      <h1>888.88</h1>
    </div>

    <div class="btn">
      <mt-button type="danger" size="large">保存</mt-button>
    </div>

    <div class="wen">
      <p>若需体现，查看余额明细，请下载<i>报哪好APP</i></p>
    </div>
  </div>
</template>

<script>
import fixHeader from "~/components/commen/fixed-header.vue"
export default {
  data() {
    return {
      title: "我的钱包"
    }
  },
  components: {
    fixHeader
  },
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
h3 {
  font-size:15px;
  color:#fff;
  display: block;
  height: 90px;
  text-align: center;
  line-height: 90px;
}
h1 {
  font-size: 60px;
  color:#fff;
  text-align: center;
  height: 150px;
}
.wen {
  font-size:12px;
  text-align: center;
}
.btn {
  padding: 0 15px 10px;
  margin-top:25px;
}
i {
  font-style: normal;
  color:#ef3f41;
}
.centext {
  height: 252px;
  background-color: #353c41;
  margin-top: 40px;
  padding-left: 8px;
}
.red {
  background-color: #ef3f41;
}
</style>

