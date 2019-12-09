import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ContentListUser from './ContentListUser'
import LoginCheck from '../../Containers/Login/LoginCheck'
class PageListUser extends Component {
  render () {
    console.log('render')
    console.log('props=====>', this.props)
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet> <title>User Management</title></Helmet>
        <section className='content-header'>
          <h1>
            List All User
          </h1>
          <ol className='breadcrumb'>
            <li><a href='#'><i className='fa fa-dashboard' /> User Management</a></li> <li className='active'>List All User</li>
          </ol>
        </section>
        <ContentListUser />
      </div>
    )
  }
}
export default PageListUser
