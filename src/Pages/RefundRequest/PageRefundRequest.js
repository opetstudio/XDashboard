import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ContentRefundRequest from './ContentRefundRequest'
import LoginCheck from '../../Containers/Login/LoginCheck'

export default class RefundRequestPage extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Transaksi Refund Request</title>
        </Helmet>
        <section className='content-header'>
          <h1>
          Transaksi Refund Request
          </h1>
          <ol className='breadcrumb'>
            <li><a href='#'><i className='fa fa-dashboard' /> Transaksi</a></li>
            <li className='active'>Transaksi Refund Request</li>
          </ol>
        </section>
        <section className='content'>
          <ContentRefundRequest />
        </section>
      </div>
    )
  }
}
