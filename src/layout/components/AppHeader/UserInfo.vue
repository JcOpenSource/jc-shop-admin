<template>
  <el-icon style="padding-right:1vw;"><Bell /></el-icon>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ $store.state.userInfo?.account }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
// import { useStore } from '@/store'
// const store = useStore()

// const admin = ref<string>(store.state.userInfo?.account)

</script>

<style lang="scss" scoped></style>
