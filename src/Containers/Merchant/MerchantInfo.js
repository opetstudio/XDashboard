import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import MerchantActions, {MerchantSelectors} from './redux'
import {LoginSelectors} from '../Login/redux'
import MerchantInfo from '../../Components/Merchant/MerchantInfo'

const mapStateToProps = (state, ownProps) => {
  return {
    merchantDetail: MerchantSelectors.merchantDetail(state.merchant),
    isRequesting: MerchantSelectors.isRequesting(state.merchant),
    responseMessage: MerchantSelectors.responseMessage(state.merchant),
    responseCode: MerchantSelectors.responseCode(state.merchant),
    userMerchantCode: LoginSelectors.userMerchantCode(state.login),
    userMerchantId: LoginSelectors.userMerchantId(state.login)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    merchantReadOneRequest: query => dispatch(MerchantActions.merchantReadOneRequest(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(MerchantInfo))
