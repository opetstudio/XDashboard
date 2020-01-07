import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Moment from 'moment'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  tablepaginationFetchAllTrxForRefundReview: ['data'],
  tablepaginationFetchAllTrxForRefundRequest: ['data'],
  tablepaginationFetchAllUser: ['data'],
  tablepaginationReadRequest: ['data'],
  tablepaginationReadRequestPatch: ['data'],
  tablepaginationResetFilter: ['data']
})

export const TablepaginationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isRequesting: false,
  responseMessage: '',
  responseCode: '',
  version: 0,
  dataTablepagination: [],
  pages: 10,
  page: 0,
  pageSize: 10,
  responseDescription: '',
  // filter
  transactionStartDate: '',
  transactionEndDate: '',
  transactionAmountMin: '',
  transactionAmountMax: '',
  merchantRefNo: '',
  bankRefNo: '',
  merchantUserId: '',
  sourceOfFund: '',
  transactionStatus: '',
  merchantCode: '',

  // table pagination

  filter: {},
  table: {}

//   rows: ''
})

/* ------------- Selectors ------------- */

export const TablepaginationSelectors = {
  isRequesting: st => st.isRequesting,
  responseMessage: st => st.responseMessage,
  responseCode: st => st.responseCode,
  page: st => st.page,
  pages: st => st.pages,
  pageSize: st => st.pageSize,
  dataTablepagination: st => st.dataTablepagination,
  responseDescription: st => st.responseDescription,
  // filter
  merchantCode: st => st.merchantCode,
  transactionStartDate: st => Moment(window['mbddvalue-transactionStartDate']).isValid() ? Moment(window['mbddvalue-transactionStartDate']).format('YYYY-MM-DD') : '',
  transactionEndDate: st => Moment(window['mbddvalue-transactionStartDate']).isValid() ? Moment(window['mbddvalue-transactionEndDate']).format('YYYY-MM-DD') : '',
  transactionAmountMin: st => st.transactionAmountMin,
  transactionAmountMax: st => st.transactionAmountMax,
  merchantRefNo: st => st.merchantRefNo,
  bankRefNo: st => st.bankRefNo,
  merchantUserId: st => st.merchantUserId,
  sourceOfFund: st => st.sourceOfFund,
  transactionStatus: st => st.transactionStatus,
  filter: st => st.filter,
  table: st => st.table
//   rows: st => st.rows
}

/* ------------- Reducers ------------- */

export const tablepaginationReadRequest = (state, { data }) => {
  // console.log('redux tablepaginationReadRequest invoked ', data)
  data.isRequesting = true
  return tablepaginationReadRequestPatch(state, { data })
}
export const tablepaginationFetchAllUser = (state, { data }) => {
  console.log('redux tablepaginationFetchAllUser invoked ', data)
  data.isRequesting = true
  return tablepaginationReadRequestPatch(state, { data })
}
export const tablepaginationFetchAllTrxForRefundRequest = (state, { data }) => {
  console.log('redux tablepaginationFetchAllTrxForRefundRequest invoked ', data)
  data.isRequesting = true
  return tablepaginationReadRequestPatch(state, { data })
}
export const tablepaginationFetchAllTrxForRefundReview = (state, { data }) => {
  console.log('redux tablepaginationFetchAllTrxForRefundReview invoked ', data)
  data.isRequesting = true
  return tablepaginationReadRequestPatch(state, { data })
}
export const tablepaginationResetFilter = (state, action) => {
  let mergeData = {
    bankRefNo: '',
    merchantRefNo: '',
    merchantUserId: '',
    sourceOfFund: '',
    transactionStatus: '',
    transactionStartDate: '',
    transactionEndDate: '',
    transactionAmountMin: '',
    transactionAmountMax: '',
    version: state.version + 1
  }
  window['mbddvalue-transactionStartDate'] = ''
  window['mbddvalue-transactionEndDate'] = ''
  return state.merge(mergeData)
}
export const tablepaginationReadRequestPatch = (state, { data }) => {
  console.log('tablepaginationReadRequestPatch==>', data)
  let mergeData = {}
  if (data.hasOwnProperty('isRequesting')) mergeData.isRequesting = data.isRequesting
  if (data.hasOwnProperty('responseCode')) mergeData.responseCode = data.responseCode
  if (data.hasOwnProperty('responseMessage')) mergeData.responseMessage = data.responseMessage
  if (data.hasOwnProperty('pageSize')) mergeData.pageSize = data.pageSize
  if (data.hasOwnProperty('pages')) mergeData.pages = data.pages
  if (data.hasOwnProperty('page')) mergeData.page = data.page
  if (data.hasOwnProperty('dataTablepagination')) mergeData.dataTablepagination = data.dataTablepagination
  if (data.hasOwnProperty('responseDescription')) mergeData.responseDescription = data.responseDescription
  if (data.hasOwnProperty('bankRefNo')) mergeData.bankRefNo = data.bankRefNo
  if (data.hasOwnProperty('merchantRefNo')) mergeData.merchantRefNo = data.merchantRefNo
  if (data.hasOwnProperty('merchantUserId')) mergeData.merchantUserId = data.merchantUserId
  if (data.hasOwnProperty('sourceOfFund')) mergeData.sourceOfFund = data.sourceOfFund
  if (data.hasOwnProperty('transactionStatus')) mergeData.transactionStatus = data.transactionStatus
  if (data.hasOwnProperty('merchantCode')) mergeData.merchantCode = data.merchantCode
  if (data.hasOwnProperty('transactionAmountMin')) mergeData.transactionAmountMin = data.transactionAmountMin
  if (data.hasOwnProperty('transactionAmountMax')) mergeData.transactionAmountMax = data.transactionAmountMax

  if (data.hasOwnProperty('transactionStartDate')) {
    try {
      if (Moment(data.transactionStartDate).isValid()) {
        mergeData.transactionStartDate = Moment(data.transactionStartDate).format('YYYY-MM-DD')
        window['mbddvalue-transactionStartDate'] = mergeData.transactionStartDate
      }
    } catch (err) {}
  }
  if (data.hasOwnProperty('transactionEndDate')) {
    try {
      if (Moment(data.transactionEndDate).isValid()) {
        mergeData.transactionEndDate = Moment(data.transactionEndDate).format('YYYY-MM-DD')
        window['mbddvalue-transactionEndDate'] = mergeData.transactionEndDate
      }
    } catch (err) {}
  }

  if (data.hasOwnProperty('filter')) mergeData.filter = data.filter
  if (data.hasOwnProperty('table')) mergeData.table = data.table

  mergeData.version = state.version + 1
  return state.merge(mergeData)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TABLEPAGINATION_FETCH_ALL_TRX_FOR_REFUND_REVIEW]: tablepaginationFetchAllTrxForRefundReview,
  [Types.TABLEPAGINATION_FETCH_ALL_TRX_FOR_REFUND_REQUEST]: tablepaginationFetchAllTrxForRefundRequest,
  [Types.TABLEPAGINATION_FETCH_ALL_USER]: tablepaginationFetchAllUser,
  [Types.TABLEPAGINATION_READ_REQUEST]: tablepaginationReadRequest,
  [Types.TABLEPAGINATION_READ_REQUEST_PATCH]: tablepaginationReadRequestPatch,
  [Types.TABLEPAGINATION_RESET_FILTER]: tablepaginationResetFilter
})
