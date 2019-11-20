import { call, put, select } from 'redux-saga/effects'
import TablepaginationActions from './redux'
import LoginActions from '../Login/redux'
import { getAttributes } from '../../Transforms/TransformAttributes'
import { merge, path } from 'ramda'
import {getAccessToken} from '../../Utils/Utils'
import _ from 'lodash'
import Cookies from 'universal-cookie'
import Moment from 'moment'

export const session = state => ({
  sessionToken: state.login.sessionToken,
  isLoggedIn: state.login.isLoggedIn,
  userMerchantCode: state.login.userMerchantCode,
  userMerchantId: state.login.userMerchantId,
  userRole: state.login.userRole
})
// let startEndDate = {transactionStartDate: Moment(window['mbddvalue-transactionStartDate']).format('YYYY-MM-DD'), transactionEndDate: Moment(window['mbddvalue-transactionEndDate']).format('YYYY-MM-DD')}
export const filter = state => ({
  transactionStartDate: window['mbddvalue-transactionStartDate'] && Moment(window['mbddvalue-transactionStartDate']).format('YYYY-MM-DD'),
  transactionEndDate: window['mbddvalue-transactionEndDate'] && Moment(window['mbddvalue-transactionEndDate']).format('YYYY-MM-DD'),
  // transactionStartDate: state.tablepagination.transactionStartDate,
  // transactionEndDate: state.tablepagination.transactionEndDate,
  transactionAmountMin: state.tablepagination.transactionAmountMin,
  transactionAmountMax: state.tablepagination.transactionAmountMax,
  merchantRefNo: state.tablepagination.merchantRefNo,
  bankRefNo: state.tablepagination.bankRefNo,
  merchantUserId: state.tablepagination.merchantUserId,
  sourceOfFund: state.tablepagination.sourceOfFund,
  transactionStatus: state.tablepagination.transactionStatus,
  page: state.tablepagination.page,
  pageSize: state.tablepagination.pageSize
})
export const getMerchantCode = (userRole, data, s) => {
  let merchantCode = null
  // user
  if (userRole >= 400 && userRole < 500) merchantCode = data.merchantCode
  // merc
  if (userRole >= 310 && userRole < 400) merchantCode = s.userMerchantCode
  if (userRole >= 300 && userRole < 310) merchantCode = s.userMerchantCode
  // inst
  if (userRole >= 210 && userRole < 300) merchantCode = data.merchantCode
  if (userRole >= 200 && userRole < 210) merchantCode = data.merchantCode
  // op
  if (userRole >= 100 && userRole < 200) merchantCode = data.merchantCode
  return merchantCode
}
export const transformedData = response => getAttributes(response.data)

