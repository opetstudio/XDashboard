import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { isEmpty, isNil } from 'ramda'
import { injectIntl } from 'react-intl'
// import LoginActions, { LoginSelectors } from './redux'
import LoginContainer from '../../Containers/Login/LoginContainer'

class PageLogin extends Component {
  isEmptyOrNull (str) {
    return isEmpty(str) || isNil(str)
  }

  render () {
    return (
      <div className='login-box'>
        <Helmet>
          <title>Login</title>
          <body className='hold-transition login-page' />
        </Helmet>
        <div className='login-logo'>
          <a href='#'><b>PLINK</b> Direct Debit</a>
        </div>
        <div className='card'>
          <div className='card-body login-card-body'>
            <p className='login-box-msg'>Sign in to start your session</p>
            <LoginContainer location={this.props.location} />
            {/* <p className='mb-1'>
              <a href='#'>I forgot my password</a>
            </p>
            <p className='mb-0'>
              <a href='#' className='text-center'>Register a new membership</a>
            </p> */}
          </div>
        </div>
      </div>
    )
  }
}
export default injectIntl(PageLogin)
