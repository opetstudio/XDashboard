import React, { Component } from 'react'
import Helmet from 'react-helmet'
import FormCreateUser from './FormCreateUser'
import LoginCheck from '../../Containers/Login/LoginCheck'
import ContentHeader from '../../Components/ContentHeader'

class PageCreateUser extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Registrasi User</title>
          <body className='hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed' />
        </Helmet>
        <ContentHeader
          title='Report'
          breadcrumb={[{ title: 'User', link: '#' }, { title: 'Registrasi User', link: null, isActive: true }]}
        />
        <FormCreateUser />
      </div>
    )
  }
}
export default PageCreateUser
