<template>
  <component
    :is="component.component"
    :id="'component' + component.id"
    class="component"
    :style="getComponentStyle(component)"
    :component="component"
  />
</template>

<script setup lang="ts">
import type { CustomComponent } from '@/models'
import { getComponentStyle } from '@/utils/utils'

defineProps<{ component: CustomComponent }>()
</script>

<style lang="less" scoped>
div.component,
img.component,
span.component {
  @apply absolute;
}
</style>
