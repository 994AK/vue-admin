<template>
  <!--展示外部图标-->
  <div
    v-if="isExternal"
    :style="styleExternal"
    class="svg-external-icon svg-icon"
    :class="className"
  ></div>
  <!--展示内部图标-->
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href='iconName'/>
  </svg>
</template>

<script setup>
import { isExternal as external } from '@/utils/validate'
import { defineProps, computed } from 'vue'

const props = defineProps({
  // icon 图标
  icon: {
    type: String,
    required: true
  },
  // 图标类型
  className: {
    type: String,
    default: ''
  }
})

/* 判断当前图标是否为外部图标 */
const isExternal = computed(() => external(props.icon))

/* 外部图标样式 */
const styleExternal = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))

/* 内部图标 */
const iconName = computed(() => `#icon-${props.icon}`)
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill:currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
