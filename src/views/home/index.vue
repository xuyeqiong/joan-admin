<template>
  <h1>登录</h1>
</template>

<script lang="ts" setup>
import { getLoginInfo } from '@api/common'
import { onMounted } from '@vue/runtime-core'

onMounted(() => {
  getLoginInfo().then(res => {
    console.log(res)
  })
})
</script>

<style lang="scss" scoped>
h1{
  color:$color;
}
</style>
