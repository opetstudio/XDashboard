import React, { Component } from 'react'
import {path} from 'ramda'
import Helmet from 'react-helmet'
import { Redirect } from 'react-router-dom'
import {getAccessToken} from '../../Utils/Utils'
import MerchantInfo from '../../Containers/Merchant/MerchantInfo'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

class MerchantProfilePageComp extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <Helmet>
          <title>Merchant Profile</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        <section className='content-header'>
          <h1>Merchant Profile</h1>
          <ol className='breadcrumb'>
            <li>
              <a href='#'>
                <i className='fa fa-dashboard' /> Merchant
              </a>
            </li>
            <li className='active'>Merchant Profile</li>
          </ol>
        </section>
        <section className='content'>
          <form onSubmit={e => this._onSubmitForm(e)}>
            <div className='box box-primary'>
              <div className='box-header with-border'>
                <h3 className='box-title'>Merchant Information</h3>
              </div>
              <div className='box-body'>
                <MerchantInfo />
              </div>

              <div className='box-footer'>
                {/* <button type='button' className='btn btn-primary' onClick={(e) => <Redirect to={`${basePath}/edit-profile/${getAccessToken(this.props.sessionToken)}`} />}> */}
                {/* <button type='button' className='btn btn-primary' onClick={(e) => this.props.history.push(`${basePath}/merchant/edit-profile/${getAccessToken(this.props.sessionToken)}`)}>
                  Edit Profile
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
export default MerchantProfilePageComp
