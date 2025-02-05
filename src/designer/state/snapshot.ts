import { cloneDeep } from 'lodash-es'
import { reactive } from 'vue'

import type { CustomComponent } from '@/models'
import type { ComponentDataType } from '@/types/component'
import type { CanvasStyleData, SnapData } from '@/types/storeTypes'
import type { StoreComponentData } from '@/utils/db'
import { snapshotDb } from '@/utils/db'

class SnapshotState {
  public state = reactive<SnapData>({
    latestSnapshot: undefined,
    snapshotMax: 10,
    timeHandler: undefined,
    cursor: 0
  })

  get latestSnapshot(): StoreComponentData | undefined {
    return this.state.latestSnapshot
  }
  set latestSnapshot(snapshot: StoreComponentData | undefined) {
    this.state.latestSnapshot = snapshot
  }

  get timeHandler(): TimeoutHandle {
    // @ts-ignore
    return this.state.timeHandler
  }
  set timeHandler(timeHandler: TimeoutHandle) {
    this.state.timeHandler = timeHandler
  }

  get snapshotMax(): number {
    return this.state.snapshotMax
  }
  set snapshotMax(snapshotMax: number) {
    this.state.snapshotMax = snapshotMax
  }
  get cursor(): number {
    return this.state.cursor
  }
  set cursor(cursor: number) {
    this.state.cursor = cursor
  }
  async latestRecord() {
    return snapshotDb.snapshot.orderBy('id').last()
  }
  /**
   * 上一次记录
   * @returns 快照
   */
  async lastRecord() {
    let snapshot: StoreComponentData | undefined
    if (this.cursor) {
      snapshot = await snapshotDb.snapshot.get(this.cursor - 1)
    } else {
      snapshot = await snapshotDb.snapshot.orderBy('id').last()
    }
    if (snapshot) {
      this.cursor = snapshot.id!
      this.latestSnapshot = cloneDeep(snapshot)
      return snapshot
    }
  }
  /**
   * 下一次快照
   * @returns 快照
   */
  async nextRecord() {
    let snapshot: StoreComponentData | undefined
    if (this.cursor) {
      snapshot = await snapshotDb.snapshot.get(this.cursor + 1)
    } else {
      snapshot = await snapshotDb.snapshot.orderBy('id').last()
    }
    if (snapshot) {
      this.cursor = snapshot.id!
      this.latestSnapshot = cloneDeep(snapshot)
      return snapshot
    }
  }
  /**
   * 记录快照
   * @param canvasData 组件数据
   * @param canvasStyle 画布样式
   */
  recordSnapshot(canvasData: Array<CustomComponent>, canvasStyle: CanvasStyleData) {
    // 改变值
    this.latestSnapshot = {
      canvasData: cloneDeep(canvasData),
      canvasStyle: cloneDeep(canvasStyle)
    }
    snapshotDb.snapshot.add(cloneDeep(this.latestSnapshot)).then(async (_) => {
      const count: number = await snapshotDb.snapshot.count()
      if (count > this.snapshotMax) {
        const snapshot: StoreComponentData = (await snapshotDb.snapshot
          .orderBy('id')
          .first()) as StoreComponentData
        await snapshotDb.snapshot.delete(snapshot!.id!)
      }
      const snapshot = await snapshotDb.snapshot.orderBy('id').last()
      if (snapshot) {
        this.cursor = snapshot.id!
      }
      // @ts-ignore
      this.timeHandler = undefined
    })
  }
  /**
   * 清空快照
   */
  async clearSnapshot() {
    await snapshotDb.snapshot.clear()
    // @ts-ignore
    this.latestSnapshot = undefined
  }
  /**
   * 保存记录
   * @param canvasData 组件数据
   * @param canvasStyle 组件样式
   */
  saveSnapshot(canvasData: ComponentDataType[], canvasStyle: CanvasStyleData) {
    if (this.timeHandler) {
      clearTimeout(this.timeHandler)
    }
    this.timeHandler = setTimeout(this.recordSnapshot, 300, canvasData, canvasStyle)
  }
}

const snapshotState = new SnapshotState()
// Need to be used outside the setup
export default function useCanvasState() {
  return snapshotState
}
