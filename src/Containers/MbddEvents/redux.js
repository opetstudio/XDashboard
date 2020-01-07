import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Moment from 'moment'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  resetFilter: ['data'],
  updateFilter: ['data']
})

export const MbddeventsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  filter: {}
})

/* ------------- Selectors ------------- */

export const MbddeventsSelectors = {
  filter: st => st.filter
}

/* ------------- Reducers ------------- */

export const updateFilter = (state, action) => {
  return state.merge({})
}
export const resetFilter = (state, action) => {
  const mergeData = {
    filter: {},
    version: state.version + 1
  }
  window['mbddvalue-transactionStartDate'] = ''
  window['mbddvalue-transactionEndDate'] = ''
  return state.merge(mergeData)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESET_FILTER]: resetFilter
})
