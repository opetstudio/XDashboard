import AppConfig from '../../Config/AppConfig'
import { generateHmac } from '../../Utils/Utils'

export const create = api => ({
  bankFetchAll: (data, opt) => {
    api.setHeader('Authorization', 'Basic ')
    const body = {}
    const resp = api.post('/bankFetchAll', body)
    return resp
  },
  bankFetchCredential: (data, opt) => {
    api.setHeader('Authorization', 'Basic ')
    const body = {}
    const resp = api.post('/bankFetchCredential', body)
    return resp
  }
})
