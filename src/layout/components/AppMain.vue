<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
@import '~@/style/mixin.scss';
@import '~@/style/variables.scss';

.app-main {
  position: relative;
  overflow: hidden;
  padding: 61px 20px 20px 20px;
  box-sizing: border-box;
}

</style>
