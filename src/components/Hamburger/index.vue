<template>
  <div class="hamburger-container" @click="toggleClick">
    <el-icon class="hamburger">
      <ArrowLeftBold v-if="icon" />
      <ArrowRightBold v-else />
    </el-icon>
  </div>
</template>

<script setup>
import { ArrowRightBold, ArrowLeftBold } from '@element-plus/icons'
import { useHamburger } from './use/Hamburger'

const { icon, toggleClick } = useHamburger()
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
