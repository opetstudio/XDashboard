import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import MerchantActions, {MerchantSelectors} from './redux'
import {LoginSelectors} from '../Login/redux'
import MerchantCredentialInfo from '../../Components/Merchant/MerchantCredentialInfo'

const mapStateToProps = (state, ownProps) => {
  return {
    isRequesting: MerchantSelectors.isRequesting(state.merchant),
    merchantCredential: MerchantSelectors.merchantCredential(state.merchant),
    userMerchantCode: LoginSelectors.userMerchantCode(state.login)
    // merchantCredential: {
    //   merchantId: 'ec3d6565-bb12-44a3-ad29-bfae8e840f59',
    //   keyId: 'ec3d6565-bb12-44a3-ad29-bfae8e845123',
    //   merchantCode: '000000070070071',
    //   instCatCd: 'instCatCd',
    //   frontendCallbackUrl: 'frontendCallbackUrl',
    //   backendCallbackUrl: 'backendCallbackUrl',
    //   merchantName: 'elevenia2019',
    //   merchantSecretKey: '756eb95f30a491c5a6e0f013',
    //   newMerchantSecretKey: '',
    //   validFrom: '2019-09-01 00:00:00',
    //   validTo: '2019-12-01 00:00:00',
    //   status: 'active',
    //   remark: '',
    //   updatedDate: ''
    // },
    // merchantCredential: MerchantSelectors.merchantCredential(state.merchant),
    // userMerchantCode: LoginSelectors.userMerchantCode(state.login)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    merchantGetCredential: data => dispatch(MerchantActions.merchantGetCredential(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(MerchantCredentialInfo))
