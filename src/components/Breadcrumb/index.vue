<template>
  <el-breadcrumb separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :key="item.path"
      >
        <!-- 不可点击项    -->
        <span class="no-redirect" v-if="index === breadcrumbData.length - 1">{{
          item.meta.title
        }}</span>
        <!-- 可点击项 -->
        <span class="redirect" v-else @click="onLinkClick(item)">{{
          item.meta.title
        }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { useBreadcrumb } from './use/Breadcrumb'

const { breadcrumbData, onLinkClick, linkHoverColor } = useBreadcrumb()
</script>

<style lang="scss" scoped>
.redirect {
  color: #666;
  font-weight: 600;
  cursor: pointer;
}

.redirect:hover {
  color: v-bind(linkHoverColor);
}

.no-redirect {
  cursor: not-allowed;
}
</style>
