<template>
  <div
    class="app-wrapper"
    :class="[$store.getters.sidebarOpened ? 'openSideBar' : 'hideSideBar']"
  >
    <!--  左边 menu -->
    <sidebar
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg}"
    ></sidebar>
    <!--  顶部 navBer  -->
    <div class="main-container">
      <div class="fixed-header">
        <navbar />
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain'

import variables from '@/style/variables.scss'

import {} from 'vue'

console.log(variables)
</script>

<style lang="scss" scoped>
@import '~@/style/mixin.scss';
@import '~@/style/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sidebarDuration};
}

.hideSideBar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
