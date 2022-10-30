<template>
  <el-container>
    <el-aside>
      <AppMenuVue />
    </el-aside>
    <el-container>
      <el-header>
        <HeaderIndexVue />
      </el-header>
      <el-main>
        <!-- 子路由渲染出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import AppMenuVue from './components/AppMenu.vue'
import HeaderIndexVue from './components/AppHeader/HeaderIndex.vue'
</script>

<style lang="scss" scoped>
.el-aside{
  background-color: #2288E1;
  color: #fff;
  height: 100vh;
  width: auto;
}
.el-main{
  background-color: #EBF2F9;
  color: #333;
}
.el-header{
  background-color: #fff;
  color: #333;
}
</style>
