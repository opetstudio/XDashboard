import { takeLatest, all } from 'redux-saga/effects'
// You'll need to alter this file when you go to connect the api for realsies. Add
// back the lines ending with with a # (and of course, remove the #) :)
import API from '../Services/Api'
import RehydrationServices from '../Services/RehydrationServices'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'
import AppConfig from '../Config/AppConfig'

// Types /* ------------- Types ------------- */

// begin Ignite-Entity-Login
import { LoginTypes } from '../Containers/Login/redux'
// end Ignite-Entity-Login
import { MerchantTypes } from '../Containers/Merchant/redux'
import { TransactionTypes } from '../Containers/Transaction/redux'
import { PaymentgwTypes } from '../Containers/Paymentgw/redux'
import { UserTypes } from '../Containers/User/redux'
import { TablepaginationTypes } from '../Containers/TablePagination/redux'
import { DashboardTypes } from '../Containers/Dashboard/redux'
import { BankTypes } from '../Containers/Bank/redux'

// begin Ignite-Entity-Paymentpage
// import { PaymentpageTypes } from '../Containers/Paymentpage/redux'
// end Ignite-Entity-Paymentpage
// begin Ignite-Entity-Qrcode
// import { QrcodeTypes } from '../Containers/Qrcode/redux'
// end Ignite-Entity-Qrcode

import { StartupTypes } from '../Redux/StartupRedux'
// Sagas /* ------------- Sagas ------------- */

// begin Ignite-Entity-Login
import {
  loginDoLogin, loginCheckStatus,
  postLogin,
  getLogins,
  getLogin,
  updateLogin,
  removeLogin
} from '../Containers/Login/sagas'
// end Ignite-Entity-Login
import {
  merchantCreateRequest,
  merchantReadRequest,
  merchantReadOneRequest,
  merchantRequestMinMaxLimit,
  merchantUpdateMinMaxLimit,
  merchantGetCredential
} from '../Containers/Merchant/sagas'
import {transactionFetchOne, transactionRefundFetchOne, transactionRefundRequest} from '../Containers/Transaction/sagas'
import {userCreateRequest, userReadRequest} from '../Containers/User/sagas'
import {paymentgwCreateRequest, paymentgwReadRequest} from '../Containers/Paymentgw/sagas'
import {tablepaginationReadRequest, tablepaginationFetchAllUser, tablepaginationFetchAllTrxForRefundRequest, tablepaginationFetchAllTrxForRefundReview} from '../Containers/TablePagination/sagas'
import { dashbaordFetch } from '../Containers/Dashboard/sagas'
import { bankFetchCredential } from '../Containers/Bank/sagas'

// begin Ignite-Entity-Paymentpage
// import { paymentpageRequest } from '../Containers/Paymentpage/sagas'
// end Ignite-Entity-Paymentpage
// begin Ignite-Entity-Qrcode
// import { qrcodeRequest } from '../Containers/Qrcode/sagas'
// end Ignite-Entity-Qrcode
import { startup } from './StartupSagas'
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const baseUrl = AppConfig.env === 'development' ? '/' : 'https://api1.opetstudio.com/'
const baseUrl =
  AppConfig.env === 'development'
    // ? 'http://127.0.0.1:8080/MdoSwaggerUi/rest/simulatorBackend/'
    ? 'http://localhost:8081/'
    // ? 'https://api1.opetstudio.com/'
    : '/MdoSwaggerUi/rest/simulatorBackend/'
    // : 'https://api1.opetstudio.com/'
// const baseUrl = 'http://localhost:8080/'
const host = baseUrl + ''
const api = DebugConfig.useFixtures ? FixtureAPI : API.create(host)
// const apiQrcode = API.create(AppConfig.env === 'development' ? 'http://localhost:8762/' : 'https://api.erevnaraya.com/')
// const apiQrcode = API.create(AppConfig.env === 'development' ? 'http://localhost:8762/' : 'http://localhost:8762/')
// const apiQrcode = API.create(AppConfig.env === 'development' ? 'http://localhost:8762/' : 'http://188.166.198.144:8762/')
// const apiQrcode = API.create(AppConfig.env === 'development' ? 'https://api.erevnaraya.com/' : 'https://api.erevnaraya.com/')
// const apiDashboard = API.create(AppConfig.env === 'development' ? 'https://api.erevnaraya.com/simulator/' : 'https://api.erevnaraya.com/simulator/')
// const apiDashboard = API.create(AppConfig.env === 'development' ? 'http://localhost:8762/dashboard-api/' : 'http://192.168.64.2:31589/dashboard-api/')
// const apiDashboard = API.create(AppConfig.env === 'development' ? 'http://188.166.198.144:8762/dashboard-api/' : 'http://188.166.198.144:8762/dashboard-api/')
// const apiDashboard = API.create(AppConfig.env === 'development' ? 'http://localhost:8089/dashboard-api/' : 'http://localhost:8089/dashboard-api/')
// const apiDashboard = API.create(AppConfig.env === 'development' ? 'http://localhost:8762/dashboard-api/' : 'http://localhost:8762/dashboard-api/')
// const apiDashboard = API.create(AppConfig.env === 'development' ? 'http://localhost:8762/dashboard-api/' : 'http://188.166.198.144:8762/dashboard-api/')
// const apiDashboard = API.create(AppConfig.env === 'development' ? 'http://localhost:8762/dashboard-api/' : 'https://dev-directdebit.plink.co.id/dashboard-api/')
const hostBackend = AppConfig.env === 'development' ? 'http://localhost:8280' : 'http://159.65.131.214:30397'
// const hostBackend = AppConfig.env === 'development' ? 'http://localhost:8762' : 'https://api.erevnaraya.com'

