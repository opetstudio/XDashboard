import React, { Component } from 'react'
import Helmet from 'react-helmet'
import LoginCheck from '../../Containers/Login/LoginCheck'
import ContentHeader from '../../Components/ContentHeader'
export default class PageMyProfile extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>My Profile</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        <ContentHeader
          title='My Profile'
          breadcrumb={[{ title: 'My Profille', link: null, isActive: true }]}
        />
        <section className='content'>
          <div className='container-fluid'>
            {/*  */}
            <iframe src='http://localhost:8987/adminlte3/pages/examples/profile.html' width='100%' height='100%' />
          </div>
        </section>
      </div>
    )
  }
}
