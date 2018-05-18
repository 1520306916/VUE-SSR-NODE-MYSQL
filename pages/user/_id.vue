<template>
  <h1>id:1231</h1>
</template>


<script>
  export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  }
}
</script>
