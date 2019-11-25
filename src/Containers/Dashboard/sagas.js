import { call, put, select } from 'redux-saga/effects'
import { path } from 'ramda'
import DashboardActions from './redux'

export function * dashbaordFetch (api, action) {
  const { data } = action
  const response = yield call(api.dashbaordFetch, data.payload, {})
  const dashbaordFetchMSG = { ir: false, rc: path(['data', 'responseCode'], response), rm: path(['data', 'responseMessage'], response), rd: path(['data', 'responseDescription'], response) }
  console.log('dashbaordFetchMSG==>', dashbaordFetchMSG)

  yield put(DashboardActions.dashbaordFetch({ dashbaordFetchMSG }))
}
