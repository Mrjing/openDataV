import { h } from 'vue'

import { ComponentGroup, FormType } from '@/enum'
import { CustomComponent } from '@/models'
import type { MetaContainerItem } from '@/types/component'

export const componentName = 'Gauge1'
class GaugeComponent extends CustomComponent {
  constructor(id?: string, name?: string, icon?: string) {
    super({
      component: componentName,
      group: ComponentGroup.GAUGE,
      name: name ? name : '1#仪表盘',
      id,
      width: 200,
      height: 200,
      icon
    })
  }

  _prop: MetaContainerItem[] = [
    {
      label: '数据配置',
      prop: 'data',
      children: [
        {
          prop: 'history',
          label: '历史数据地址',
          type: FormType.TEXT,
          props: {
            defaultValue: ''
          }
        },
        {
          prop: 'datatag',
          label: '数据标签',
          type: FormType.TEXT,
          props: {
            defaultValue: ''
          }
        },
        {
          prop: 'maxValue',
          label: '最大值',
          type: FormType.NUMBER,
          props: {
            defaultValue: 150
          }
        }
      ]
    },
    {
      label: '属性配置',
      prop: 'attr',
      children: [
        {
          prop: 'color1',
          label: '颜色1',
          type: FormType.COLOR,
          props: {
            defaultValue: '#03A6E0CC'
          }
        },
        {
          prop: 'color2',
          label: '颜色2',
          type: FormType.COLOR,
          props: {
            defaultValue: '#03A6E04D'
          }
        },
        {
          prop: 'unit',
          label: '单位',
          type: FormType.TEXT,
          props: {
            defaultValue: ''
          }
        }
      ]
    }
  ]
  _style: MetaContainerItem[] = [
    {
      label: '字体设置',
      prop: 'font',
      children: [
        {
          prop: 'color',
          label: '颜色',
          type: FormType.COLOR,
          props: {
            defaultValue: '#03A6E0CC'
          }
        },
        {
          prop: 'fontSize',
          label: '字体大小',
          type: FormType.NUMBER,
          props: {
            defaultValue: 40,
            suffix: () => h('span', {}, 'px')
          }
        },
        {
          prop: 'fontWeight',
          label: '字体宽度',
          type: FormType.NUMBER,
          props: {
            defaultValue: 800
          }
        },
        {
          prop: 'fontFamily',
          label: '字体',
          type: FormType.FONT_STYLE,
          props: {
            defaultValue: 'Arial'
          }
        }
      ]
    }
  ]
}

export default GaugeComponent
