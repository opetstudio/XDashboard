// --- import list page entity ---
import _ from 'lodash'
import { merge } from 'ramda'
import HomePageContainer from '../Containers/Home/HomePageContainer'

import PageMerchant from '../Containers/Merchant/PageMerchant'
import MerchantCreatePageContainer from '../Containers/Merchant/MerchantCreatePageContainer'
import MerchantListPageContainer from '../Containers/Merchant/MerchantListPageContainer'
import MerchantChangeLimitPageContainer from '../Containers/Merchant/ChangeLimitPageContainer'
import PageViewMerchantLImit from '../Containers/Merchant/PageViewMerchantLImit'
import MerchantProfilePage from '../Containers/Merchant/MerchantProfilePage'
import MerchantCredentialPage from '../Containers/Merchant/MerchantCredentialPage'
import MerchantEditProfilePage from '../Containers/Merchant/MerchantEditProfilePage'
import PageTrxDetail from '../Containers/Transaction/PageTrxDetail'
import PageTrxDetailForRefundRequest from '../Containers/Transaction/PageTrxDetailForRefundRequest'
import PageTrxDetailForRefundReview from '../Containers/Transaction/PageTrxDetailForRefundReview'

// merchantusermanagement
import PageAllUser from '../Containers/Usermanagement/PageAllUser'

import UserCreatePageContainer from '../Containers/User/UserCreatePageContainer'
import UserListPageContainer from '../Containers/User/UserListPageContainer'
import UserChangeLimitPageContainer from '../Containers/User/ChangeLimitPageContainer'

import PaymentgwCreatePageContainer from '../Containers/Paymentgw/PaymentgwCreatePageContainer'
import PaymentgwListPageContainer from '../Containers/Paymentgw/PaymentgwListPageContainer'

import TransactionListPageContainer from '../Containers/Transaction/TransactionListPageContainer'
import RefundRequestPage from '../Containers/Transaction/RefundRequestPage'
import RefundReviewPage from '../Containers/Transaction/RefundReviewPage'
import LoginPageContainer from '../Pages/Login/PageLogin'
// import LoginPageContainer from '../Containers/Login/LoginPageContainer'
import SignupPageContainer from '../Containers/Signup/SignupPageContainer'
import GenerateQrcodePageContainer from '../Containers/Qrcode/GenerateQrcodePageContainer'

// import contiainer untuk halaman my profile
import MyProfilePage from '../Containers/Profile/MyProfilePage'

