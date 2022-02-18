<template>
  <div
    class="app-wrapper"
    :class="[$store.getters.sidebarOpened ? 'openSideBar' : 'hideSideBar']"
  >
    <!--  左边 menu -->
    <sidebar
      :class="[$store.getters.sidebarOpened ? 'sidebar-container' : 'sidebar-container-mini']"
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
  overflow: hidden;
}
</style>
