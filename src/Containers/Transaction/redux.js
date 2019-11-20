import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  transactionPatch: ['data'],
  transactionFetchOne: ['data'],
  transactionRefundFetchOne: ['data'],
  transactionRefundRequest: ['data'],
  reset: null
})

export const TransactionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isRequesting: false,
  responseMessage: '',
  responseCode: '',
  responseDescription: '',
  transactionDetail: {},
  transactionFetchOneMSG: {ir: false, rc: '', rm: '', rd: ''}, // ir=isRequesting rc=responseCode rd=redponseDescription
  transactionRefundFetchOneMSG: {ir: false, rc: '', rm: '', rd: ''}, // ir=isRequesting rc=responseCode rd=redponseDescription
  transactionRefundRequestMSG: {ir: false, rc: '', rm: '', rd: ''} // ir=isRequesting rc=responseCode rd=redponseDescription
})

/* ------------- Selectors ------------- */

export const TransactionSelectors = {
  isRequesting: st => st.isRequesting,
  responseMessage: st => st.responseMessage,
  responseCode: st => st.responseCode,
  responseDescription: st => st.responseDescription,
  transactionFetchOneMSG: st => st.transactionFetchOneMSG,
  transactionRefundFetchOneMSG: st => st.transactionRefundFetchOneMSG,
  transactionRefundRequestMSG: st => st.transactionRefundRequestMSG,
  transactionDetail: st => st.transactionDetail
}

/* ------------- Reducers ------------- */
// const transactionGetCredential = (state, { data }) => {
//   data.isRequesting = true
//   return transactionRequestPatch(state, { data })
// }
export const transactionFetchOne = (state, {data}) => {
  data.transactionFetchOneMSG = {ir: true, rc: '', rm: '', rd: ''}
  return transactionPatch(state, { data })
}
export const transactionRefundFetchOne = (state, {data}) => {
  data.transactionRefundFetchOneMSG = {ir: true, rc: '', rm: '', rd: ''}
  return transactionPatch(state, { data })
}
export const transactionRefundRequest = (state, {data}) => {
  data.transactionRefundRequestMSG = {ir: true, rc: '', rm: '', rd: ''}
  return transactionPatch(state, { data })
}
export const transactionPatch = (state, { data }) => {
  // console.log('transactionRequestPatch invoked. dataTransaction=', data.dataTransaction)
  let mergeData = {}
  if (data.hasOwnProperty('isRequesting')) mergeData.isRequesting = data.isRequesting
  if (data.hasOwnProperty('responseCode')) mergeData.responseCode = data.responseCode
  if (data.hasOwnProperty('responseMessage')) mergeData.responseMessage = data.responseMessage
  if (data.hasOwnProperty('responseDescription')) mergeData.responseDescription = data.responseDescription
  if (data.hasOwnProperty('transactionFetchOneMSG')) mergeData.transactionFetchOneMSG = data.transactionFetchOneMSG
  if (data.hasOwnProperty('transactionRefundFetchOneMSG')) mergeData.transactionRefundFetchOneMSG = data.transactionRefundFetchOneMSG
  if (data.hasOwnProperty('transactionRefundRequestMSG')) mergeData.transactionRefundRequestMSG = data.transactionRefundRequestMSG
  if (data.hasOwnProperty('transactionDetail')) mergeData.transactionDetail = data.transactionDetail
  // if (data.pageSize) mergeData.pageSize = data.pageSize
  return state.merge(mergeData)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TRANSACTION_PATCH]: transactionPatch,
  [Types.TRANSACTION_REFUND_REQUEST]: transactionRefundRequest,
  [Types.TRANSACTION_FETCH_ONE]: transactionFetchOne,
  [Types.TRANSACTION_REFUND_FETCH_ONE]: transactionRefundFetchOne,
  [Types.RESET]: (state) => INITIAL_STATE
})
