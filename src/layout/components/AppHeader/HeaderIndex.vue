<template>
  <div class="headerLayout">
    <div class="headerLayout-left">
      <ToggleSidebarVue style="padding-right:1vw;" />
      <HeaderBreadcrumbVue />
    </div>
    <div class="headerLayout-right">
      <MenuSearchVue style="padding-right:1vw;" />
      <FullScreenVue style="padding-right:1vw;" />
      <UserInfoVue />
    </div>
  </div>
</template>

<script lang="ts" setup>
import FullScreenVue from './FullScreen.vue'
import ToggleSidebarVue from './ToggleSidebar.vue'
import HeaderBreadcrumbVue from './HeaderBreadcrumb.vue'
import MenuSearchVue from './MenuSearch.vue'
import UserInfoVue from './UserInfo.vue'
</script>

<style lang="scss" scoped>
.headerLayout{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  &-left{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  &-right{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
