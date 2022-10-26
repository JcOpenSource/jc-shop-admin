<template>
  <h1>home</h1>
  <!-- $store 注册到全局根式实例的模板对象上去了 -->
  <p>{{ $store.state.count }}</p>
  <p>{{ store.state.count }}</p>
</template>

<script lang="ts" setup>

// import { useStore } from 'vuex'
// import { key } from '../../store'
// const store = useStore(key)

// 获取类型化的store实例
// 一切数据都可追踪
import { useStore } from '../../store'
const store = useStore()
console.log(store.state.count)

</script>

<style lang="scss" scoped></style>
