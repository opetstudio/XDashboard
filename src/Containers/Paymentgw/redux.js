import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  paymentgwCreateRequest: ['data'],
  paymentgwRequestPatch: ['data'],
  paymentgwReadRequest: ['data']
})

export const PaymentgwTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isRequesting: false,
  responseMessage: '',
  responseCode: '',
  version: 0,
  dataPaymentgw: [],
  pages: 10,
  page: 0
})

/* ------------- Selectors ------------- */

export const PaymentgwSelectors = {
  isRequesting: st => st.isRequesting,
  responseMessage: st => st.responseMessage,
  responseCode: st => st.responseCode,
  page: st => st.page,
  pages: st => st.pages,
  dataPaymentgw: st => st.dataPaymentgw
}

/* ------------- Reducers ------------- */

export const paymentgwCreateRequest = (state, { data }) => {
  data.isRequesting = true
  return paymentgwRequestPatch(state, { data })
}
export const paymentgwReadRequest = (state, { data }) => {
  data.isRequesting = true
  return paymentgwRequestPatch(state, { data })
}
export const paymentgwRequestPatch = (state, { data }) => {
  let mergeData = {}
  if (data.hasOwnProperty('isRequesting')) mergeData.isRequesting = data.isRequesting
  if (data.hasOwnProperty('responseCode')) mergeData.responseCode = data.responseCode
  if (data.hasOwnProperty('responseMessage')) mergeData.responseMessage = data.responseMessage
  if (data.pages) mergeData.pages = data.pages
  if (data.page) mergeData.page = data.page
  if (mergeData.dataPaymentgw) mergeData.dataPaymentgw = data.dataPaymentgw
  return state.merge(mergeData)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PAYMENTGW_READ_REQUEST]: paymentgwReadRequest,
  [Types.PAYMENTGW_CREATE_REQUEST]: paymentgwCreateRequest,
  [Types.PAYMENTGW_REQUEST_PATCH]: paymentgwRequestPatch
})
