import React from 'react'
import { connect } from 'react-redux'
import SignupPageComponent from '../../Components/Signup/SignupPageComponent'
import {isLoggedIn} from '../../Utils/Utils'
import LoginActions, { LoginSelectors } from '../Login/redux'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

const TheComponent = props => {
  if (isLoggedIn(props.isLoggedIn) !== true) { return <SignupPageComponent {...props} /> } else window.open(`${basePath}/`, '_self')
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login)
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(TheComponent)
