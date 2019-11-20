import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import UserActions, {UserSelectors} from './redux'
import LoginActions, { LoginSelectors } from '../Login/redux'
import { Redirect } from 'react-router-dom'
import UserCreatePageComponent from '../../Components/User/UserCreatePageComponent'
import {isLoggedIn} from '../../Utils/Utils'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

class TheComponent extends React.PureComponent {
  render () {
    console.log('render')
    if (isLoggedIn(this.props.isLoggedIn) !== true) { return <Redirect to={`${basePath}/login`} /> }
    return (<UserCreatePageComponent
      history={this.props.history}
      {...this.props}
    />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login),
    isRequesting: UserSelectors.isRequesting(state.user),
    responseMessage: UserSelectors.responseMessage(state.user),
    responseDescription: UserSelectors.responseDescription(state.user),
    responseCode: UserSelectors.responseCode(state.user)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    userRequestPatch: query => dispatch(UserActions.userRequestPatch(query)),
    userCreateRequest: query => dispatch(UserActions.userCreateRequest(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
