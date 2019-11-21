import React, { Component } from 'react'
import Helmet from 'react-helmet'
import FormCreateUser from './FormCreateUser'

class PageCreateUser extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <Helmet>
          <title>Registrasi User</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        <section className='content-header'>
          <h1>Registrasi User</h1>
          <ol className='breadcrumb'>
            <li>
              <a href='#'>
                <i className='fa fa-dashboard' /> User
              </a>
            </li>
            <li className='active'>Registrasi User</li>
          </ol>
        </section>
        <FormCreateUser />
      </div>
    )
  }
}
export default PageCreateUser
