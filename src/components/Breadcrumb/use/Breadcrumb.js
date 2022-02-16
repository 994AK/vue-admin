import { watch, toRefs, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

export const useBreadcrumb = () => {
  const route = useRoute()
  const router = useRouter()
  const store = useStore()

  const breadcrumbData = reactive({
    breadcrumbData: [],
    linkHoverColor: store.getters.cssVar.menuBg,
    // 路由标准化
    getBreadcrumbData() {
      // route.matched获取当前路由的标准化路由记录
      breadcrumbData.breadcrumbData = route.matched.filter(
        (item) => item.meta && item.meta.title
      )
    },
    onLinkClick(item) {
      router.push(item.path)
    }
  })

  watch(
    route,
    () => {
      breadcrumbData.getBreadcrumbData()
    },
    { immediate: true }
  )

  return { ...toRefs(breadcrumbData) }
}