export function * tablepaginationFetchAllTrxForRefundReview (api, action) {
  console.log('tablepaginationFetchAllTrxForRefundReview action', action)
  const { data } = action
  const s = yield select(session)
  const fltr = yield select(filter)
  const encryptedAccessToken = getAccessToken(s.sessionToken)
  let userRole = parseInt(s.userRole)
  let merchantCode = getMerchantCode(userRole, data, s)
  let page = data['page'] || fltr.page
  let pageSize = data['pageSize'] || fltr.pageSize
  let pages = 0
  const response = yield call(api.tablepaginationFetchAllTrxForRefundReview, {...data, ...fltr, merchantCode, page, pageSize}, {encryptedAccessToken, url: data.url, userMerchantCode: s.userMerchantCode, userMerchantId: s.userMerchantId})
  console.log('response======>>>>>', response)
  let dataTablepagination = []
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  let responseDescription = path(['data', 'responseDescription'], response)
  if (response.ok) {
    if (responseCode === 'MBDD04') {
      // invalid session token. redirect to logout
      yield put(TablepaginationActions.tablepaginationReadRequestPatch({isRequesting: false, responseCode, responseMessage, dataTablepagination, pages, pageSize, page}))
      return yield put(LoginActions.loginRemoveSuccess({}))
    }
    dataTablepagination = path(['data', 'refundRequestData'], response) || []
    pages = path(['data', 'pages'], response) || 0
    responseCode = responseCode || 'MBDD00'
    responseMessage = responseMessage || 'SUCCESS'
  } else {
    dataTablepagination = []
    responseCode = 'MBDD99'
    responseMessage = 'FAILED_SYSTEM'
    responseDescription = path(['problem'], response)
  }
  yield put(TablepaginationActions.tablepaginationReadRequestPatch({isRequesting: false, responseCode, responseMessage, dataTablepagination, pages, responseDescription, pageSize, page}))
}
export function * tablepaginationFetchAllTrxForRefundRequest (api, action) {
  console.log('tablepaginationFetchAllTrxForRefundRequest action', action)
  const { data } = action
  const s = yield select(session)
  const fltr = yield select(filter)
  const encryptedAccessToken = getAccessToken(s.sessionToken)
  let userRole = parseInt(s.userRole)
  let merchantCode = getMerchantCode(userRole, data, s)
  let page = data['page'] || fltr.page
  let pageSize = data['pageSize'] || fltr.pageSize
  const response = yield call(api.tablepaginationFetchAllTrxForRefundRequest, {...data, ...fltr, merchantCode: merchantCode, transactionStatus: 'SETLD', page, pageSize}, {encryptedAccessToken, url: data.url, userMerchantCode: s.userMerchantCode, userMerchantId: s.userMerchantId})
  console.log('response======>>>>>', response)
  let dataTablepagination = []
  let pages = 0
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  let responseDescription = path(['data', 'responseDescription'], response)
  if (response.ok) {
    if (responseCode === 'MBDD04') {
      // invalid session token. redirect to logout
      yield put(TablepaginationActions.tablepaginationReadRequestPatch({isRequesting: false, responseCode, responseMessage, dataTablepagination, pages, pageSize, page}))
      return yield put(LoginActions.loginRemoveSuccess({}))
    }
    dataTablepagination = path(['data', 'reports'], response) || []
    pages = path(['data', 'pages'], response) || 0
    responseCode = responseCode || 'MBDD00'
    responseMessage = responseMessage || 'SUCCESS'
  } else {
    dataTablepagination = []
    responseCode = 'MBDD99'
    responseMessage = 'FAILED_SYSTEM'
    responseDescription = path(['problem'], response)
  }
  yield put(TablepaginationActions.tablepaginationReadRequestPatch({isRequesting: false, responseCode, responseMessage, dataTablepagination, pages, responseDescription, pageSize, page}))
}
export function * tablepaginationFetchAllUser (api, action) {
  console.log('tablepaginationFetchAllUser action', action)
  const { data } = action
  const s = yield select(session)
  const encryptedAccessToken = getAccessToken(s.sessionToken)
  const response = yield call(api.tablepaginationFetchAllUser, data, {encryptedAccessToken, url: data.url, userMerchantCode: data.userMerchantCode, userMerchantId: s.userMerchantId})
  console.log('response======>>>>>', response)
  let dataTablepagination = []
  let pages = 0
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  let responseDescription = path(['data', 'responseDescription'], response)
  if (response.ok) {
    if (responseCode === 'MBDD04') {
      // invalid session token. redirect to logout
      yield put(TablepaginationActions.tablepaginationReadRequestPatch({isRequesting: false, responseCode, responseMessage, dataTablepagination, pages}))
      return yield put(LoginActions.loginRemoveSuccess({}))
    }
    dataTablepagination = path(['data', 'content'], response) || []
    pages = path(['data', 'totalPages'], response) || 0
    // responseCode = 'MBDD00'
    // responseMessage = 'SUCCESS'
  } else {
    dataTablepagination = []
    responseCode = 'MBDD99'
    responseMessage = 'FAILED_SYSTEM'
    responseDescription = path(['problem'], response)
  }
  yield put(TablepaginationActions.tablepaginationReadRequestPatch({isRequesting: false, responseCode, responseMessage, dataTablepagination, pages, responseDescription}))
}
export function * tablepaginationReadRequest (api, action) {
  const { data } = action
  const s = yield select(session)
  const fltr = yield select(filter)
  // console.log('tablepaginationReadRequest action===>', action)
  // console.log('tablepaginationReadRequest fltr===>', fltr)
  const encryptedAccessToken = getAccessToken(s.sessionToken)
  let userRole = parseInt(s.userRole)
  let merchantCode = getMerchantCode(userRole, data, s)
  // // user
  // if (userRole >= 400 && userRole < 500) merchantCode = data.merchantCode
  // // merc
  // if (userRole >= 310 && userRole < 400) merchantCode = s.userMerchantCode
  // if (userRole >= 300 && userRole < 310) merchantCode = s.userMerchantCode
  // // inst
  // if (userRole >= 210 && userRole < 300) merchantCode = data.merchantCode
  // if (userRole >= 200 && userRole < 210) merchantCode = data.merchantCode
  // // op
  // if (userRole >= 100 && userRole < 200) merchantCode = data.merchantCode

  let page = data['page'] || fltr.page
  let pageSize = data['pageSize'] || fltr.pageSize
  const response = yield call(api.tablepaginationReadRequest, {merchantCode: merchantCode, ...data, ...fltr, page, pageSize}, {encryptedAccessToken, url: data.url, userMerchantCode: s.userMerchantCode, userMerchantId: s.userMerchantId})
  // console.log('response=>', response)
  let dataTablepagination = []
  let pages = 0
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  if (response.ok) {
    if (responseCode === 'MBDD04') {
      // invalid session token. redirect to logout
      yield put(TablepaginationActions.tablepaginationReadRequestPatch({isRequesting: false, responseCode, responseMessage, dataTablepagination, pages, pageSize, page}))
      return yield put(LoginActions.loginRemoveSuccess({}))
    }
    dataTablepagination = path(['data', 'reports'], response) || []
    pages = path(['data', 'pages'], response) || 0
    responseCode = 'MBDD00'
    responseMessage = 'SUCCESS'
  } else {
    dataTablepagination = []
    responseCode = 'MBDD01'
    responseMessage = 'FAILED'
  }
  yield put(TablepaginationActions.tablepaginationReadRequestPatch({isRequesting: false, responseCode, responseMessage, dataTablepagination, pages, pageSize, page}))
}
