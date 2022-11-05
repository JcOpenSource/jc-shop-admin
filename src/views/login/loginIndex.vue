<template>
  <div class="login-container">
    <el-form
      ref="ruleFormRef"
      :model="user"
      :rules="rules"
      class="ruleForm"
      :size="formSize"
      status-icon
      @submit.prevent="submitForm(ruleFormRef)"
    >
      <div class="tilte">
        <h1>小李心选</h1>
      </div>
      <el-form-item
        label=""
        prop="name"
      >
        <el-input v-model="user.account">
          <template #prefix>
            <el-icon><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item
        label=""
        prop="password"
      >
        <el-input
          v-model="user.pwd"
          type="password"
          show-password
        >
          <template #prefix>
            <el-icon><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item
        label=""
        prop="imgCode"
      >
        <div class="imgcode-wrap">
          <el-input v-model="user.imgCode">
            <template #prefix>
              <el-icon><Key /></el-icon>
            </template>
          </el-input>
          <!-- <div id="imgCodeRef" class="imgcodecss"></div> -->
          <img
            :src="imgCodeSrc"
            alt="看不清？点击刷新"
            class="vercode"
            @click="changeVerCode"
          >
        </div>
      </el-form-item>

      <el-button
        type="primary"
        class="but-class"
        :loading="loading"
        native-type="submit"
      >
        登录
      </el-button>

      <!--
        回车 提交 native-type="submit" 并组织表单默认的提交代码行为
        <el-form-item class="buttom">
        <el-button
          type="primary"
          @click="submitForm(ruleFormRef)"
        >
          登录
        </el-button>

       <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item> -->
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
// import { getCaptcho } from '@/api/webutil'
// import type { ICaptcho } from '@/api/types/webutil'

import { getCaptcha, login } from '@/api/common'

// useRouter 路由实例
// useRoute 当前路由对象
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'

const store = useStore()
const router = useRouter()
const route = useRoute()
const loading = ref(false)
const imgCodeSrc = ref('') // 响应式数据
// const imgCodeRef = ref('')

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const user = reactive({
  account: 'admin-ljc',
  pwd: '123',
  imgCode: 'vvdd'
})

// 表单组件规则
const rules = reactive<FormRules>({
  account: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: 'Length should be 3 to 20', trigger: 'blur' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 20, message: 'Length should be 3 to 20', trigger: 'blur' }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  loading.value = true
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      console.log(user)
      console.log(user.account)
      console.log(user.pwd)
      console.log(user.imgCode)
      console.log('data submited!')
    } else {
      console.log('error submit!', fields)
    }
  })

  // 登录
  // promise 无论成功或者失败都会执行finally
  const data = await login(user).finally(() => {
    loading.value = false
  })
  console.log(data)
  store.commit('setUserInfo', {
    ...data.user_info,
    token: data.token
  })

  // 代码需要做容错处理
  let redirect = route.query.redirect ?? '/'
  // 不要有登录记录
  if (typeof redirect !== 'string') {
    redirect = '/'
  }
  router.replace(redirect)
}

const changeVerCode = function () {
  console.log('changeVerCode')
  loadCaptcha()
}

// const resetForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return
//   formEl.resetFields()
// }

// 获取验证码
const loadCaptcha = async () => {
  const data = await getCaptcha()
  console.log(data)
  imgCodeSrc.value = URL.createObjectURL(data) // 用于创建 URL 的 File 对象、Blob 对象或者 MediaSource 对象。
  console.log(imgCodeSrc.value)
}

onMounted(() => {
  // ElMessage.error('Oops, this is a error message.')
  loadCaptcha()
  // const box = document.querySelector('#imgCodeRef') as HTMLElement
  // getCaptcho().then(data => {
  //   box.innerHTML = data.data
  //   console.log(data)
  // })
})

</script>

<style scoped>
.login-container{
  background-color: #2288E1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ruleForm{
  background-color:#fff;
  width: 28vw;
  padding: 30px;
  border-radius: 10px;
}
.but-class{
  width: 100%;
}
.tilte{
  color: #2288E1;
  text-align: center;
  padding-bottom: 3vh;
}
.imgcode-wrap{
  display: flex;
  align-items: center;
  justify-content: center;
}
.imgcodecss{
  padding-top: 1vw;
  width: 10vw;
  padding-left: 1vw;
}
.vercode{
  padding-left: 1vw;
  width: 10vw;
  font-size: 1vw;
}
</style>
