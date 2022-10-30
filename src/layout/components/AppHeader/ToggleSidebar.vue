<template>
  <el-icon
    @click="handleCollapse"
  >
    <Expand v-if="$store.state.isCollapse" />
    <Fold v-else />
  </el-icon>
</template>

<script lang="ts" setup>
// 在setup中使用store
import { useStore } from '@/store'

const store = useStore()

const handleCollapse = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>

<style lang="scss" scoped></style>
