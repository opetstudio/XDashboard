import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  dashboardFetch: ['data'],
  dashboardPatch: ['data'],
  reset: null
})
export const DashboardTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  dashbaordFetchMSG: { ir: false, rc: '', rm: '', rd: '' } // ir=isRequesting rc=responseCode rd=redponseDescription
})

/* ------------- Selectors ------------- */
export const DashboardSelectors = {
  dashbaordFetchMSG: st => st.dashbaordFetchMSG
}

/* ------------- Reducers ------------- */
export const dashbaordFetch = (state, { data }) => {
  data.dashbaordFetchMSG = { ir: true, rc: '', rm: '', rd: '' }
  return dashboardPatch(state, { data })
}

export const dashboardPatch = (state, { data }) => {
  const mergeData = {}
  if (data.hasOwnProperty('dashbaordFetchMSG')) mergeData.dashbaordFetchMSG = data.dashbaordFetchMSG
  return state.merge(mergeData)
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.DASHBOARD_FETCH]: dashbaordFetch,
  [Types.RESET]: (state) => INITIAL_STATE
})
