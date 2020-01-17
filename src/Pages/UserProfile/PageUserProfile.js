import React, { Component } from 'react'
import Helmet from 'react-helmet'
import LoginCheck from '../../Containers/Login/LoginCheck'
import ContentHeader from '../../Components/ContentHeader'
export default class PageBindCard extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>User Profile</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        <ContentHeader
          title='User Profile'
          breadcrumb={[{ title: 'User Profille', link: null, isActive: true }]}
        />
        <section className='content'>
          <div className='container-fluid'>
            {/*  */}
          </div>
        </section>
      </div>
    )
  }
}
