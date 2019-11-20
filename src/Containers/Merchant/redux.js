import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  merchantCreateRequest: ['data'],
  merchantRequestPatch: ['data'],
  merchantReadRequest: ['data'],
  merchantReadOneRequest: ['data'],
  merchantRequestMinMaxLimit: ['data'],
  merchantUpdateMinMaxLimit: ['data'],
  merchantGetCredential: ['data'],
  reset: null
})

export const MerchantTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isRequesting: false,
  responseMessage: '',
  responseCode: '',
  merchantDetail: {},
  merchantCredential: {},
  merchantLimitMin: 0,
  merchantLimitMax: 0,
  responseDescription: '',
  merchantUpdateMinMaxLimitMSG: {ir: false, rc: '', rm: '', rd: ''} // ir=isRequesting rc=responseCode rd=redponseDescription
})

/* ------------- Selectors ------------- */

export const MerchantSelectors = {
  isRequesting: st => st.isRequesting,
  responseMessage: st => st.responseMessage,
  responseCode: st => st.responseCode,
  merchantDetail: st => st.merchantDetail,
  merchantCredential: st => st.merchantCredential,
  merchantLimitMin: st => st.merchantLimitMin,
  merchantLimitMax: st => st.merchantLimitMax,
  responseDescription: st => st.responseDescription,
  merchantUpdateMinMaxLimitMSG: st => st.merchantUpdateMinMaxLimitMSG
}

/* ------------- Reducers ------------- */

export const merchantCreateRequest = (state, { data }) => {
  data.isRequesting = true
  return merchantRequestPatch(state, { data })
}
export const merchantReadRequest = (state, { data }) => {
  data.isRequesting = true
  return merchantRequestPatch(state, { data })
}
export const merchantReadOneRequest = (state, { data }) => {
  data.isRequesting = true
  return merchantRequestPatch(state, { data })
}
const merchantRequestMinMaxLimit = (state, { data }) => {
  data.isRequesting = true
  return merchantRequestPatch(state, { data })
}
const merchantUpdateMinMaxLimit = (state, { data }) => {
  // data.isRequesting = true
  data.merchantUpdateMinMaxLimitMSG = {ir: true, rc: '', rm: '', rd: ''}
  return merchantRequestPatch(state, { data })
}
const merchantGetCredential = (state, { data }) => {
  data.isRequesting = true
  return merchantRequestPatch(state, { data })
}
export const merchantRequestPatch = (state, { data }) => {
  // console.log('merchantRequestPatch invoked. dataMerchant=', data.dataMerchant)
  let mergeData = {}
  if (data.hasOwnProperty('isRequesting')) mergeData.isRequesting = data.isRequesting
  if (data.hasOwnProperty('responseCode')) mergeData.responseCode = data.responseCode
  if (data.hasOwnProperty('responseMessage')) mergeData.responseMessage = data.responseMessage
  if (data.hasOwnProperty('merchantDetail')) mergeData.merchantDetail = data.merchantDetail
  if (data.hasOwnProperty('merchantLimitMin')) mergeData.merchantLimitMin = data.merchantLimitMin
  if (data.hasOwnProperty('merchantLimitMax')) mergeData.merchantLimitMax = data.merchantLimitMax
  if (data.hasOwnProperty('responseDescription')) mergeData.responseDescription = data.responseDescription
  if (data.hasOwnProperty('merchantCredential')) mergeData.merchantCredential = data.merchantCredential
  if (data.hasOwnProperty('merchantUpdateMinMaxLimitMSG')) mergeData.merchantUpdateMinMaxLimitMSG = data.merchantUpdateMinMaxLimitMSG
  // if (data.pageSize) mergeData.pageSize = data.pageSize
  return state.merge(mergeData)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MERCHANT_READ_REQUEST]: merchantReadRequest,
  [Types.MERCHANT_READ_ONE_REQUEST]: merchantReadOneRequest,
  [Types.MERCHANT_CREATE_REQUEST]: merchantCreateRequest,
  [Types.MERCHANT_REQUEST_PATCH]: merchantRequestPatch,
  [Types.MERCHANT_REQUEST_MIN_MAX_LIMIT]: merchantRequestMinMaxLimit,
  [Types.MERCHANT_UPDATE_MIN_MAX_LIMIT]: merchantUpdateMinMaxLimit,
  [Types.MERCHANT_GET_CREDENTIAL]: merchantGetCredential,
  [Types.RESET]: (state) => INITIAL_STATE
})
