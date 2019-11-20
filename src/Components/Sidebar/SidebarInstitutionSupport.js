import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Images} from '../../Themes'
import AppConfig from '../../Config/AppConfig'
import {getAccessToken} from '../../Utils/Utils'
const basePath = AppConfig.basePath
const useravatar = Images.useravatar

class SidebarMerchantSupport extends Component {
  render () {
    console.log('render')
    // console.log('this.props====>', this.props)
    // console.log('this.props====>', this.props.routeActive)
    return (
      <ul className='sidebar-menu' data-widget='tree'>
        <li className='header'>MAIN NAVIGATION</li>
        {this.props.getMenuLiSingle('/home', 'Dashboard', 'fa fa-dashboard')}
        <li className='active treeview menu-open'>
          <Link to='#'>
            <i className='fa fa-briefcase text-green' /> <span>Merchant Administration</span>
            <span className='pull-right-container'>
              <i className='fa fa-angle-left pull-right' />
            </span>
          </Link>
          <ul className='treeview-menu'>
            {this.props.getMenuLi('/merchant/profile', 'Merchant Profile')}
            {this.props.getMenuLi('/merchant/credential', 'Merchant Credential')}
            {this.props.getMenuLi('/merchant/view-limit', 'Merchant Limit')}
          </ul>
        </li>
        <li className='active treeview menu-open'>
          <Link to='#'>
            <i className='fa fa-bar-chart text-teal' />
            <span>Transaction</span>
            <span className='pull-right-container'>
              <i className='fa fa-angle-left pull-right' />
            </span>
          </Link>
          <ul className='treeview-menu'>
            {this.props.getMenuLi('/transaction/refund-request', 'Refund Request')}
            {this.props.getMenuLi('/transaction/refund-review', 'Refund Review')}
          </ul>
        </li>
        {this.props.getMenuLiSingle('/report', 'Report', 'fa fa-table text-aqua')}
        <li className='active treeview menu-open'>
          <Link to='#'>
            <i className='fa fa-user text-yellow' /> <span>User</span>
            <span className='pull-right-container'>
              <i className='fa fa-angle-left pull-right' />
            </span>
          </Link>

          <ul className='treeview-menu'>
            {this.props.getMenuLi('/usermanagement/listAllUser', 'User Account')}
            {this.props.getMenuLi('/user/create', 'Create User')}
          </ul>
        </li>
      </ul>
    )
  }
}
export default SidebarMerchantSupport