const lp = {
  '/home': {route: '/home', path: '/home/:sessionToken', component: HomePageContainer, role: '100,200,210,300,310,400'}, // 1
  '/usermanagement/listAllUser': {route: '/usermanagement/listAllUser', path: '/usermanagement/listAllUser/:sessionToken', component: PageAllUser, role: '100,200,210,300,310,400', title: 'All User'}, // 2
  '/paymentgw/create': {route: '/paymentgw/create', path: '/paymentgw/create/:sessionToken', component: PaymentgwCreatePageContainer, role: '100,200,210,300,310,400'}, // 3
  '/paymentgw/list': {route: '/paymentgw/list', path: '/paymentgw/list/:sessionToken', component: PaymentgwListPageContainer, role: '100,200,210,300,310,400'},
  '/institution/qrcode/allactive': {route: '/institution/qrcode/allactive', path: '/institution/qrcode/:sessionToken', component: PageMerchant, role: '100,200,210'},
  '/merchant/all': {route: '/merchant/all', path: '/merchant/all/:sessionToken', component: PageMerchant, role: '100,200,210,300,310,400'},
  '/merchant/create': {route: '/merchant/create', path: '/merchant/create/:sessionToken', component: MerchantCreatePageContainer, role: '100,200,210,300,310,400'},
  '/merchant/change-limit': {route: '/merchant/change-limit', path: '/merchant/change-limit/:sessionToken', component: MerchantChangeLimitPageContainer, role: '300,310'},
  '/merchant/view-limit': {route: '/merchant/view-limit', path: '/merchant/view-limit/:sessionToken', component: PageViewMerchantLImit, role: ''},
  '/merchant/list': {route: '/merchant/list', path: '/merchant/list/:sessionToken', component: MerchantListPageContainer, role: '100,200,210,300,310,400'},
  '/merchant/profile': {route: '/merchant/profile', path: '/merchant/profile/:sessionToken', component: MerchantProfilePage, role: '300,310'},
  '/merchant/edit-profile': {route: '/merchant/edit-profile', path: '/merchant/edit-profile/:sessionToken', component: MerchantEditProfilePage, role: '100,200,210,300,310,400'},
  '/merchant/credential': {route: '/merchant/credential', path: '/merchant/credential/:sessionToken', component: MerchantCredentialPage, role: '300'},
  '/user/create': {route: '/user/create', path: '/user/create/:sessionToken', component: UserCreatePageContainer, role: '100,200,210,300,310,400'},
  '/user/change-limit': {route: '/user/change-limit', path: '/user/change-limit/:sessionToken', component: UserChangeLimitPageContainer, role: '100,200,210,300,310,400'},
  '/user/list': {route: '/user/list', path: '/user/list/:sessionToken', component: UserListPageContainer, role: '100,200,210,300,310,400'},
  '/report': {route: '/report', path: '/report/:sessionToken', component: TransactionListPageContainer, role: '100,200,210,300,310,400', title: 'Transaction Report'},
  '/report/detail': {route: '/report/detail', path: '/report/detail/:sessionToken', component: PageTrxDetail, role: '100,200,210,300,310,400', title: 'Transaction Detail'},
  '/report/detail-for-refund-request': {route: '/report/detail-for-refund-request', path: '/report/detail-for-refund-request/:sessionToken', component: PageTrxDetailForRefundRequest, role: '300,310', title: 'Transaction Detail For Refund Request'},
  '/report/detail-for-refund-review': {route: '/report/detail-for-refund-review', path: '/report/detail-for-refund-review/:sessionToken', component: PageTrxDetailForRefundReview, role: '300,310', title: 'Transaction Detail For Refund Request'},
  '/transaction/refund-request': {route: '/transaction/refund-request', path: '/transaction/refund-request/:sessionToken', component: RefundRequestPage, role: '300,310'},
  '/transaction/refund-review': {route: '/transaction/refund-review', path: '/transaction/refund-review/:sessionToken', component: RefundReviewPage, role: '300'},
  '/report-transaction/list-detail-transaction': {route: '/report-transaction/list-detail-transaction', path: '/report-transaction/list-detail-transaction/:sessionToken', component: TransactionListPageContainer, role: '100,200,210,300,310,400', title: 'Transaction Report'},
  '/login': {route: '/login', path: '/login', component: LoginPageContainer, role: '100,200,210,300,310,400'},
  '/signup': {route: '/signup', path: '/signup/:sessionToken', component: SignupPageContainer, role: '100,200,210,300,310,400'},
  '/qrcode/generate': {route: '/qrcode/generate', path: '/qrcode/generate/:sessionToken', component: GenerateQrcodePageContainer, role: '100,200,210,300,310,400'},
  '/my-profile': {route: '/my-profile', path: '/my-profile/:sessionToken', component: MyProfilePage, role: '100,200,210,300,310,400'},
  '/edit-my-profile': {route: '/edit-my-profile', path: '/edit-my-profile/:sessionToken', component: MyProfilePage, role: '100,200,210,300,310,400'},
  // '/': {route: '/', path: '/:sessionToken', component: HomePageContainer, role: '100,200,210,300,310,400'} // 0
}
// _.map({ 'a': 4, 'b': 8 }, square);
export const pageList = _.map(lp, (v) => v)
export const getPage = (pageId) => lp[pageId] || {}
