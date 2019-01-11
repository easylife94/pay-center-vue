<template>
  <span>test say hi</span>
</template>

<script>
import qs from 'qs'

export default {
  name: 'Test',
  mounted () {
    console.log(1)
    let data = qs.stringify({
      name: 'cw'
    })
    this.axios
      .post('/hi', data)
      .then(response => {
        console.log(response)
      })
  }
}
</script>

<style scoped>

</style>
