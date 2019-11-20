import React, { Component } from 'react'
import {path} from 'ramda'
import Helmet from 'react-helmet'
import MerchantForm from './MerchantForm'

class MerchantEditProfilePageComp extends Component {
  componentWillMount () {
    console.log('componentWillMount')
    this.props.merchantReadOneRequest({merchantCode: this.props.userMerchantCode})
  }
  componentWillUnmount () {
  }
  _onSubmitForm (e) {}
  render () {
    console.log('render')
    let merchantPluginForm = {}
    return (
      <div className='content-wrapper'>
        <Helmet>
          <title>Merchant Edit Profile</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        <section className='content-header'>
          <h1>Merchant Edit Profile</h1>
          <ol className='breadcrumb'>
            <li>
              <a href='#'>
                <i className='fa fa-dashboard' /> Merchant
              </a>
            </li>
            <li className='active'>Merchant Edit Profile</li>
          </ol>
        </section>
        <section className='content'>
          <MerchantForm merchantRequestPatch={this.props.merchantRequestPatch} />
        </section>
      </div>
    )
  }
}
export default MerchantEditProfilePageComp
