import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Moment from 'moment'
import { path } from 'ramda'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fieldOnChange: ['data'],
  resetFilter: ['data'],
  submitFilter: ['data'],
  submitFilterDone: ['data']
})

export const PaginationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  filter: {},
  submitFilterMSG: {},
  rows: {},
  page: {},
  totalPages: {},
  size: {}
})

/* ------------- Selectors ------------- */

export const PaginationSelectors = {
  filter: (st, table) => st.filter[table] || {},
  rows: (st, table) => st.rows[table],
  page: (st, table) => st.page[table] || 0,
  totalPages: (st, table) => st.totalPages[table],
  size: (st, table) => st.size[table] || 10,
  submitFilterMSG: (st, table) => st.submitFilterMSG[table],
  fieldValue: (st, table, field) => path([table, field], st.filter)
}

/* ------------- Reducers ------------- */

export const fieldOnChange = (state, action) => {
  const { data } = action
  const table = path(['table'], data)
  const field = path(['field'], data)
  const val = path(['value'], data)
  if (!table || !field) return state
  return state.merge({ filter: { ...state.filter, [table]: { ...(state.filter[table] || {}), [field]: val } }, version: state.version + 1 })
}
export const resetFilter = (state, { data }) => {
  const table = path(['table'], data)
  return state.merge({ filter: { ...state.filter, [table]: {} }, version: state.version + 1 })
}
export const submitFilter = (state, { data }) => {
  const table = path(['table'], data)
  const filter = path(['filter'], data)
  return state.merge({ filter: { ...state.filter, [table]: filter }, submitFilterMSG: { ...state.submitFilterMSG, [table]: { ir: true, rc: '', rm: '', rd: '' } }, version: state.version + 1 })
}
export const submitFilterDone = (state, { data }) => {
  const table = path(['table'], data)
  const rows = path(['rows'], data)
  const submitFilterMSG = path(['submitFilterMSG'], data)
  const page = path(['page'], data)
  const totalPages = path(['totalPages'], data)
  const size = path(['size'], data)
  return state.merge({ size: { ...state.size, [table]: size }, totalPages: { ...state.totalPages, [table]: totalPages }, page: { ...state.page, [table]: page }, rows: { ...state.rows, [table]: rows }, submitFilterMSG: { ...state.submitFilterMSG, [table]: submitFilterMSG }, version: state.version + 1 })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESET_FILTER]: resetFilter,
  [Types.FIELD_ON_CHANGE]: fieldOnChange,
  [Types.SUBMIT_FILTER]: submitFilter,
  [Types.SUBMIT_FILTER_DONE]: submitFilterDone
})
