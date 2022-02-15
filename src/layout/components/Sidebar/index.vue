<template>
  <div>
    <div class="logo-container">
      <el-avatar
        class="logo-img"
        :size="35"
        shape="square"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
      >
      </el-avatar>
      <h2 class="logo-title" v-if="$store.getters.sidebarOpened">
        后台管理系统
      </h2>
    </div>
    <el-scrollbar >
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu.vue'
</script>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:14px;

  .logo-title {
    font-size: 16px;
    margin-left: 10px;
  }
}

.el-scrollbar {
  padding-left: 5px;
  padding-top: 10px;
}
</style>
