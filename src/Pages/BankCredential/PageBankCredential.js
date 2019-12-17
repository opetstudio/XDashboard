import React, { Component } from 'react'
import {path} from 'ramda'
import Helmet from 'react-helmet'
import BankCredentialInfo from '../../Containers/Bank/BankCredentialInfo'
import LoginCheck from '../../Containers/Login/LoginCheck'
import ContentHeader from '../../Components/ContentHeader'

class PageMerchantCredential extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Bank Credential</title>
          <body className='hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed' />
        </Helmet>
        <ContentHeader
          title='Bank Credential'
          breadcrumb={[{ title: 'Bank', link: '#' }, { title: 'Bank Credential', link: null, isActive: true }]}
        />
        <section className='content'>
          <div className='container-fluid'>
            <div className='card card-default color-palette-box'>
              <div className='card-header'>
                <h3 className='card-title'>Bank Credential</h3>
              </div>
              <div className='card-body'>
                <BankCredentialInfo />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default PageMerchantCredential
