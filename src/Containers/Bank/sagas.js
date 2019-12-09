import { call, put, select } from 'redux-saga/effects'
import Immutable from 'seamless-immutable'
import BankActions from './redux'
import { is, path } from 'ramda'
import { transResponse, transResponseGetDetail } from '../../Transforms/TransformAttributes'

export function * bankFetchAll (api, action) {
  const { data } = action
  const resp = yield call(api.bankFetchAll, data)
  console.log('response ===> ', resp)
  const response = transResponse(resp)
  let bankFetchAllMSG = { ir: false, rc: path(['data', 'responseCode'], response), rm: path(['data', 'responseMessage'], response), rd: path(['data', 'responseDescription'], response) }
  if (!response.ok) {
    if (response.status === 400) {
      const message = path(['data', 'message'], response)
      bankFetchAllMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: message }
    } else bankFetchAllMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: response.problem }
    yield put(BankActions.bankPatch({ bankFetchAllMSG }))
  } else {
    const bankById = path(['data', 'rows'], response)
    yield put(BankActions.bankPatch({ bankFetchAllMSG, bankById }))
  }
}
export function * bankFetchCredential (api, action) {
  const { data } = action
  const resp = yield call(api.bankFetchCredential, data)
  console.log('resp ==> ', resp)
  const response = transResponseGetDetail(resp)
  console.log('response ==> ', response)
  let bankFetchCredentialMSG = { ir: false, rc: path(['data', 'responseCode'], response), rm: path(['data', 'responseMessage'], response), rd: path(['data', 'responseDescription'], response) }
  if (!response.ok) {
    bankFetchCredentialMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: response.problem }
    yield put(BankActions.bankPatch({ bankFetchCredentialMSG }))
  } else {
    const bankCredential = path(['data', 'data'], response)
    yield put(BankActions.bankPatch({ bankFetchCredentialMSG, bankCredential }))
  }
}
