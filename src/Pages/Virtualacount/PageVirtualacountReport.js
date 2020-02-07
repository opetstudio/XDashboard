import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ContentVirtualacountReport from './ContentVirtualacountReport'
import LoginCheck from '../../Containers/Login/LoginCheck'
import ContentHeader from '../../Components/ContentHeader'

export default class PageVirtualacountReport extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Virtual Account Report</title>
          <body className='hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed' />
        </Helmet>
        <ContentHeader
          title='Virtual Account Report'
          breadcrumb={[{ title: 'Virtual Account', link: '#' }, { title: 'Virtual Account Report', link: null, isActive: true }]}
        />
        <ContentVirtualacountReport />
      </div>
    )
  }
}
