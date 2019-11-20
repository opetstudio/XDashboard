import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import MerchantActions, {MerchantSelectors} from './redux'
import LoginActions, { LoginSelectors } from '../Login/redux'
import { Redirect } from 'react-router-dom'
import MerchantProfilePageComp from '../../Components/Merchant/MerchantProfilePageComp'

import {isLoggedIn} from '../../Utils/Utils'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

class TheComponent extends React.PureComponent {
  render () {
    console.log('render')
    if (isLoggedIn(this.props.isLoggedIn) !== true) { return <Redirect to={`${basePath}/login`} /> }
    return (<MerchantProfilePageComp
      history={this.props.history}
      {...this.props}
    />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login)
  }
}
const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
