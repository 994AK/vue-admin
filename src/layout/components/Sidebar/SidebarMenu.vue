<template>
  <el-menu
    :uniqueOpened="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!--  子集 menu -->
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航1</span>
      </template>
      <el-menu-item index="1-1">选择1</el-menu-item>
      <el-menu-item index="1-2">选择2</el-menu-item>
    </el-submenu>
    <!--  具体菜单  -->
    <el-menu-item index="2">
      <i class="el-icon-location"></i>
      <template #title>导航4</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRoutes, generateMenus } from '@/utils/route'
const router = useRouter()
const routes = computed(() => {
  const fRoutes = filterRoutes(router.getRoutes())
  return generateMenus(fRoutes)
})

console.log(JSON.stringify(routes.value))
</script>

<style lang="scss" scoped></style>
