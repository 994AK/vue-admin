import { computed, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
export const useHamburger = () => {
  const store = useStore()
  const Hamburger = reactive({
    icon: computed(() => {
      return store.getters.sidebarOpened
    }),
    toggleClick() {
      console.log(1)
      store.commit('triggerSidebarOpened')
    }
  })

  return { ...toRefs(Hamburger) }
}
