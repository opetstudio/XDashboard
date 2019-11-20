import React, { Component } from 'react'
import Helmet from 'react-helmet'
import {Link} from 'react-router-dom'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

export default class SignupPageComponent extends Component {
  componentDidMount () {
    window.SignupPageComponent()
  }
  _formOnSubmit (e) {
    if (e) e.preventDefault()
    const email = this.refs.email.value
    const pass = this.refs.password.value
    alert(pass)
    // this.props.loginCreate({
    //   userid: email,
    //   password: pass
    // })
    return false
  }
  render () {
    console.log('render')
    return (<div>
      <Helmet>
        <title>Signup</title>
        <body className='hold-transition register-page' />
      </Helmet>
      <div className='register-box'>
        <div className='register-logo'>
          <a href='../../index2.html'><b>PLINK MBDD</b></a>
        </div>
        <div className='register-box-body'>
          <p className='login-box-msg'>Register a new membership</p>
          <form onSubmit={(e) => this._formOnSubmit(e)}>
            <div className='form-group has-feedback'>
              <input type='text' className='form-control' placeholder='Full name' ref='fullname' />
              <span className='glyphicon glyphicon-user form-control-feedback' />
            </div>
            <div className='form-group has-feedback'>
              <input type='email' className='form-control' placeholder='Email' ref='email' />
              <span className='glyphicon glyphicon-envelope form-control-feedback' />
            </div>
            <div className='form-group has-feedback'>
              <input type='password' className='form-control' placeholder='Password' ref='password' />
              <span className='glyphicon glyphicon-lock form-control-feedback' />
            </div>
            <div className='form-group has-feedback'>
              <input type='password' className='form-control' placeholder='Retype password' ref='passwordconfirm' />
              <span className='glyphicon glyphicon-log-in form-control-feedback' />
            </div>
            <div className='row'>
              <div className='col-xs-8'>
                {/* <div className='checkbox icheck'>
                  <label>
                    <input type='checkbox' /> I agree to the <a href='#'>terms</a>
                  </label>
                </div> */}
              </div>
              {/* /.col */}
              <div className='col-xs-4'>
                <button type='submit' className='btn btn-primary btn-block btn-flat'>Register</button>
              </div>
              {/* /.col */}
            </div>
          </form>
          <Link to={`${basePath}/login`} className='text-center'>I already have a membership</Link>

        </div>
        {/* /.form-box */}
      </div>
    </div>)
  }
}
