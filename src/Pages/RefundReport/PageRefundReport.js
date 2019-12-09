import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ContentRefundReport from './ContentRefundReport'
import LoginCheck from '../../Containers/Login/LoginCheck'

export default class PageRefundReport extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Transaksi Refund Report</title>
        </Helmet>
        <section className='content-header'>
          <h1>
          Transaksi Refund Report
          </h1>
          <ol className='breadcrumb'>
            <li><a href='#'><i className='fa fa-dashboard' /> Transaksi</a></li>
            <li className='active'>Transaksi Refund Report</li>
          </ol>
        </section>
        <section className='content'>
          <ContentRefundReport />
        </section>
      </div>
    )
  }
}
