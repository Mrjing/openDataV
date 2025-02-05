<template>
  <OCodeEditor
    ref="cm"
    :value="data"
    :mode="mode"
    :disabled="disabled"
    @update:value="dataChange"
    @change="codeChange"
  >
    <template #tool-bar>
      <div class="buttons">
        <x-icon class="item button" name="save" @click="handleSave" />
      </div>
    </template>
    <template #footer>
      <div class="footer">
        <div class="left">
          <span v-if="error" class="err-message"> 异常信息：{{ error }}</span>
          <span v-else class="info-message">{{ title ? `数据名称：${title}` : '' }}</span>
        </div>
        <div class="right">
          <div :class="['saved-status', savedStatus ? 'save' : 'unsave']">
            {{ savedStatus ? '已保存' : '未保存' }}
          </div>
          <div class="lang">JSON</div>
        </div>
      </div>
    </template>
  </OCodeEditor>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const savedStatus = ref<boolean>(true)

const props = withDefaults(
  defineProps<{
    data?: string
    title?: string
    mode?: 'debug' | 'use'
    height?: string
    error?: string
    disabled?: boolean
  }>(),
  {
    data: '',
    title: '',
    mode: 'use',
    height: '600px',
    disabled: false
  }
)

const cm = ref<HTMLElement | null>(null)
const emits = defineEmits<{
  (e: 'update:data', value?: any): void
  (e: 'change', value?: any): void
}>()
const codeChange = (_: string) => {
  savedStatus.value = false
}
const dataChange = (value: string) => {
  emits('update:data', value)
  emits('change', value)
}

const handleSave = () => {
  emits('update:data', props.data)
  emits('change', props.data)
  savedStatus.value = true
}
</script>
<style lang="less" scoped>
.buttons {
  display: flex;
  .item {
    display: block;
    margin-left: 5px;
    margin-right: 5px;
    &.data {
      width: 120px;
    }
    &.button {
      &:hover {
        transform: scale(1.5);
      }
    }
  }
}
.footer {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  div {
    margin-left: 5px;
    font-weight: 800;
    padding: 0 2px;
    border-radius: 2px;
  }
  .left {
    .err-message {
      color: #d03050;
    }
    .info-message {
      color: #2080f0;
    }
  }
  .right {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    color: #ffff;
    .lang {
      background-color: #2080f0;
    }
    .saved-status {
      &.save {
        background-color: #18a058;
      }
      &.unsave {
        background-color: #d03050;
      }
    }
  }
}
</style>
