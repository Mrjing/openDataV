import { cloneDeep } from 'lodash-es'

import type { RequestInstance } from '@/apiView/hooks/http'
import { useRequest } from '@/apiView/hooks/http'
import { DataType } from '@/enum/data'
import type { DataAcceptor, RequestDataInstance, Response } from '@/models/requestOption'
import type { StoreRestOption } from '@/models/type'

class RestRequestData implements RequestDataInstance {
  public options: StoreRestOption
  public requestInstance: RequestInstance
  public timer: IntervalHandle = 0

  constructor(options: StoreRestOption) {
    this.options = options
    this.requestInstance = useRequest()
  }
  public close() {
    clearInterval(this.timer)
  }

  public async connect(acceptor: DataAcceptor) {
    const { otherConfig } = this.options
    if (otherConfig.isRepeat) {
      const handler = async () => {
        const resp = await this.getRespData()
        acceptor(resp)
      }
      const interval = otherConfig.interval | 3000
      this.timer = setInterval(handler, interval)
    } else {
      const resp = await this.getRespData()
      acceptor(resp)
    }
  }

  public async getRespData(): Promise<Response> {
    const response: Response = {
      status: 'FAILED',
      data: ''
    }
    try {
      const requestConfig = {
        url: this.options.url,
        method: this.options.method,
        headers: this.options.headers,
        params: this.options.params,
        data: this.options.data
      }
      const resp = await this.requestInstance.request(requestConfig)
      response.status = 'SUCCESS'
      response.data = resp.data
    } catch (err: any) {
      err.response || (err.toJSON ? err.toJSON() : {})
      response.status = 'FAILED'
      response.data = err.stack || err.message
    }
    return response
  }

  public toJSON() {
    return {
      options: cloneDeep(this.options),
      type: DataType.REST
    }
  }
}

export default RestRequestData
