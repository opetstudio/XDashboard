import React, { Component } from 'react'
import Loader from '../Loader/Loader'
import { Colors } from '../../Themes'
import _ from 'lodash'

export default class MerchantInfo extends Component {
  componentDidUpdate (prevProps, prevState) {
    if (
      !_.isEqual(prevProps.userMerchantCode, this.props.userMerchantCode) &&
      !_.isEmpty(this.props.userMerchantCode)
    ) {
      console.log('componentDidUpdate call merchantReadOneRequest=', this.props)
      const { userMerchantCode, userMerchantId } = this.props
      this.props.merchantReadOneRequest({ userMerchantCode, userMerchantId })
    }
  }

  componentWillMount () {
    const { userMerchantCode, userMerchantId } = this.props
    if (!_.isEmpty(userMerchantCode)) {
      this.props.merchantReadOneRequest({ userMerchantCode, userMerchantId })
    }
  }

  render () {
    console.log('render')
    console.log('render merchant info props=', this.props)
    const {
      instCd,
      nm,
      website,
      merchantMobileNo,
      merchantEmail,
      createdDt,
      addr,
      frontendCallbackUrl,
      backendCallbackUrl
    } = this.props.merchantDetail || {}

    if (this.props.isRequesting) return <Loader loading />
    return (
      <dl className='dl-horizontal'>
        <dt>Merchant Name</dt>
        <dd>{nm}</dd>
        <dt>Merchant Code</dt>
        <dd>{instCd}</dd>
        <dt>website</dt>
        <dd>{website}</dd>
        <dt>Frontend Url</dt>
        <dd>{frontendCallbackUrl}</dd>
        <dt>Backend Url</dt>
        <dd>{backendCallbackUrl}</dd>
        <dt>Merchant Mobile Number</dt>
        <dd>{merchantMobileNo}</dd>
        <dt>Merchant Email</dt>
        <dd>{merchantEmail}</dd>
        <dt>Created Date Time</dt>
        <dd>{createdDt}</dd>
        <dt>Address</dt>
        <dd>{addr}</dd>
      </dl>)
  }
}
