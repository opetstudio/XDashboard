import React, { Component } from 'react'
import {path} from 'ramda'
import Helmet from 'react-helmet'
import MerchantCredentialInfo from '../../Containers/Merchant/MerchantCredentialInfo'
import LoginCheck from '../../Containers/Login/LoginCheck'

class PageMerchantCredential extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Merchant Credential</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        <section className='content-header'>
          <h1>Merchant Credential</h1>
          <ol className='breadcrumb'>
            <li>
              <a href='#'>
                <i className='fa fa-dashboard' /> Merchant
              </a>
            </li>
            <li className='active'>Merchant Credential</li>
          </ol>
        </section>
        <section className='content'>
          <form onSubmit={e => this._onSubmitForm(e)}>
            <div className='box box-primary'>
              <div className='box-header with-border'>
                <h3 className='box-title'>Merchant Credential</h3>
              </div>
              <div className='box-body'>
                <MerchantCredentialInfo />
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
