import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import PaymentgwActions, {PaymentgwSelectors} from './redux'
import LoginActions, { LoginSelectors } from '../Login/redux'
import { Redirect } from 'react-router-dom'
import PaymentgwListPageComponent from '../../Components/Paymentgw/PaymentgwListPageComponent'
import {isLoggedIn} from '../../Utils/Utils'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

class TheComponent extends React.PureComponent {
  render () {
    console.log('render')
    if (isLoggedIn(this.props.isLoggedIn) !== true) { return <Redirect to={`${basePath}/login`} /> }
    return (<PaymentgwListPageComponent
      history={this.props.history}
      {...this.props}
    />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login),
    dataPaymentgw: PaymentgwSelectors.dataPaymentgw(state.paymentgw),
    pages: PaymentgwSelectors.pages(state.paymentgw),
    page: PaymentgwSelectors.page(state.paymentgw),
    isRequesting: PaymentgwSelectors.isRequesting(state.paymentgw)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    paymentgwRequestPatch: query => dispatch(PaymentgwActions.paymentgwRequestPatch(query)),
    paymentgwReadRequest: query => dispatch(PaymentgwActions.paymentgwReadRequest(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
