<template>
  <el-icon
    @click="$store.commit('setIsCollapse', !$store.state.isCollapse)"
  >
    <Expand v-if="$store.state.isCollapse" />
    <Fold v-else />
  </el-icon>
</template>

<script lang="ts" setup>
// import { useStore } from '@/store'

// const store = useStore()

// const changeCollapse = (flage:boolean) => {
//   store.commit('setIsCollapse', flage)
// }

</script>

<style lang="scss" scoped></style>
