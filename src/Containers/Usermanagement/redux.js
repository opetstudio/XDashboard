import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  usermanagementCreateRequest: ['data'],
  usermanagementRequestPatch: ['data'],
  usermanagementReadRequest: ['data'],
  usermanagementReadOneRequest: ['data'],
  reset: null
})

export const UsermanagementTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isRequesting: false,
  responseMessage: '',
  responseCode: ''
})

/* ------------- Selectors ------------- */

export const UsermanagementSelectors = {
  isRequesting: st => st.isRequesting,
  responseMessage: st => st.responseMessage,
  responseCode: st => st.responseCode
}

/* ------------- Reducers ------------- */

export const usermanagementCreateRequest = (state, { data }) => {
  data.isRequesting = true
  return usermanagementRequestPatch(state, { data })
}
export const usermanagementReadRequest = (state, { data }) => {
  data.isRequesting = true
  return usermanagementRequestPatch(state, { data })
}
export const usermanagementReadOneRequest = (state, { data }) => {
  data.isRequesting = true
  return usermanagementRequestPatch(state, { data })
}
export const usermanagementRequestPatch = (state, { data }) => {
  let mergeData = {}
  if (data.hasOwnProperty('isRequesting')) mergeData.isRequesting = data.isRequesting
  if (data.hasOwnProperty('responseCode')) mergeData.responseCode = data.responseCode
  if (data.hasOwnProperty('responseMessage')) mergeData.responseMessage = data.responseMessage
  return state.merge(mergeData)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USERMANAGEMENT_READ_REQUEST]: usermanagementReadRequest,
  [Types.USERMANAGEMENT_READ_ONE_REQUEST]: usermanagementReadOneRequest,
  [Types.USERMANAGEMENT_CREATE_REQUEST]: usermanagementCreateRequest,
  [Types.USERMANAGEMENT_REQUEST_PATCH]: usermanagementRequestPatch,
  [Types.RESET]: (state) => INITIAL_STATE
})
