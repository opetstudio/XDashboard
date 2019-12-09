import React, { Component } from 'react'
import {path} from 'ramda'
import Helmet from 'react-helmet'
import BankCredentialInfo from '../../Containers/Bank/BankCredentialInfo'
import LoginCheck from '../../Containers/Login/LoginCheck'

class PageMerchantCredential extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Bank Credential</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        <section className='content-header'>
          <h1>Bank Credential</h1>
          <ol className='breadcrumb'>
            <li>
              <a href='#'>
                <i className='fa fa-dashboard' /> Bank
              </a>
            </li>
            <li className='active'>Bank Credential</li>
          </ol>
        </section>
        <section className='content'>
          <form onSubmit={e => this._onSubmitForm(e)}>
            <div className='box box-primary'>
              <div className='box-header with-border'>
                <h3 className='box-title'>Bank Credential</h3>
              </div>
              <div className='box-body'>
                <BankCredentialInfo />
              </div>
              <div className='box-footer'>
                {/* <button type='submit' className='btn btn-primary'>
                  Submit
                </button> */}
                {/* <button type="submit" className="btn btn-info pull-right">Sign in</button> */}
              </div>
            </div>
          </form>
        </section>
      </div>
    )
  }
}
export default PageMerchantCredential
