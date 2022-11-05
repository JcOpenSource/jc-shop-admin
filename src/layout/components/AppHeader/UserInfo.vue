<template>
  <el-icon style="padding-right:1vw;"><Bell /></el-icon>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      {{ $store.state.userInfo?.account }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLogou">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
// import { useStore } from '@/store'
// const store = useStore()

import { ElMessage, ElMessageBox } from 'element-plus'
import { logout } from '@/api/common'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

// const admin = ref<string>(store.state.userInfo?.account)
const router = useRouter()
const store = useStore()

const handleLogou = async () => {
  // 退出提示
  //  ElMessageBox.confirm promise
  ElMessageBox.confirm('确认退出？', '退出提示', {
  // 点击确定继续往后走
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning'
  }).then(async () => {
    // 点击确定继续往后走
    const data = await logout()
    console.log('handleLogou', data)
    if (data.status === 200) {
      // 清除用户登录信息
      store.commit('setUserInfo', null)

      ElMessage({
        type: 'success',
        message: '退出成功！'
      })
      // 跳转登录页
      router.replace({
        name: 'login'
      })
    }
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '已取消退出'
    })
  })
  // 确认发出退出请求

  // 跳转到登录页
}
</script>

<style lang="scss" scoped></style>
