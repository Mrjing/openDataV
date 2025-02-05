import { h } from 'vue'

import { ComponentGroup, FormType } from '@/enum'
import { CustomComponent } from '@/models'
import type { MetaContainerItem } from '@/types/component'

export const componentName = 'Progress'
class ProgressComponent extends CustomComponent {
  constructor(id?: string, name?: string, icon?: string) {
    super({
      component: componentName,
      group: ComponentGroup.PROGERSS,
      name: name ? name : '进度条',
      id,
      width: 200,
      height: 50,
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
            defaultValue: '#3DE7C9'
          }
        },
        {
          prop: 'color2',
          label: '颜色2',
          type: FormType.COLOR,
          props: {
            defaultValue: '#00BAFF'
          }
        },
        {
          prop: 'borderWidth',
          label: '边框宽度',
          type: FormType.NUMBER,
          props: {
            defaultValue: 3
          }
        },
        {
          prop: 'borderGap',
          label: '边框间隔',
          type: FormType.NUMBER,
          props: {
            defaultValue: 3
          }
        },
        {
          prop: 'lineDash',
          label: '线条宽度',
          type: FormType.NUMBER,
          props: {
            defaultValue: 5
          }
        },
        {
          prop: 'gapWeight',
          label: '线条间隙',
          type: FormType.NUMBER,
          props: {
            defaultValue: 1
          }
        },
        {
          prop: 'fontSize',
          label: '字体大小',
          type: FormType.NUMBER,
          props: {
            defaultValue: 15,
            suffix: () => h('span', {}, 'px')
          }
        },
        {
          prop: 'textColor',
          label: '文字颜色',
          type: FormType.COLOR,
          props: {
            defaultValue: '#fff'
          }
        },
        {
          prop: 'borderRadius',
          label: '圆角',
          type: FormType.NUMBER,
          props: {
            defaultValue: 5
          }
        },
        {
          prop: 'localGradient',
          label: '局部渐变',
          type: FormType.SWITCH,
          props: {
            defaultValue: false
          }
        },
        {
          prop: 'formatter',
          label: '文字格式化',
          type: FormType.TEXT,
          props: {
            defaultValue: '{value}%'
          }
        }
      ]
    }
  ]
  _style: MetaContainerItem[] = []
}

export default ProgressComponent
