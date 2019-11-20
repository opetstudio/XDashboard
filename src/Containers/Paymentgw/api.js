// a library to wrap and simplify api calls
import AppConfig from '../../Config/AppConfig'

export const create = api => ({
  paymentgwCreateRequest: (data, opt) => {
    // api.setHeader('authorization', opt.session.token)
    const resp = api.post('/dashboard/paymentgwCreate', data)
    return resp
  },
  paymentgwReadRequest: (data, opt) => {
    let params = {}
    params.page = data.page
    params.pageSize = data.pageSize
    data.filtered.forEach((v, k) => {
      params[v['id']] = v['value']
    })
    data.sorted.forEach((v, k) => {
      params['orderby'] = v['id']
      params['desc'] = v['desc']
    })
    const resp = api.get('/plink/report/list', params)
    return resp
  }
})
