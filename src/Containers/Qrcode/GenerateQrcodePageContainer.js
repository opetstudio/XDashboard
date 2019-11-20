import React from 'react'
import { connect } from 'react-redux'
import GenerateQrcodePageComponent from '../../Components/Qrcode/GenerateQrcodePageComponent'
import AppConfig from '../../Config/AppConfig'
import {getSession} from '../../Utils/Utils'

const TheComponent = props => {
  let isLoggedIn = getSession(AppConfig.loginFlag)
  if (isLoggedIn === true) { return <GenerateQrcodePageComponent {...props} /> } else window.open('/', '_self')
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(TheComponent)
