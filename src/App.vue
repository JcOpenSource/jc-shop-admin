<template>
  <el-config-provider :locale="locale">
    <!-- 路由的渲染出口 -->
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const locale = zhCn
</script>

<style lang="scss" scoped>
// sass

</style>
