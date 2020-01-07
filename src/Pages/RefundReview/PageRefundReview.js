import React, { Component } from 'react'
import Helmet from 'react-helmet'
import RefundReviewContent from './RefundReviewContent'
import LoginCheck from '../../Containers/Login/LoginCheck'
import ContentHeader from '../../Components/ContentHeader'

export default class PageRefundReview extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Transaksi Refund Review</title>
        </Helmet>
        <ContentHeader
          title='Refund Review'
          breadcrumb={[{ title: 'Transaction', link: '#' }, { title: 'Refund Review', link: null, isActive: true }]}
        />
        <RefundReviewContent />
      </div>
    )
  }
}
