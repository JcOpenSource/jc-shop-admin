<template>
  <h1 ref="title">
    {{ msg }}
  </h1>

  <div class="card">
    <button
      type="button"
      @click="count++"
    >
      count is {{ count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank"
    >create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">
    Click on the Vite and Vue logos to learn more
  </p>
</template>

<script lang="ts">
import { ref, defineComponent, PropType, onMounted } from 'vue'

interface User {
  name: string
  age: number
}

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    },
    abc: {
      type: Number,
      required: true
    },
    obj: {
      type: Object as PropType<User>,
      default: () => {}
    }
  },
  setup: (prpos) => {
    const count = ref(0)
    // prpos.obj?.age

    // 联合类型 null 或者 一个约束对象
    const foo = ref<{
      a: number
      b: string
    } | null>(null)
    foo.value = {
      a: 1,
      b: 'hellow'
    }

    // 定义模板类型
    // <HTMLHeadElement | null> 手动指定类型
    const title = ref<HTMLHeadElement | null>(null)

    // 组合式api 挂载完成之后执行
    onMounted(() => {
      // 拿到dom元素
      console.log(title.value)
    })

    return { count, title }
  }
})

// const props = defineProps<{
//   foo?: string
//   msg: string
//   bar?: number
// }>()

// const msg = '123123'

// const count = ref(0)
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
