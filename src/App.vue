<template>
  <div>
    <a
      href="https://vitejs.dev"
      target="_blank"
    >
      <img
        src="/vite.svg"
        class="logo"
        alt="Vite logo"
      >
    </a>
    <a
      href="https://vuejs.org/"
      target="_blank"
    >
      <img
        src="./assets/vue.svg"
        class="logo vue"
        alt="Vue logo"
      >
    </a>
  </div>
  <HelloWorld
    ref="helloWorld"
    msg="Vite + Vue"
    :abc="123"
  />
</template>

<!--
  1. lang="ts"
  2. props 的类型推导需要用 defineComponent() 来包装组件
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
// const props = defineProps({
//   msg: { type: String, required: true },
//   abc: { type: Number, required: true }
// })

// props.msg = '123'
// props.abc = 123

// 组件实例
// InstanceType 根据组件拿到实例类型
const helloWorld = ref<InstanceType<typeof HelloWorld> | null>(null)

// 挂载完成之后 输出组件信息
onMounted(() => {
  console.log(helloWorld.value)
  console.log(helloWorld.value?.msg)
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
