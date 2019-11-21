import React, { Component } from 'react'
import Helmet from 'react-helmet'
import RefundReviewContent from './RefundReviewContent'
import LoginCheck from '../../Containers/Login/LoginCheck'

export default class PageRefundReview extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Transaksi Refund Review</title>
        </Helmet>
        <section className='content-header'>
          <h1>
          Transaksi Refund Review
          </h1>
          <ol className='breadcrumb'>
            <li><a href='#'><i className='fa fa-dashboard' /> Transaksi</a></li>
            <li className='active'>Transaksi Refund Review</li>
          </ol>
        </section>
        <RefundReviewContent />
      </div>
    )
  }
}
