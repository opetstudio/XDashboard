import React, { Component } from 'react'
import Helmet from 'react-helmet'
import LoginCheck from '../../Containers/Login/LoginCheck'
// import ContentHeader from '../../Components/ContentHeader'
import TabContent from './TabContent'
import Tabs from '../../Components/Tabs'

// const tabNav = [
//   { title: 'Initialization', id: 'home', ariaSelected: 'true', active: 'active' },
//   { title: 'Change Limit', id: 'changelimit', ariaSelected: 'false', active: '' }
// ]

const actionId = '05'
export default class PagePayment extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Change Limit</title>
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
                { title: 'Change Limit', id: 'changelimit', ariaSelected: 'false', active: '', content: (<TabContent table={`tb${actionId}changelimit`} actionId={actionId} eventName='CHANGELIMIT' />) }
              ]}
            />
          </div>
        </section>
      </div>
    )
  }
}
