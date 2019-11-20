// a library to wrap and simplify api calls
import AppConfig from '../../Config/AppConfig'

export const create = api => ({
  fetchUserMerchantByMerchantCode: (data, opt) => {
    // /plink/merchant/findBy?merchantCode=000000070070070
    // api.setHeader('authorization', opt.session.token)
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + opt.session.access_token
    )
    let params = {}
    params.merchantCode = opt.merchantCode
    const resp = api.get('/dashboard/plink/merchant/findBy', params)
    return resp
  }
})
