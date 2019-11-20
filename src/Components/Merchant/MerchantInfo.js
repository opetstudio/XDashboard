import React, { Component } from 'react'
import Loader from '../Loader/Loader'
import {Colors} from '../../Themes'
import _ from 'lodash'

export default class MerchantInfo extends Component {
  componentDidUpdate (prevProps, prevState) {
    if (
      !_.isEqual(prevProps.userMerchantCode, this.props.userMerchantCode) &&
      !_.isEmpty(this.props.userMerchantCode)
    ) {
      console.log('componentDidUpdate call merchantReadOneRequest=', this.props)
      let {userMerchantCode, userMerchantId} = this.props
      this.props.merchantReadOneRequest({userMerchantCode, userMerchantId})
    }
  }
  componentWillMount () {
    let {userMerchantCode, userMerchantId} = this.props
    if (!_.isEmpty(userMerchantCode)) {
      this.props.merchantReadOneRequest({userMerchantCode, userMerchantId})
    }
  }
  render () {
    console.log('render')
    console.log('render merchant info props=', this.props)
    let {
      instCd,
      nm,
      website,
      merchantMobileNo,
      merchantEmail,
      createdDt,
      addr
    } = this.props.merchantDetail || {}

    if (this.props.isRequesting) return <Loader loading />
    return (<dl className='dl-horizontal'>
      <dt>Merchant Name</dt>
      <dd>{nm}</dd>
      <dt>Merchant Code</dt>
      <dd>{instCd}</dd>
      <dt>website</dt>
      <dd>{website}</dd>
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
