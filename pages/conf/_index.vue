<template>
  <div>
    <fix-header :title="title"></fix-header>
    <div class="context">
      <ul>
        <li>
          <a herf="#">
            支付密码
            <span>设置</span>
          </a>
        </li>
        <li>
          <a herf="#">常见问题</a>
        </li>
        <li>
          <a herf="#">意见反馈</a>
        </li>
        <li>
          <a herf="#">关于我们</a>
        </li>
      </ul>
    </div>
    <div class="btn">
      <mt-button type="danger" size="large">保存</mt-button>
    </div>
  </div>
</template>

<script>
import fixHeader from "~/components/commen/fixed-header.vue"
export default {
  data() {
    return {
      title: "设置"
    }
  },
  components: {
    fixHeader
  }
}
</script>

<style scoped>
span {
  font-size: 12px;
  color: #474747;
  float: right;
  background: url('/img/arrow_qian.png') no-repeat right center;
  background-size: 6px 7px;
  padding-right: 15px;
}

li {
  display: block;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  padding: 18px 12px;
  font-size: 14px;
  color: #474747;
}

.btn {
  padding: 0 15px 10px;
  margin-top: 25px;
}

.context {
  margin-top: 40px;
}
</style>


