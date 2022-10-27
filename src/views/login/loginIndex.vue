<template>
  <h1>login</h1>
</template>

<script lang="ts" setup>
import { getLoginInfo } from '@/api/common' // 加载的是值
import type { ILoginInfo } from '@/api/types/common' // 加载的是类型
import { onMounted, ref } from 'vue'

// 方式一：直接赋值变量类型
// const list = ref<string[]>([])

// 方式二：导出接口类型
const list = ref<ILoginInfo['slide']>([])

onMounted(() => {
  getLoginInfo().then(data => {
    // res 是 axios 包装的响应对象 data status
    // res.data 才是 后端真实返回的数据
    console.log(data.logo_square)
    list.value = data.slide
    console.log(list.value)
  })

  // // 直接结构
  // getLoginInfo().then(({ data }) => {
  //   console.log(data.logo_rectangle)
  // })
})
</script>

<style scoped></style>
