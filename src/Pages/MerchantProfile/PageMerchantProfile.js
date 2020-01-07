import React, { Component } from 'react'
import { path } from 'ramda'
import Helmet from 'react-helmet'
import { Redirect } from 'react-router-dom'
import { getAccessToken } from '../../Utils/Utils'
import MerchantInfo from '../../Containers/Merchant/MerchantInfo'
import AppConfig from '../../Config/AppConfig'
import LoginCheck from '../../Containers/Login/LoginCheck'
import ContentHeader from '../../Components/ContentHeader'
const basePath = AppConfig.basePath

class PageMerchantProfile extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Merchant Profile</title>
          <body className='hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed' />
        </Helmet>
        <ContentHeader
          title='Merchant Profile'
          breadcrumb={[{ title: 'Administration', link: '#' }, { title: 'Merchant Profile', link: null, isActive: true }]}
        />
        <section className='content'>
          <form className='form' onSubmit={e => this._onSubmitForm(e)}>
            <div className='card'>
              <div className='card-header'>
                <h5 className='card-title'>Merchant Information</h5>
                <div className='card-tools'>
                  <button type='button' className='btn btn-tool' data-card-widget='collapse'>
                    <i className='fas fa-minus' />
                  </button>
                </div>
              </div>
              <div className='card-body'>
                <MerchantInfo />
              </div>
              <div className='card-footer'>
                <button type='button' className='btn btn-primary' onClick={(e) => this.props.history.push(`${basePath}/merchant/edit-profile/${getAccessToken(this.props.sessionToken)}`)}>
                  Edit Profile
                </button>
              </div>

              {/* <div className='box-footer'> */}
              {/* <button type='button' className='btn btn-primary' onClick={(e) => <Redirect to={`${basePath}/edit-profile/${getAccessToken(this.props.sessionToken)}`} />}> */}
              {/* <button type='button' className='btn btn-primary' onClick={(e) => this.props.history.push(`${basePath}/merchant/edit-profile/${getAccessToken(this.props.sessionToken)}`)}>
                  Edit Profile
                </button> */}
              {/* <button type="submit" className="btn btn-info pull-right">Sign in</button> */}
              {/* </div> */}
            </div>
          </form>
        </section>
      </div>
    )
  }
}
export default PageMerchantProfile
