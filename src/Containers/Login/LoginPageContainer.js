import React from 'react'
import { connect } from 'react-redux'
import qs from 'qs'
import LoginActions, { LoginSelectors } from './redux'
import {isLoggedIn, getAccessToken} from '../../Utils/Utils'
import LoginPageComponent from '../../Components/Login/LoginPageComponent'
import { injectIntl } from 'react-intl'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

class TheComponent extends React.PureComponent {
  componentWillMount () {
    let force = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).force
    if(force === 'y'){
      window.localStorage.removeItem(AppConfig.sessionData)
      window.open(`${basePath}/login`, '_self', true)
    }
  }
  render () {
    console.log('render')
    if (isLoggedIn(this.props.isLoggedIn) !== true) return (<LoginPageComponent {...this.props} />)
    // if (isLoggedIn(this.props.isLoggedIn) !== true) return null
    // else return null
    else return window.open(`${basePath}/home/${getAccessToken(this.props.sessionToken)}`, '_self', true)
  }
}

// const TheComponent = props => {
//   // else window.location.assign = '/'
//   // else window.location.reload(true)
//   // else window.open('http://localhost:3000/', '_self', true)
//   else {
//     console.log('doing click')
//     document.getElementById('gotohome').click()
//   }
//   // else window.location.replace('http://localhost:3000/home')
//   //gotohome
// }
const mapStateToProps = (state, ownProps) => {
  // const isLoggedIn = LoginSelectors.isLoggedIn(state.login)
  // console.log('mapStateToProps isLoggedIn=', isLoggedIn)
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login),
    isRequesting: LoginSelectors.isRequesting(state.login),
    sessionToken: LoginSelectors.sessionToken(state.login),
    formSubmitMessage: LoginSelectors.getFormSubmitMessage(state.login),
    responseMessage: LoginSelectors.responseMessage(state.login),
    responseDescription: LoginSelectors.responseDescription(state.login),
    responseCode: LoginSelectors.responseCode(state.login)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginDoLogin: data => dispatch(LoginActions.loginDoLogin(data)),
    loginPatch: data => dispatch(LoginActions.loginPatch(data)),
    logout: data => dispatch(LoginActions.logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
