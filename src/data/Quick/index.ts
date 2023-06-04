import { shallowRef } from 'vue'

import handler, { QUICK_TYPE } from './handler'
import Quick from './View.vue'

export default {
  type: QUICK_TYPE,
  name: '快速数据',
  component: shallowRef(Quick),
  handler
}
