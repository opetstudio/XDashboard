import React, { Component } from 'react'
import Helmet from 'react-helmet'
import LoginCheck from '../../Containers/Login/LoginCheck'
import ContentHeader from '../../Components/ContentHeader'
import Tabs from '../../Components/Tabs'
import TabContent from './TabContent'

const actionId = '03'
export default class PageBindCard extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Bind & Pay</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        <ContentHeader
          title='Bind & Pay'
          breadcrumb={[{ title: 'Debit Card', link: '#' }, { title: 'Bind & Pay', link: null, isActive: true }]}
        />
        <section className='content'>
          <div className='container-fluid'>
            <Tabs
              tabNav={[
                { title: 'Initialization', id: 'home', ariaSelected: 'true', active: 'active', content: (<TabContent table={`tb${actionId}initialization`} actionId={actionId} eventName='INITIALIZATION' />) },
                { title: 'Authentication', id: 'authentication', ariaSelected: 'false', active: '', content: (<TabContent table={`tb${actionId}authentication`} actionId={actionId} eventName='AUTHENTICATION' />) },
                { title: 'Tokenization', id: 'tokenization', ariaSelected: 'false', active: '', content: (<TabContent table={`tb${actionId}tokenization`} actionId={actionId} eventName='TOKENIZATION' />) },
                { title: 'Change Limit', id: 'changelimit', ariaSelected: 'false', active: '', content: (<TabContent table={`tb${actionId}changelimit`} actionId={actionId} eventName='CHANGELIMIT' />) },
                { title: 'Charge', id: 'charge', ariaSelected: 'false', active: '', content: (<TabContent table={`tb${actionId}charge`} actionId={actionId} eventName='CHARGE' />) },
                { title: 'Callback', id: 'mbddcallback', ariaSelected: 'false', active: '', content: (<TabContent table={`tb${actionId}mbddcallback`} actionId={actionId} eventName='MBDDCALLBACK' />) }
              ]}
            />
          </div>
        </section>
      </div>
    )
  }
}
