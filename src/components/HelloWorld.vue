<template>
  <h1 ref="title">
    {{ props.msg }}
  </h1>

  <div class="card">
    <button
      type="button"
      @click="increment"
    >
      count is {{ count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

//  defineProps, defineEmits 编译宏

const props = defineProps<{
  msg: {
    type: String,
    required: true,
    default: ''
  },
  abc: {
    type: Number,
    required: true,
    default: 0
  }
}>()

const count = ref(100)
// 数据会自动暴露出来给模板使用

// 对外发布事件
const emit = defineEmits(['increment'])

const increment = () => {
  console.log(props.msg)
  count.value++
  emit('increment')
}

</script>

<!-- 选项式API  组合式API 在setup函数当中-->
<!-- <script lang="ts">
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
</script> -->

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
