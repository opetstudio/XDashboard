import React, { Component } from 'react'
import Helmet from 'react-helmet'
import LoginCheck from '../../Containers/Login/LoginCheck'
// import ContentHeader from '../../Components/ContentHeader'
import Tabs from '../../Components/Tabs'
import TabContent from './TabContent'

// const tabNav = [
//   { title: 'Initialization', id: 'home', ariaSelected: 'true', active: 'active' },
//   { title: 'Authentication', id: 'authentication', ariaSelected: 'false', active: '' },
//   { title: 'Charge', id: 'charge', ariaSelected: 'false', active: '' }
// ]

const actionId = '02'
export default class PagePayment extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Payment</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        {/* <ContentHeader
          title='Bind Card'
          breadcrumb={[{ title: 'Debit Card', link: '#' }, { title: 'Bind Card', link: null, isActive: true }]}
        /> */}
        <section className='content'>
          <div className='container-fluid'>
            <Tabs
              tabNav={[
                { title: 'Initialization', id: 'home', ariaSelected: 'true', active: 'active', content: (<TabContent table={`tb${actionId}initialization`} actionId={actionId} eventName='INITIALIZATION' />) },
                { title: 'Authentication', id: 'authentication', ariaSelected: 'false', active: '', content: (<TabContent table={`tb${actionId}authentication`} actionId={actionId} eventName='AUTHENTICATION' />) },
                { title: 'Charge', id: 'charge', ariaSelected: 'false', active: '', content: (<TabContent table={`tb${actionId}charge`} actionId={actionId} eventName='CHARGE' />) }
              ]}
            />
          </div>
        </section>
      </div>
    )
  }
}
