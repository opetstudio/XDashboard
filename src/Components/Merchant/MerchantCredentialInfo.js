import React, { Component } from 'react'
import { Colors } from '../../Themes'
import Loader from '../Loader/Loader'
import Moment from 'moment'
import _ from 'lodash'

export default class MerchantCredentialInfo extends Component {
  componentDidUpdate (prevProps, prevState) {
    if (
      !_.isEqual(prevProps.userMerchantCode, this.props.userMerchantCode) &&
      !_.isEmpty(this.props.userMerchantCode)
    ) {
      this.props.merchantGetCredential({ userMerchantCode: this.props.userMerchantCode })
    }
  }

  componentWillMount () {
    if (!_.isEmpty(this.props.userMerchantCode)) this.props.merchantGetCredential({ userMerchantCode: this.props.userMerchantCode })
  }

  render () {
    console.log('render')
    const {
      keyId,
      merchantId,
      merchantSecretKey,
      validFrom,
      validTo,
      publicKey,
      remark,
      updatedDate,
      frontendCallbackUrl,
      backendCallbackUrl
    } = this.props.merchantCredential || {}
    if (this.props.isRequesting) return <Loader loading />
    const dtFrom = new Date(Moment(validFrom).format('YYYY-MM-DD hh:mm:ss'))
    const dtTo = new Date(Moment(validTo).format('YYYY-MM-DD hh:mm:ss'))
    const now = new Date()
    const status = now >= dtFrom && now <= dtTo ? 'ACTIVE' : 'INACTIVE'
    return (
      <dl className='dl-horizontal'>
        <dt>Key ID</dt>
        <dd>{keyId}</dd>
        <dt>Merchant ID</dt>
        <dd>{merchantId}</dd>
        <dt>Frontend Url</dt>
        <dd>{frontendCallbackUrl}</dd>
        <dt>Backend Url</dt>
        <dd>{backendCallbackUrl}</dd>
        <dt>Current Secret Key</dt>
        <dd>{merchantSecretKey}</dd>
        <dt>RSA Key</dt>
        <dd>{publicKey}</dd>
        <dt>Valid From</dt>
        <dd>{Moment(validFrom).format('YYYY-MM-DD hh:mm:ss')}</dd>
        <dt>Valid To</dt>
        <dd>{Moment(validTo).format('YYYY-MM-DD hh:mm:ss')}</dd>
        <dt>Status</dt>
        <dd>{status}</dd>
        {/* <dt>Remark</dt>
        <dd>{remark}</dd> */}
        {/* <dt>Updated Date</dt>
        <dd>{updatedDate}</dd> */}
      </dl>)
  }
}
