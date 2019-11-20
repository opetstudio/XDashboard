import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import MerchantActions, {MerchantSelectors} from './redux'
import LoginActions, { LoginSelectors } from '../Login/redux'
import { Redirect } from 'react-router-dom'
import PageMerchant from '../../Components/Merchant/PageMerchant'
import {isLoggedIn} from '../../Utils/Utils'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

class TheComponent extends React.PureComponent {
  render () {
    console.log('render')
    if (isLoggedIn(this.props.isLoggedIn) !== true) { return <Redirect to={`${basePath}/login`} /> }
    return (<PageMerchant
      history={this.props.history}
      {...this.props}
    />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login),
    sessionToken: LoginSelectors.sessionToken(state.login),
    userMerchantCode: LoginSelectors.userMerchantCode(state.login),
    merchantLimitMin: MerchantSelectors.merchantLimitMin(state.merchant),
    merchantLimitMax: MerchantSelectors.merchantLimitMax(state.merchant)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    merchantRequestMinMaxLimit: query => dispatch(MerchantActions.merchantRequestMinMaxLimit(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
