import { call, put, select } from 'redux-saga/effects'
import { path } from 'ramda'
import PaginationActions from './redux'

export function * submitFilter (api, action) {
  const { data } = action
  console.log('data====>', data)
  const { table, page, size, filter, columns, datasource } = data
  const response = yield call(api.submitFilter, { table, page, size, filter, columns, datasource })
  console.log('response===>', response)
  const submitFilterMSG = { ir: false, rc: '00', rm: '', rd: '' }
  const rows = path(['data', 'data', datasource, 'content'], response)
  //   const page = path(['data', 'data', table, 'number'], response)
  const totalPages = path(['data', 'data', datasource, 'totalPages'], response)
  //   const size = path(['data', 'data', table, 'size'], response)
  if (response.ok) {
    // rows = {}
  } else {
    submitFilterMSG.rd = path(['problem'], response)
    submitFilterMSG.rm = 'GENERAL_ERROR'
    submitFilterMSG.rc = '99'
  }
  yield put(PaginationActions.submitFilterDone({ table, rows, submitFilterMSG, page, totalPages, size }))
}
