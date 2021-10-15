<template>about</template>
<script>
import { defineComponent } from 'vue'
import { apiGetDemo } from '@/api/index.js'

export default defineComponent({
  setup() {
    apiGetDemo()
      .then((res) => {
        console.log('res: ', res)
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }
})
</script>
