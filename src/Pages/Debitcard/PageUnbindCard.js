import React, { Component } from 'react'
import Helmet from 'react-helmet'
import LoginCheck from '../../Containers/Login/LoginCheck'
import ContentHeader from '../../Components/ContentHeader'
import Tabs from '../../Components/Tabs'
import TabContent from './TabContent'

// const tabNav = [
//   { title: 'Initialization', id: 'home', ariaSelected: 'true', active: 'active' },
//   { title: 'Unbind', id: 'unbind', ariaSelected: 'false', active: '' }
// ]

const actionId = '04'
export default class PagePayment extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Unbind Card</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        <ContentHeader
          title='Unbind Card'
          breadcrumb={[{ title: 'Debit Card', link: '#' }, { title: 'Unbind Card', link: null, isActive: true }]}
        />
        <section className='content'>
          <div className='container-fluid'>
            <Tabs
              tabNav={[
                { title: 'Initialization', id: 'home', ariaSelected: 'true', active: 'active', content: (<TabContent table={`tb${actionId}initialization`} actionId={actionId} eventName='INITIALIZATION' />) },
                { title: 'Unbind', id: 'unbind', ariaSelected: 'false', active: '', content: (<TabContent table={`tb${actionId}unbind`} actionId={actionId} eventName='UNBIND' />) }
              ]}
            />
          </div>
        </section>
      </div>
    )
  }
}
