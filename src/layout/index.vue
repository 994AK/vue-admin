<template>
  <div class="app-wrapper">
    <!--  左边 menu -->
    <sidebar class="sidebar-container"></sidebar>
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
import {} from 'vue'
</script>

<style lang="scss" scoped></style>
