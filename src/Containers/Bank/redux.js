import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import _ from 'lodash'

const { Types, Creators } = createActions({
  bankFetchAll: ['data'],
  bankFetchOne: ['data'],
  bankFetchCredential: ['data'],
  bankPatch: ['data'],
  reset: null
})

export const BankTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  bankFetchAllMSG: { ir: false, rc: '', rs: '', rd: '' },
  bankFetchOneMSG: { ir: false, rc: '', rs: '', rd: '' },
  bankFetchCredentialMSG: { ir: false, rc: '', rs: '', rd: '' },
  bankCredential: {},
  version: 0,
  bankById: {}
})

export const BankSelectors = {
  bankFetchAllMSG: st => st.bankFetchAllMSG,
  bankFetchOneMSG: st => st.bankFetchOneMSG,
  bankFetchCredentialMSG: st => st.bankFetchCredentialMSG,
  bankCredential: st => st.bankCredential,
  bankById: st => st.bankById,
  getAllBankArr: st => _.map(st.bankById, (r) => r),
  getBankById: (st, id) => st.bankById[id],
  version: st => st.version
}
export const bankFetchAll = (state, { data }) => {
  return bankPatch(state, { data: { ...data, bankFetchAllMSG: { ir: true, rc: '', rs: '', rd: '' } } })
}
export const bankFetchOne = (state, { data }) => {
  return bankPatch(state, { data: { ...data, bankFetchOneMSG: { ir: true, rc: '', rs: '', rd: '' } } })
}
export const bankFetchCredential = (state, { data }) => {
  return bankPatch(state, { data: { ...data, bankFetchCredentialMSG: { ir: true, rc: '', rs: '', rd: '' } } })
}

export const bankPatch = (state, { data }) => {
  console.log('bankPatch data', data)
  const mergeData = {}
  if ('bankFetchAllMSG' in data) mergeData.bankFetchAllMSG = data.bankFetchAllMSG
  if ('bankFetchOneMSG' in data) mergeData.bankFetchOneMSG = data.bankFetchOneMSG
  if ('bankFetchCredentialMSG' in data) mergeData.bankFetchCredentialMSG = data.bankFetchCredentialMSG
  if ('bankCredential' in data) {
    console.log('bankCredential ===> ada di dalam data')
    mergeData.bankCredential = data.bankCredential
  }
  if ('bankById' in data) mergeData.bankById = data.bankById
  mergeData.version = state.version + 1
  return state.merge(mergeData)
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BANK_PATCH]: bankPatch,
  [Types.BANK_FETCH_ALL]: bankFetchAll,
  [Types.BANK_FETCH_ONE]: bankFetchOne,
  [Types.BANK_FETCH_CREDENTIAL]: bankFetchCredential,
  [Types.RESET]: (state) => INITIAL_STATE
})
