import AppConfig from '../../Config/AppConfig'
import { generateHmac } from '../../Utils/Utils'

export const create = api => ({
  dashbaordFetch: (data, opt) => {
    const params = {}
    const resp = api.get('/plink/merchant/list', params)
    return resp
  }
})
