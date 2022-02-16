<template>
  <el-breadcrumb separator="/">
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
  </el-breadcrumb>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const breadcrumbData = ref([])
const route = useRoute()
const router = useRouter()
const store = useStore()
const getBreadcrumbData = () => {
  // route.matched获取当前路由的标准化路由记录
  breadcrumbData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  )
}

const onLinkClick = (item) => {
  router.push(item.path)
}

watch(
  route,
  () => {
    getBreadcrumbData()
  },
  { immediate: true }
)

const linkHoverColor = ref(store.getters.cssVar.menuBg)
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
