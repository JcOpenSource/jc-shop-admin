// setup
import { defineComponent, ref } from 'vue'

interface PropsType {
  msg: string
}

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup () {
    const count = ref(0)
    return (props: PropsType) => (
      <div>
        <p>{count.value}</p>
        <p>{props.msg}</p>
      </div>
    )
  }
})
