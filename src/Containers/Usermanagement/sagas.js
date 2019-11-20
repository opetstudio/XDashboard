import { call, put, select } from 'redux-saga/effects'
import MerchantActions from './redux'
import { getAttributes } from '../../Transforms/TransformAttributes'
import { path } from 'ramda'
import {getAccessToken} from '../../Utils/Utils'

// export const session = state => ({...state.login.single, token: state.login.token, isLoggedIn: state.login.isLoggedIn})
export const transformedData = response => getAttributes(response.data)
export const session = state => ({
  ...state.login.single,
  token: state.login.token,
  sessionToken: state.login.sessionToken,
  isLoggedIn: state.login.isLoggedIn
})
export function * fetchUserMerchantByMerchantCode (api, action) {
  const { data } = action
  const s = yield select(session)
  const response = yield call(api.fetchUserMerchantByMerchantCode, data, {merchantCode: data.merchantCode, session: {access_token: getAccessToken(s.sessionToken)}})
  let allUserMerchant = path(['data'], response)
  let responseMessage = ''
  let responseCode = ''
  if (response.ok) {
    responseCode = 'MBDD00'
    responseMessage = 'SUCCESS'
  } else {
    responseCode = 'MBDD01'
    responseMessage = 'FAILED'
  }
  yield put(MerchantActions.merchantRequestPatch({isRequesting: false, responseCode, responseMessage, allUserMerchant}))
}
