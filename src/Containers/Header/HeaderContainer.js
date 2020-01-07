import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import LoginActions, { LoginSelectors } from '../Login/redux'
import AppActions, {AppSelectors} from '../../Redux/AppRedux'

import HeaderComponent from '../../Components/Header/HeaderComponent'

class TheComponent extends React.PureComponent {
  render () {
    console.log('render')
    return (
      <HeaderComponent
        history={this.props.history}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sessionToken: LoginSelectors.sessionToken(state.login),
    userFullName: LoginSelectors.userFullName(state.login),
    userRole: LoginSelectors.userRole(state.login),
    routeActive: AppSelectors.routeActive(state.app),
    pageTitle: AppSelectors.pageTitle(state.app)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logout: (data) => dispatch(LoginActions.loginRemove(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
