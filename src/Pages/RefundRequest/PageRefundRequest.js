import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ContentRefundRequest from './ContentRefundRequest'
import LoginCheck from '../../Containers/Login/LoginCheck'
import ContentHeader from '../../Components/ContentHeader'

export default class RefundRequestPage extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Transaksi Refund Request</title>
        </Helmet>
        <ContentHeader
          title='Refund Request'
          breadcrumb={[{ title: 'Transaction', link: '#' }, { title: 'Refund Request', link: null, isActive: true }]}
        />
        <section className='content'>
          <ContentRefundRequest />
        </section>
      </div>
    )
  }
}
