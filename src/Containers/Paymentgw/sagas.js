import { call, put } from 'redux-saga/effects'
import PaymentgwActions from './redux'
import { getAttributes } from '../../Transforms/TransformAttributes'
import { merge, path } from 'ramda'
import _ from 'lodash'
import Cookies from 'universal-cookie'

// export const session = state => ({...state.login.single, token: state.login.token, isLoggedIn: state.login.isLoggedIn})
export const transformedData = response => getAttributes(response.data)

export function * paymentgwCreateRequest (api, action) {
  const { data } = action
  const response = yield call(api.paymentgwCreateRequest, data.payload, {url: data.url, method: data.method})
  // console.log('response=>', response)
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  if (response.ok) {
    // message = '00'
  } else {
    responseMessage = response.problem
  }
  yield put(PaymentgwActions.paymentgwRequestPatch({isRequesting: false, responseCode, responseMessage}))
}
export function * paymentgwReadRequest (api, action) {
  const { data } = action
  // console.log('action===>', action)
  const response = yield call(api.paymentgwReadRequest, data, {url: data.url, method: data.method})
  // console.log('response=>', response)
  let dataPaymentgw = []
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  if (response.ok) {
    dataPaymentgw = path(['data', 'reports'], response) || []
    responseCode = 'MBDD00'
    responseMessage = 'SUCCESS'
  } else {
    dataPaymentgw = []
    responseCode = 'MBDD01'
    responseMessage = 'FAILED'
  }
  yield put(PaymentgwActions.paymentgwRequestPatch({isRequesting: false, responseCode, responseMessage, dataPaymentgw}))
}
