// 组件拥有内部状态
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      count: 0
    }
  },
  // JSX 必须与一个根节点
  render () {
    return (
      <div>
        <div> { this.msg } </div>
        <div> { this.count } </div>
      </div>
    )
  }
})
