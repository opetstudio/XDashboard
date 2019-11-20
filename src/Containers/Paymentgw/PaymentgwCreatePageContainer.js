import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import PaymentgwActions, {PaymentgwSelectors} from './redux'
import LoginActions, { LoginSelectors } from '../Login/redux'
import { Redirect } from 'react-router-dom'
import PaymentgwCreatePageComponent from '../../Components/Paymentgw/PaymentgwCreatePageComponent'
import {isLoggedIn} from '../../Utils/Utils'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

class TheComponent extends React.PureComponent {
  render () {
    console.log('render')
    if (isLoggedIn(this.props.isLoggedIn) !== true) { return <Redirect to={`${basePath}/login`} /> }
    return (<PaymentgwCreatePageComponent
      history={this.props.history}
      {...this.props}
    />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login),
    isRequesting: PaymentgwSelectors.isRequesting(state.paymentgw),
    responseMessage: PaymentgwSelectors.responseMessage(state.paymentgw),
    responseCode: PaymentgwSelectors.responseCode(state.paymentgw)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    paymentgwRequestPatch: query => dispatch(PaymentgwActions.paymentgwRequestPatch(query)),
    paymentgwCreateRequest: query => dispatch(PaymentgwActions.paymentgwCreateRequest(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
