import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ContentPaymentReport from './ContentPaymentReport'
import LoginCheck from '../../Containers/Login/LoginCheck'
import ContentHeader from '../../Components/ContentHeader'
class PagePaymentReport extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
    // window.TransactionListPageComponent()
  }

  componentDidMount () {
    // console.log('componentDidMount')
    // this.props.transactionReadRequest({})
    // let str = 'dist/js/transactionListPageComponent.js'
    // var element = document.querySelector('[src=\'' + str + '\']')
    // if (element) element.parentNode.removeChild(element)
    // const script = document.createElement('script')
    // script.src = str
    // script.id = 'myscript'
    // script.cek = 'cek'
    // script.async = true
    // document.body.appendChild(script)
    // window.TransactionListPageComponent([])
  }

  componentDidUpdate (prevProps) {
    // window.TransactionListPageComponent(this.props.listall)
  }

  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Report</title>
          <body className='hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed' />
        </Helmet>
        <ContentHeader
          title='Report'
          breadcrumb={[{ title: 'Transaction', link: '#' }, { title: 'Payment Report', link: null, isActive: true }]}
        />
        <ContentPaymentReport />
      </div>
    )
  }
}
export default PagePaymentReport
