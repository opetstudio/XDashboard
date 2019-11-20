// a library to wrap and simplify api calls
import AppConfig from '../../Config/AppConfig'
const setFilter = (data) => {
  let params = {}
  if (data['bankRefNo']) params['bankRefNo'] = data['bankRefNo']
  if (data['merchantRefNo']) params['mercRefNo'] = data['merchantRefNo']
  if (data['merchantUserId']) params['consUsernameMerchant'] = data['merchantUserId']
  if (data['merchantCode']) params['mercCd'] = data['merchantCode']
  if (data['sourceOfFund']) params['issuerCode'] = data['sourceOfFund']
  if (data['transactionStatus']) params['paySts'] = data['transactionStatus']
  if (data['transactionStartDate']) params['startDate'] = data['transactionStartDate']
  if (data['transactionEndDate']) params['endDate'] = data['transactionEndDate']
  if (data['transactionAmountMin']) params['transactionAmountMin'] = data['transactionAmountMin']
  if (data['transactionAmountMax']) params['transactionAmountMax'] = data['transactionAmountMax']
  return params
}
export const create = api => ({
  tablepaginationFetchAllTrxForRefundReview: (data, {encryptedAccessToken, url, userMerchantCode, userMerchantId}) => {
    let params = {}
    params.page = (data.page || 0) + 1
    params.pageSize = data.pageSize;
    (data.filtered || []).forEach((v, k) => {
      params[v['id']] = v['value']
    });
    (data.sorted || []).forEach((v, k) => {
      params['orderby'] = v['id']
      params['desc'] = v['desc']
    })
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + encryptedAccessToken
    )
    api.setHeader('mId', userMerchantId)
    const resp = api.get(`/plink/refund/rev/request-list`, {...params, ...setFilter(data)})
    return resp
  },
  tablepaginationFetchAllTrxForRefundRequest: (data, {encryptedAccessToken, url, userMerchantCode, userMerchantId}) => {
    let params = {}
    params.page = (data.page || 0) + 1
    params.pageSize = data.pageSize;
    (data.filtered || []).forEach((v, k) => {
      params[v['id']] = v['value']
    });
    (data.sorted || []).forEach((v, k) => {
      params['orderby'] = v['id']
      params['desc'] = v['desc']
    })
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + encryptedAccessToken
    )
    api.setHeader('mId', userMerchantId)
    const resp = api.get(`/plink/report/list`, {...params, ...setFilter(data)})
    return resp
  },
  tablepaginationFetchAllUser: (data, {encryptedAccessToken, url, userMerchantCode, userMerchantId}) => {
    let params = {}
    params.page = (data.page || 0) + 1
    params.size = data.pageSize;
    // (data.filtered || []).forEach((v, k) => {
    //   params[v['id']] = v['value']
    // });
    (data.sorted || []).forEach((v, k) => {
      params['sort'] = v['id'] + ',' + (v['desc']? 'desc' : 'asc')
    })
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + encryptedAccessToken
    )
    params['merchantCode'] = userMerchantCode
    // params['mId'] = userMerchantId
    api.setHeader('mId', userMerchantId)
    const resp = api.get('/plink/userList', params)
    return resp
  },
  tablepaginationReadRequest: (data, {encryptedAccessToken, url, userMerchantCode, userMerchantId}) => {
    // console.log('tablepaginationReadRequest===>', data)
    // let filtered = encodeURIComponent(JSON.stringify(data.filtered))
    // let sorted = encodeURIComponent(JSON.stringify(data.sorted))
    // api.setHeader('authorization', opt.session.token)
    // const resp = api.get('/plink/report/list', {page: data.page + 1, pageSize: data.pageSize, filtered: data.filtered.map(r => ), sorted: data.sorted})
    let params = {}
    params.page = (data.page || 0) + 1
    params.pageSize = data.pageSize;
    (data.filtered || []).forEach((v, k) => {
      params[v['id']] = v['value']
    });
    (data.sorted || []).forEach((v, k) => {
      params['orderby'] = v['id']
      params['desc'] = v['desc']
    })
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + encryptedAccessToken
    )

    api.setHeader('mId', userMerchantId)

    if (data['mercRefNo']){
      console.log('merch ref no ada')
      params['merchantRefNo'] = data['merchantRefNo']
    }
    const resp = api.get('/plink/report/list', {...params, ...setFilter(data)})
    return resp
  }
})
