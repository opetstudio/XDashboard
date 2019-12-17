import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../../Themes'
import AppConfig from '../../Config/AppConfig'
import { getAccessToken } from '../../Utils/Utils'
const basePath = AppConfig.basePath
const useravatar = Images.useravatar

class SidebarMerchantSupport extends Component {
  render () {
    console.log('render')
    // console.log('this.props====>', this.props)
    // console.log('this.props====>', this.props.routeActive)
    return (
      <ul className='nav nav-pills nav-sidebar flex-column' data-widget='treeview' role='menu' data-accordion='false'>
        {this.props.getMenuLiSingle('/home', 'Dashboard', 'nav-icon fas fa-tachometer-alt')}
        <li className='nav-item has-treeview menu-open'>
          <a to='#' className='nav-link'>
            <i className='nav-icon fas fa-copy' />
            <p>
              Bank Administration
              <i className='fas fa-angle-left right' />
              {/* <span className='badge badge-info right'>6</span> */}
            </p>
          </a>
          <ul className='nav nav-treeview'>
            {this.props.getMenuLi('/bank/credential', 'Bank Credential', 'far fa-circle nav-icon')}
          </ul>
        </li>
        <li className='nav-item has-treeview menu-open'>
          <Link to='#' className='nav-link'><i className='nav-icon fas fa-copy' /><p>Transaction<i className='fas fa-angle-left right' /></p></Link>
          <ul className='nav nav-treeview'>
            {this.props.getMenuLi('/report', 'Payment Report')}
            {this.props.getMenuLi('/transaction/refund-report', 'Refund Report')}
            {this.props.getMenuLi('/transaction/refund-request', 'Refund Request')}
            {this.props.getMenuLi('/transaction/refund-review', 'Refund Review')}
          </ul>
        </li>
        <li className='nav-item has-treeview menu-open'>
          <Link to='#' className='nav-link'><i className='nav-icon fas fa-copy' /><p>Reconciliation<i className='fas fa-angle-left right' /></p></Link>
          <ul className='nav nav-treeview'>
            {this.props.getMenuLi('/reconciliation/recon-report', 'Reconciliation Report')}
          </ul>
        </li>
        {/* {this.props.getMenuLiSingle('/report', 'Report', 'fa fa-table text-aqua')} */}
        <li className='nav-item has-treeview menu-open'>
          <Link to='#' className='nav-link'><i className='nav-icon fas fa-copy' /><p>User Support<i className='fas fa-angle-left right' /></p></Link>
          <ul className='nav nav-treeview'>
            {this.props.getMenuLi('/usermanagement/listAllUser', 'User Account')}
            {this.props.getMenuLi('/user/create', 'Create User Support')}
          </ul>
        </li>
      </ul>
    )
  }
}
export default SidebarMerchantSupport
