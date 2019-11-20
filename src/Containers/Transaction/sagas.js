import { call, put, select } from 'redux-saga/effects'
import TransactionActions from './redux'
import { getAttributes } from '../../Transforms/TransformAttributes'
import { path } from 'ramda'
import {getAccessToken} from '../../Utils/Utils'
import LoginActions from '../Login/redux'

// export const session = state => ({...state.login.single, token: state.login.token, isLoggedIn: state.login.isLoggedIn})
export const transformedData = response => getAttributes(response.data)
export const session = state => ({
  ...state.login.single,
  token: state.login.token,
  sessionToken: state.login.sessionToken,
  isLoggedIn: state.login.isLoggedIn,
  userMerchantId: state.login.userMerchantId,
  userMerchantCode: state.login.userMerchantCode
})

export function * transactionRefundRequest (api, action) {
  const {data} = action || {}
  const {refundId} = data
  const s = yield select(session)
  const encryptedAccessToken = getAccessToken(s.sessionToken)
  const {userMerchantCode, userMerchantId} = s || {}
  const response = yield call(api.transactionRefundRequest, {refundId}, {userMerchantCode, userMerchantId, encryptedAccessToken})
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  let responseDescription = path(['data', 'responseDescription'], response)
}
export function * transactionFetchOne (api, action) {
  const { data } = action
  const s = yield select(session)
  const encryptedAccessToken = getAccessToken(s.sessionToken)
  const response = yield call(api.transactionFetchOne, data, {userMerchantCode: s.userMerchantCode, userMerchantId: s.userMerchantId, encryptedAccessToken})
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  let responseDescription = path(['data', 'responseDescription'], response)
  const transactionDetail = path(['data', 'data'], response)
  if (!response.ok) {
    responseCode = 'MBDD99'
    responseMessage = 'FAILED_SYSTEM'
    responseDescription = response.problem
  }
  let transactionFetchOneMSG = {ir: false, rc: responseCode, rm: responseMessage, rd: responseDescription}
  yield put(TransactionActions.transactionPatch({transactionFetchOneMSG, transactionDetail}))
}
export function * transactionRefundFetchOne (api, action) {
  const { data } = action
  const s = yield select(session)
  const encryptedAccessToken = getAccessToken(s.sessionToken)
  const response = yield call(api.transactionRefundFetchOne, data, {userMerchantCode: s.userMerchantCode, userMerchantId: s.userMerchantId, encryptedAccessToken})
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  let responseDescription = path(['data', 'responseDescription'], response)
  const transactionDetail = path(['data', 'data'], response)
  if (!response.ok) {
    responseCode = 'MBDD99'
    responseMessage = 'FAILED_SYSTEM'
    responseDescription = response.problem
  }
  let transactionRefundFetchOneMSG = {ir: false, rc: responseCode, rm: responseMessage, rd: responseDescription}
  yield put(TransactionActions.transactionPatch({transactionRefundFetchOneMSG, transactionDetail}))
}
