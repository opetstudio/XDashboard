import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ContentRefundReport from './ContentRefundReport'
import LoginCheck from '../../Containers/Login/LoginCheck'
import ContentHeader from '../../Components/ContentHeader'

export default class PageRefundReport extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Transaksi Refund Report</title>
          <body className='hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed' />
        </Helmet>
        <ContentHeader
          title='Refund Report'
          breadcrumb={[{ title: 'Transaction', link: '#' }, { title: 'Refund Report', link: null, isActive: true }]}
        />
        <ContentRefundReport />
      </div>
    )
  }
}
