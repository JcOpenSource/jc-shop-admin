<template>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>

  <el-date-picker
    v-model="value2"
    type="date"
    placeholder="Pick a day"
    size="large"
  />

  <el-icon><InfoFilled /></el-icon>
  <el-icon><Promotion /></el-icon>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value2 = ref('')
</script>

<style lang="scss" scoped>
</style>
