import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ContentReconReport from './ContentReconReport'
import LoginCheck from '../../Containers/Login/LoginCheck'
import ContentHeader from '../../Components/ContentHeader'

export default class PageRefundReport extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Reconciliation Report</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        <ContentHeader
          title='Reconciliation Report'
          breadcrumb={[{ title: 'Transaction', link: '#' }, { title: 'Reconciliation Report', link: null, isActive: true }]}
        />
        <ContentReconReport />
      </div>
    )
  }
}
