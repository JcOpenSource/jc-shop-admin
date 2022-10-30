<template>
  <el-icon @click="toggleFullScreen">
    <FullScreen />
  </el-icon>
</template>

<script lang="ts" setup>
// toggle 触发
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
</script>

<style lang="scss" scoped></style>
