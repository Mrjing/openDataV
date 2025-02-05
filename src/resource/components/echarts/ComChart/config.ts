import { ComponentGroup } from '@/enum'
import { DataIntegrationMode } from '@/enum/data'
import { CustomComponent } from '@/models'

export const componentName = 'ComChart'
class ComChartComponent extends CustomComponent {
  constructor(id?: string, name?: string, icon?: string) {
    super({
      component: componentName,
      group: ComponentGroup.OTHER,
      name: name ? name : '通用Echart图',
      id,
      width: 500,
      height: 170,
      icon,
      dataIntegrationMode: DataIntegrationMode.UNIVERSAL
    })
  }
}

export default ComChartComponent
