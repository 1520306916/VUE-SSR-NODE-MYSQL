<template>
  <div>
    <Header></Header>
    <Name></Name>
  </div>
</template>

<script>
import Header from '~/components/courseDetail/header.vue'
import Name from '~/components/courseDetail/name.vue'
export default {
  asyncData() {
    
  },
  components : {
    Header,
    Name
  }
}
</script>

