<template>
  <el-icon
    @click="$store.commit('setIsCollapse', !$store.state.isCollapse)"
  >
    <Expand v-if="$store.state.isCollapse" />
    <Fold v-else />
  </el-icon>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped></style>