const apiDashboard = DebugConfig.useFixtures ? FixtureAPI : API.create(hostBackend + '')
const apiDashboardPy = DebugConfig.useFixtures ? FixtureAPI : API.create(hostBackend + '')
// const apiDashboardPy = API.create(AppConfig.env === 'development' ? 'http://localhost:8762/dashboard-api/py/' : 'http://188.166.198.144:8762/dashboard-api/py/')
// const apiDashboardPy = API.create(AppConfig.env === 'development' ? 'http://localhost:8762/dashboard-api/py/' : 'http://localhost:8762/dashboard-api/py/')
// const apiDashboardPy = API.create(AppConfig.env === 'development' ? 'http://localhost:8762/dashboard-api/py/' : 'https://api.erevnaraya.com/dashboard-api/py/')
// const apiDashboardPy = API.create(AppConfig.env === 'development' ? 'http://localhost:8762/dashboard-api/py/' : 'https://dev-directdebit.plink.co.id/dashboard-api/py/')
// const apiDashboardPy = API.create(AppConfig.env === 'development' ? 'https://api.erevnaraya.com/dashboard-api/py/' : 'https://dev-directdebit.plink.co.id/dashboard-api/py/')
// const apiDashboard = API.create(AppConfig.env === 'development' ? 'http://localhost:8762/dashboard-api/' : 'https://api.erevnaraya.com/dashboard-api/')
// const apiDashboard2 = API.create(AppConfig.env === 'development' ? 'http://localhost:8280/' : 'http://localhost:8280/')
// const apiQrcode = API.create(AppConfig.env === 'development' ? 'http://localhost:8762/' : 'https://api.erevnaraya.com/')
// const apiPaymentpage = API.create(AppConfig.env === 'development' ? 'http://202.158.24.186:8380/' : '/')
// const baseApi = DebugConfig.useFixtures ? FixtureAPI : API.create(baseUrl)
/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(BankTypes.BANK_FETCH_CREDENTIAL, bankFetchCredential, apiDashboard),
    takeLatest(DashboardTypes.DASHBOARD_FETCH, dashbaordFetch, apiDashboard),

    takeLatest(UserTypes.USER_CREATE_REQUEST, userCreateRequest, API.create(hostBackend + '/dashboard/')),
    takeLatest(UserTypes.USER_READ_REQUEST, userReadRequest, API.create(hostBackend + '/dashboard/')),
    
    takeLatest(TransactionTypes.TRANSACTION_FETCH_ONE, transactionFetchOne, apiDashboardPy),
    takeLatest(TransactionTypes.TRANSACTION_REFUND_FETCH_ONE, transactionRefundFetchOne, apiDashboardPy),
    takeLatest(TransactionTypes.TRANSACTION_REFUND_REQUEST, transactionRefundRequest, apiDashboard),
    
    takeLatest(MerchantTypes.MERCHANT_CREATE_REQUEST, merchantCreateRequest, apiDashboard),
    takeLatest(MerchantTypes.MERCHANT_READ_REQUEST, merchantReadRequest, apiDashboard),
    takeLatest(MerchantTypes.MERCHANT_READ_ONE_REQUEST, merchantReadOneRequest, apiDashboardPy),
    takeLatest(MerchantTypes.MERCHANT_REQUEST_MIN_MAX_LIMIT, merchantRequestMinMaxLimit, apiDashboardPy),
    takeLatest(MerchantTypes.MERCHANT_UPDATE_MIN_MAX_LIMIT, merchantUpdateMinMaxLimit, apiDashboard),
    takeLatest(MerchantTypes.MERCHANT_GET_CREDENTIAL, merchantGetCredential, apiDashboardPy),

    takeLatest(PaymentgwTypes.PAYMENTGW_CREATE_REQUEST, paymentgwCreateRequest, apiDashboard),
    takeLatest(PaymentgwTypes.PAYMENTGW_READ_REQUEST, paymentgwReadRequest, apiDashboard),

    takeLatest(LoginTypes.LOGIN_CREATE, postLogin, apiDashboard),
    takeLatest(LoginTypes.LOGIN_REMOVE, removeLogin, apiDashboard),

    takeLatest(LoginTypes.LOGIN_DO_LOGIN, loginDoLogin, apiDashboard),
    takeLatest(LoginTypes.LOGIN_CHECK_STATUS, loginCheckStatus, apiDashboard),

    takeLatest(TablepaginationTypes.TABLEPAGINATION_READ_REQUEST, tablepaginationReadRequest, apiDashboard),
    takeLatest(TablepaginationTypes.TABLEPAGINATION_FETCH_ALL_USER, tablepaginationFetchAllUser, apiDashboard),
    takeLatest(TablepaginationTypes.TABLEPAGINATION_FETCH_ALL_TRX_FOR_REFUND_REQUEST, tablepaginationFetchAllTrxForRefundRequest, apiDashboard),
    takeLatest(TablepaginationTypes.TABLEPAGINATION_FETCH_ALL_TRX_FOR_REFUND_REVIEW, tablepaginationFetchAllTrxForRefundReview, apiDashboard),

    takeLatest(StartupTypes.STARTUP, startup, api)
    // some sagas receive extra parameters in addition to an action
    // takeLatest(UserTypes.USER_REQUEST, getUserAvatar, api)
  ])
}
