<template>
  <n-card>
    <div class="static-data">
      <n-input v-model:value="formData.title" class="title">
        <template #prefix>
          <x-icon name="code" />
        </template>
      </n-input>
      <n-space>
        <n-button-group class="save">
          <n-button type="success" @click="run">运行</n-button>
        </n-button-group>
      </n-space>
      <n-space>
        <n-button-group class="save">
          <n-button @click="formData.id ? handleUpdate() : handleSave()">保存</n-button>
        </n-button-group>
      </n-space>
    </div>
    <n-card>
      <n-tabs>
        <n-tab-pane name="脚本">
          <Editor :data="formData" class="content" @update:data="scriptChangeHandler" />
        </n-tab-pane>
        <n-tab-pane name="入参">
          <OCodeEditor v-model:value="params" @update:value="paramsChange" />
        </n-tab-pane>
      </n-tabs>
      <n-divider title-placement="left"> 输出 </n-divider>
      <OCodeEditor
        v-model:value="stdOut"
        class="content"
        :disable="true"
        @update:value="scriptChangeHandler"
      />
    </n-card>
  </n-card>
</template>

<script lang="ts" setup>
import { NButton, NButtonGroup, NCard, NDivider, NInput, NSpace, NTabPane, NTabs } from 'naive-ui'
import { reactive, ref } from 'vue'

import {
  createAfterScriptApi,
  getAfterScriptApi,
  updateAfterScriptApi
} from '@/api/data/afterScript'
import type { AfterScriptDetail } from '@/api/data/type'
import { StaticKey, useEventBus } from '@/bus'
import type { AfterScript } from '@/types/component'
import { makeFunction } from '@/utils/data'
import { message } from '@/utils/message'
import { Logger } from '@/utils/utils'

import Editor from './Editor.vue'

const formData = reactive<{
  id?: string
  title: string
  code: any
  type: string
}>({
  id: '',
  title: '' || '',
  code: '',
  type: 'Javascript'
})

const params = ref<string>(JSON.stringify({}, null, '\t'))
const paramsChange = (content: string) => {
  params.value = content
}

const scriptChangeHandler = async (script: AfterScript) => {
  formData.code = script.code
  formData.type = script.type
}

useEventBus(StaticKey.SRCIPT_KEY, async (id) => {
  await loadAfterScript(id as string)
})

const stdOut = ref<string>('')

const run = () => {
  const afterCallback = formData.code
    ? makeFunction('Javascript', formData.code, ['resp', 'options'], false)
    : undefined
  if (afterCallback && afterCallback.handler) {
    try {
      stdOut.value = JSON.stringify(afterCallback.handler(JSON.parse(params.value), {}), null, '\t')
    } catch (err: any) {
      stdOut.value = err.message || err
    }
  } else {
    stdOut.value = JSON.stringify(formData.code, null, '\t')
  }
}

const loadAfterScript = async (id: string) => {
  try {
    const resp = await getAfterScriptApi(id)
    if (resp.status === 200) {
      const data = resp.data
      formData.id = data.id
      formData.id = data.id
      formData.title = data.name
      formData.code = data.code
      formData.type = data.type
    }
  } catch (err: any) {
    Logger.log(err || err.message)
  }
}
const handleSave = async () => {
  try {
    const resp = await createAfterScriptApi({
      code: formData.code,
      name: formData.title || '未命名',
      type: formData.type
    })
    if (resp.status === 201) {
      const data = resp.data as AfterScriptDetail
      formData.id = data.id
      formData.title = data.name
      formData.code = data.code
      formData.type = data.type
      Logger.info('数据保存成功')
    } else {
      message.warning('数据保存失败')
    }
  } catch (err) {
    message.warning('数据保存失败')
  }
}
const handleUpdate = async () => {
  try {
    const resp = await updateAfterScriptApi(formData.id!, {
      code: formData.code,
      name: formData.title || '未命名',
      type: formData.type
    })
    if (resp.status === 200) {
      Logger.info('数据更新成功')
    } else {
      message.warning('数据更新失败')
    }
  } catch (err) {
    message.warning('数据更新失败')
  }
}
</script>

<style lang="less" scoped>
.static-data {
  display: flex;
  .selected {
    width: 300px;
  }
}
</style>
