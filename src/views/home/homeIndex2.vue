<template>
  <h1 class="homec">
    home
  </h1>
  <!-- $store 注册到全局根式实例的模板对象上去了 -->
  <p>{{ $store.state.count }}</p>
  <p>{{ store.state.count }}</p>

  <img src="@/assets/vue.svg">

  <div class="box" />
</template>

<script lang="ts" setup>

// import { useStore } from 'vuex'
// import { key } from '../../store'
// const store = useStore(key)

// 获取类型化的store实例
// 一切数据都可追踪
import { useStore } from '../../store'
import User from '@/api/user'

const store = useStore()
console.log(store.state.count)

console.log(User)

</script>

<style lang="scss" scoped>
.box{
  width: 200px;
  height: 200px;
  background: url("@/assets/vue.svg");
}
.homec{
  color: $injectedColor;
}

</style>
