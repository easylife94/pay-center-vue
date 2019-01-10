<template>
  <span>test say hi</span>
</template>

<script>
import axios from 'axios'

axios.post('http://localhost/hi')
  .then(response => {
    console.log(response)
  })
export default {
  name: 'Test'
}
</script>

<style scoped>

</style>
