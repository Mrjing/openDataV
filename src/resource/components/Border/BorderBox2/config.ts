import { ComponentGroup, ContainerType, FormType } from '@/enum'
import { CustomComponent } from '@/models'
import type { MetaContainerItem } from '@/types/component'

export const componentName = 'BorderBox2'
class BorderBoxComponent extends CustomComponent {
  constructor(id?: string, name?: string) {
    super({
      component: componentName,
      group: ComponentGroup.BORDER,
      name: name ? name : '2#边框',
      id,
      width: 200,
      height: 200,
      defaultViewType: {
        propValue: ContainerType.FORM
      }
    })
  }

  _prop: MetaContainerItem[] = [
    {
      label: '基础配置',
      prop: 'base',
      children: [
        {
          prop: 'color1',
          label: '边框颜色1',
          type: FormType.COLOR,
          props: {
            defaultValue: '#4fd2dd'
          }
        },
        {
          prop: 'color2',
          label: '边框颜色2',
          type: FormType.COLOR,
          props: {
            defaultValue: '#235fa7'
          }
        },
        {
          prop: 'backgroundColor',
          label: '底色',
          type: FormType.COLOR,
          props: {
            defaultValue: '#00000000'
          }
        }
      ]
    }
  ]
  _style: MetaContainerItem[] = []
}

export default BorderBoxComponent
