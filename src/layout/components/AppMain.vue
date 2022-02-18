<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '~@/style/mixin.scss';
@import '~@/style/variables.scss';

.app-main {
  margin: 30px;
  //border: 1px solid red;
}
</style>
