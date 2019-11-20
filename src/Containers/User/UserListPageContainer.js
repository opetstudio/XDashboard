import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import UserActions from './redux'
import { LoginSelectors } from '../Login/redux'
import { Redirect } from 'react-router-dom'
import UserListPageComponent from '../../Components/User/UserListPageComponent'
import {isLoggedIn} from '../../Utils/Utils'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

class TheComponent extends React.PureComponent {
  render () {
    console.log('render')
    if (isLoggedIn(this.props.isLoggedIn) !== true) { return <Redirect to={`${basePath}/login`} /> }
    return (<UserListPageComponent
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
  return {
    userRequestPatch: query => dispatch(UserActions.userRequestPatch(query)),
    userReadRequest: query => dispatch(UserActions.userReadRequest(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
