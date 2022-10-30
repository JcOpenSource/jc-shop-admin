<template>
  <div
    v-if="!$store.state.isCollapse"
    class="menu"
  >
    <el-icon><Shop /></el-icon>
    小李精选
  </div>
  <el-menu
    active-text-color="#FFCF4B"
    background-color="#2288E1"
    class="el-menu-vertical-demo"
    text-color="#fff"
    router
    :collapse="$store.state.isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="/">
      <el-icon><icon-menu /></el-icon>
      <span>主页</span>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <!-- <el-icon><location /></el-icon> -->
        <el-icon><Goods /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/list">商品列表</el-menu-item>
      <el-menu-item index="/product/classify">商品分类</el-menu-item>
      <el-menu-item index="/product/attr">商品规格</el-menu-item>
      <el-menu-item index="/product/replay">商品评论</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <el-icon><document /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/list">订单列表</el-menu-item>
      <el-menu-item index="/order/offline">offline</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/media">
      <el-icon><icon-menu /></el-icon>
      <span>媒体</span>
    </el-menu-item>
    <el-sub-menu index="5">
      <template #title>
        <el-icon><setting /></el-icon>
        <span>营销</span>
      </template>
      <el-menu-item index="5-3">商品管理</el-menu-item>
      <el-menu-item index="5-3">商品分类</el-menu-item>
      <el-menu-item index="5-3">商品规格</el-menu-item>
      <el-menu-item index="5-3">商品评论</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="6">
      <template #title>
        <el-icon><setting /></el-icon>
        <span>设置</span>
      </template>
      <el-menu-item index="5-3">商品管理</el-menu-item>
      <el-menu-item index="5-3">商品分类</el-menu-item>
      <el-menu-item index="5-3">商品规格</el-menu-item>
      <el-menu-item index="5-3">商品评论</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/permission">
      <template #title>
        <el-icon><setting /></el-icon>
        <span>维护</span>
      </template>
      <el-menu-item index="/permission/admin">管理员</el-menu-item>
      <el-menu-item index="/permission/role">角色</el-menu-item>
      <el-menu-item index="/permission/rule">规则</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  // Location,
  Setting
} from '@element-plus/icons-vue'
// import { ref } from 'vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// const isCollapse = ref(true)
</script>

<style lang="scss" scoped>
.menu{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  font-size: 3vh;
}
.el-menu {
  border-right: none;
}

// 侧边栏展示时候的宽度
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
