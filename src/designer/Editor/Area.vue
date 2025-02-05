<template>
  <div
    v-if="hidden"
    v-contextmenu.stop="contextMenus"
    :style="{
      left: left + 'px',
      top: top + 'px',
      width: width + 'px',
      height: height + 'px'
    }"
    class="area"
  ></div>
</template>

<script setup lang="ts">
import type { WatchStopHandle } from 'vue'
import { computed, onUnmounted, watch } from 'vue'

import useActionState from '@/designer/state/actions'
import useCanvasState from '@/designer/state/canvas'
import type { ContextmenuItem } from '@/plugins/directive/contextmenu/types'
import type { Position } from '@/types/common'

const actionState = useActionState()
const canvasState = useCanvasState()
const hidden = computed<boolean>(() => actionState.hidden)
const left = computed<Position>(() => actionState.style.left)
const top = computed<Position>(() => actionState.style.top)
const width = computed<Position>(() => actionState.style.width)
const height = computed<Position>(() => actionState.style.height)

const stopWatch: WatchStopHandle = watch(
  () => canvasState.curComponent,
  () => {
    if (actionState.components.length > 0) {
      actionState.setHidden()
    }
  }
)

const compose = () => {
  actionState.compose()
  actionState.setHidden()
}

const handleFlushLeft = () => {
  actionState.flushLeft()
  actionState.setHidden()
}

const handleFlushRight = () => {
  actionState.flushRight()
  actionState.setHidden()
}

const handleFlushTop = () => {
  actionState.flushTop()
  actionState.setHidden()
}
const handleFlushBottom = () => {
  actionState.flushBottom()
  actionState.setHidden()
}

const handleFlushRow = () => {
  actionState.flushRow()
  actionState.setHidden()
}

const handleFlushColumn = () => {
  actionState.flushColumn()
  actionState.setHidden()
}

const batchDelete = () => {
  actionState.batchDeleteComponent(actionState.components)
  actionState.setHidden()
}

const contextMenus = (): ContextmenuItem[] => {
  return [
    {
      text: '组合',
      subText: '',
      disable: !actionState.canCompose,
      handler: compose
    },
    { divider: true },
    {
      text: '删除',
      subText: 'Ctrl + Delete',
      disable: actionState.components.length <= 0,
      handler: batchDelete
    },
    { divider: true },
    {
      text: '左对齐',
      subText: '',
      handler: handleFlushLeft
    },
    {
      text: '右对齐',
      subText: '',
      handler: handleFlushRight
    },
    {
      text: '顶对齐',
      subText: '',
      handler: handleFlushTop
    },
    {
      text: '底对齐',
      subText: '',
      handler: handleFlushBottom
    },
    { divider: true },
    {
      text: '水平对齐',
      subText: '',
      handler: handleFlushRow
    },
    {
      text: '垂直对齐',
      subText: '',
      handler: handleFlushColumn
    }
  ]
}

onUnmounted(() => {
  if (stopWatch) {
    stopWatch()
  }
})
</script>

<style lang="less" scoped>
.area {
  @apply border border-solid border-blue-400 absolute;
}
</style>
