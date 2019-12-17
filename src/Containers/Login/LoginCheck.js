import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { Redirect } from 'react-router-dom'
import { LoginSelectors } from '../Login/redux'
import { isLoggedIn } from '../../Utils/Utils'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath
class TheComponent extends React.PureComponent {
  render () {
    console.log('LoginCheck render')
    if (isLoggedIn(this.props.isLoggedIn) !== true) { return <Redirect to={`${basePath}/login`} /> }
    return null
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
