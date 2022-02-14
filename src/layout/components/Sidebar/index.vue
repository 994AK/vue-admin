<template>
  <div>
    <div  class='logo-container'>
      <el-avatar
        class='logo-img'
        size="14"
        shape="square"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
      >
      </el-avatar>

      <h1 class='logo-title'  v-if='$store.getters.sidebarOpened'>
        后台管理系统
      </h1>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu.vue'
import {} from 'vue'
</script>

<style lang="scss" scoped>
.logo-container{
  display: flex;
  justify-content: center;
  align-items: center;

  .logo-title {
    font-size: 20px;
    margin-left: 10px;
  }
}

</style>
