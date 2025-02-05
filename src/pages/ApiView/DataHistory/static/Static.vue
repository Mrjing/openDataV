<template>
  <n-card title="静态数据" size="small">
    <n-input placeholder="请输入搜索条件" />
    <n-tabs>
      <n-tab-pane name="静态数据">
        <n-ol align-text>
          <n-li
            v-for="item in dataList"
            :key="item.id"
            v-contextmenu="() => dataListContextMenus(item.id)"
            class="data-item"
            @click="selectDataItem(item.id)"
            ><n-space>{{ item.name }}</n-space></n-li
          >
        </n-ol>
      </n-tab-pane>
      <n-tab-pane name="最近使用">
        <n-ol align-text>
          <n-li
            v-for="item in dataHistory"
            :key="item.id"
            v-contextmenu="() => dataHistoryContextMenus(item.id)"
            class="data-item"
            @click="selectDataItem(item.id)"
            ><n-space>{{ item.name }}</n-space></n-li
          >
        </n-ol>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>
<script setup lang="ts">
import { NCard, NInput, NLi, NOl, NSpace, NTabPane, NTabs } from 'naive-ui'
import { onMounted, ref } from 'vue'

import type { StaticDataDetail } from '@/api/data'
import { deleteStaticDataApi, getStaticDataListApi } from '@/api/data'
import useDataSnapShot from '@/apiView/hooks/snapshot'
import { eventBus, StaticKey } from '@/bus'
import type { ContextmenuItem } from '@/plugins/directive/contextmenu/types'
import { message } from '@/utils/message'
import { Logger } from '@/utils/utils'

const snapShot = useDataSnapShot('STATIC', true)
const dataHistory = ref<StaticDataDetail[]>([])
const dataList = ref<StaticDataDetail[]>([])
const loadStaticList = async () => {
  try {
    const resp = await getStaticDataListApi()
    if (resp.status === 200) {
      dataList.value = resp.data
    }
  } catch (err: any) {
    Logger.log(err || err.message)
  }
}

const selectDataItem = (id: string) => {
  eventBus.emit(StaticKey.STATIC_KEY, id)
}
const getHistory = async () => {
  const data = await snapShot.list()
  dataHistory.value = data.map((el) => el.data)
}

onMounted(async () => {
  await loadStaticList()
  await getHistory()
})

const removeData = async (id: string) => {
  try {
    const resp = await deleteStaticDataApi(id)
    if (resp.status === 200) {
      message.success('删除成功')
      await loadStaticList()
    }
  } catch (err) {
    return undefined
  }
}

const clearSnapshot = async () => {
  await snapShot.clear()
  await getHistory()
}

const dataListContextMenus = (id: string): Optional<ContextmenuItem[]> => {
  return [
    {
      text: '删除',
      subText: '',
      handler: () => removeData(id)
    }
  ]
}

const dataHistoryContextMenus = (_: string): Optional<ContextmenuItem[]> => {
  return [
    {
      text: '清除',
      subText: '',
      handler: () => clearSnapshot()
    }
  ]
}
</script>
<style lang="less">
.data-item {
  &:hover {
    transform: scale(1.01);
    color: #2d8cf0;
    cursor: pointer;
  }
}
</style>
