// a library to wrap and simplify api calls
import AppConfig from '../../Config/AppConfig'

export const create = api => ({
  userCreateRequest: (data, opt) => {
    console.log('userCreateRequest invoked')
    api.setHeader(
      AppConfig.authHeader,
      opt.session.token_type + ' ' + opt.session.access_token
    )
    const resp = api.post('/plink/signup', data)
    return resp
  },
  userReadRequest: (data, opt) => {
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
