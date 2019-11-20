import { call, put, select } from 'redux-saga/effects'
import MerchantActions from './redux'
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

export function * merchantCreateRequest (api, action) {
  const { data } = action
  const response = yield call(api.merchantCreateRequest, data.payload, {url: data.url, method: data.method})
  // console.log('response=>', response)
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  if (response.ok) {
    if (responseCode === 'MBDD04') {
      // invalid session token. redirect to logout
      yield put(MerchantActions.merchantRequestPatch({isRequesting: false, responseCode, responseMessage}))
      return yield put(LoginActions.loginRemoveSuccess({}))
    }
  } else {
    responseMessage = response.problem
  }
  yield put(MerchantActions.merchantRequestPatch({isRequesting: false, responseCode, responseMessage}))
}
export function * merchantReadRequest (api, action) {
  const { data } = action
  // console.log('action===>', action)
  const response = yield call(api.merchantReadRequest, data, {url: data.url, method: data.method})
  // console.log('response=>', response)
  let dataMerchant = []
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  let pages = 0
  if (response.ok) {
    if (responseCode === 'MBDD04') {
      // invalid session token. redirect to logout
      yield put(MerchantActions.merchantRequestPatch({isRequesting: false, responseCode, responseMessage}))
      return yield put(LoginActions.loginRemoveSuccess({}))
    }
    dataMerchant = path(['data', 'merchants'], response) || []
    pages = parseInt(path(['data', 'pages'], response) || 0)
    responseCode = 'MBDD00'
    responseMessage = 'SUCCESS'
  } else {
    dataMerchant = []
    responseCode = 'MBDD01'
    responseMessage = 'FAILED'
  }
  console.log('dataMerchant', dataMerchant)
  yield put(MerchantActions.merchantRequestPatch({isRequesting: false, responseCode, responseMessage, dataMerchant, pages}))
}
export function * merchantReadOneRequest (api, action) {
  const { data } = action
  console.log('merchantReadOneRequest data=', data)
  const s = yield select(session)
  const encryptedAccessToken = getAccessToken(s.sessionToken)
  const response = yield call(api.merchantReadOneRequest, data, {userMerchantCode: s.userMerchantCode, userMerchantId: s.userMerchantId, encryptedAccessToken})
  console.log('response=>', response)
  let merchantDetail = path(['data', 'data'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  let responseCode = path(['data', 'responseCode'], response)
  let responseDescription = path(['data', 'responseDescription'], response)
  if (response.ok) {
    if (responseCode === 'MBDD04') {
      // invalid session token. redirect to logout
      yield put(MerchantActions.merchantRequestPatch({isRequesting: false, responseCode, responseMessage, responseDescription}))
      return yield put(LoginActions.loginRemoveSuccess({}))
    }
    // responseCode = 'MBDD00'
    // responseMessage = 'SUCCESS'
  } else {
    responseCode = 'MBDD01'
    responseMessage = 'FAILED'
  }
  yield put(MerchantActions.merchantRequestPatch({isRequesting: false, responseCode, responseMessage, responseDescription, merchantDetail}))
}
export function * merchantRequestMinMaxLimit (api, action) {
  console.log('merchantRequestMinMaxLimit action====>', action)
  const { data } = action
  const s = yield select(session)
  const encryptedAccessToken = getAccessToken(s.sessionToken)
  const response = yield call(api.merchantRequestMinMaxLimit, data, {userMerchantCode: s.userMerchantCode, userMerchantId: s.userMerchantId, encryptedAccessToken})
  console.log('response=>', response)
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  let responseDescription = path(['data', 'responseDescription'], response)
  const merchantLimitMin = path(['data', 'data', 'limitMinTrxDaily'], response)
  const merchantLimitMax = path(['data', 'data', 'limitTrxDaily'], response)
  if (response.ok) {
    responseCode = 'MBDD00'
    responseMessage = 'SUCCESS'
    responseDescription = 'SUCCESS'
  } else {
    responseCode = 'MBDD99'
    responseMessage = 'FAILED_SYSTEM'
    responseDescription = response.problem
  }
  yield put(MerchantActions.merchantRequestPatch({responseDescription, isRequesting: false, responseCode, responseMessage, merchantLimitMin, merchantLimitMax}))
}
export function * merchantUpdateMinMaxLimit (api, action) {
  const { data } = action
  const s = yield select(session)
  const encryptedAccessToken = getAccessToken(s.sessionToken)
  const response = yield call(api.merchantUpdateMinMaxLimit, data, {userMerchantCode: s.userMerchantCode, userMerchantId: s.userMerchantId, encryptedAccessToken})
  console.log('response=>', response)
  // let responseCode = path(['data', 'responseCode'], response)
  // let responseMessage = path(['data', 'responseMessage'], response)
  // let responseDescription = path(['data', 'responseDescription'], response)
  let merchantUpdateMinMaxLimitMSG = {ir: false, rc: path(['data', 'responseCode'], response), rm: path(['data', 'responseMessage'], response), rd: path(['data', 'responseDescription'], response)}
  if (!response.ok) merchantUpdateMinMaxLimitMSG = {ir: false, rc: 'MBDD99', rm: 'FAILED_SYSTEM', rd: response.problem}
  yield put(MerchantActions.merchantRequestPatch({merchantUpdateMinMaxLimitMSG, isRequesting: false}))
}
export function * merchantGetCredential (api, action) {
  const { data } = action
  const s = yield select(session)
  console.log('merchantGetCredential session=', s)
  const encryptedAccessToken = getAccessToken(s.sessionToken)
  const response = yield call(api.merchantGetCredential, {}, {userMerchantCode: s.userMerchantCode, userMerchantId: s.userMerchantId, encryptedAccessToken})
  console.log('response=>', response)
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  let responseDescription = path(['data', 'responseDescription'], response)
  const merchantCredential = path(['data', 'data'], response)
  if (response.ok) {
    responseCode = 'MBDD00'
    responseMessage = 'SUCCESS'
    responseDescription = 'SUCCESS'
  } else {
    responseCode = 'MBDD99'
    responseMessage = 'FAILED_SYSTEM'
    responseDescription = response.problem
  }
  yield put(MerchantActions.merchantRequestPatch({responseDescription, isRequesting: false, responseCode, responseMessage, merchantCredential}))
}
