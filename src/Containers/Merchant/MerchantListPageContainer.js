import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import MerchantActions, {MerchantSelectors} from './redux'
import LoginActions, { LoginSelectors } from '../Login/redux'
import { Redirect } from 'react-router-dom'
import {isLoggedIn} from '../../Utils/Utils'
import MerchantListPageComponent from '../../Components/Merchant/MerchantListPageComponent'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

class TheComponent extends React.PureComponent {
  render () {
    console.log('render')
    if (isLoggedIn(this.props.isLoggedIn) !== true) { return <Redirect to={`${basePath}/login`} /> }
    return (<MerchantListPageComponent
      history={this.props.history}
      {...this.props}
    />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login),
    isRequesting: MerchantSelectors.isRequesting(state.merchant)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    merchantRequestPatch: query => dispatch(MerchantActions.merchantRequestPatch(query)),
    merchantReadRequest: query => dispatch(MerchantActions.merchantReadRequest(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
