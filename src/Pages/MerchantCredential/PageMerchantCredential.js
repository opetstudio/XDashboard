import React, { Component } from 'react'
import {path} from 'ramda'
import Helmet from 'react-helmet'
import MerchantCredentialInfo from '../../Containers/Merchant/MerchantCredentialInfo'
import LoginCheck from '../../Containers/Login/LoginCheck'
import ContentHeader from '../../Components/ContentHeader'

class PageMerchantCredential extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Merchant Credential</title>
          <body className='hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed' />
        </Helmet>
        <ContentHeader
          title='Merchant Credential'
          breadcrumb={[{ title: 'Administration', link: '#' }, { title: 'Merchant Credential', link: null, isActive: true }]}
        />
        <section className='content'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='card card-primary card-outline'>
                  <div className='card-header'>
                    <h3 className='card-title'>Merchant Credential</h3>
                    <div className='card-tools'>
                      <button type='button' className='btn btn-tool' data-card-widget='collapse'>
                        <i className='fas fa-minus' />
                      </button>
                    </div>
                  </div>
                  <div className='card-body'>
                    <MerchantCredentialInfo />
                  </div>
                  <div className='card-footer'>
                    {/*  */}
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                {/*  */}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default PageMerchantCredential
