import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Images} from '../../Themes'
import AppConfig from '../../Config/AppConfig'
import {getAccessToken} from '../../Utils/Utils'
const basePath = AppConfig.basePath
const useravatar = Images.useravatar

class SidebarMerchant extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this._isMenuActive = this._isMenuActive.bind(this)
  }
  _isMenuActive (route) {
    if ((this.props.routeActive || '').startsWith(route)) return 'active'
    return ''
  }
  _getMenuLi (route, title, liClass) {
    let baseRoute = `${basePath}${route}`
    return (<li className={`${this._isMenuActive(baseRoute)}`}><Link onClick={() => this.props.appPatch({routeActive: baseRoute})} to={`${baseRoute}/${getAccessToken(this.props.sessionToken)}`}><i className={liClass || 'fa fa-circle-o'} /> {title}</Link></li>)
  }
  render () {
    console.log('render')
    console.log('this.props====>', this.props)
    return (
      <aside className='main-sidebar'>
        <section className='sidebar'>
          {/* <div className='user-panel'>
            <div className='pull-left image'>
              <img src={useravatar} className='img-circle' alt='User Image' />
            </div>
            <div className='pull-left info' style={{width: '100%'}}>
              <p>{this.props.userFullName}</p>
              <Link to='#'><i className='fa fa-circle text-success' /> Online</Link>
            </div>
          </div> */}
          <ul className='sidebar-menu' data-widget='tree'>
            <li className='header'>MAIN NAVIGATION</li>
            {this._getMenuLi('/home', 'Dashboard', 'fa fa-dashboard')}
            <li className='active treeview menu-open'>
              <Link to='#'>
                <i className='fa fa-briefcase text-green' /> <span>Merchant Administration</span>
                <span className='pull-right-container'>
                  <i className='fa fa-angle-left pull-right' />
                </span>
              </Link>
              <ul className='treeview-menu'>
                {this._getMenuLi('/merchant/profile', 'Merchant Profile')}
                {this._getMenuLi('/merchant/credential', 'Merchant Credential')}
                {this._getMenuLi('/merchant/change-limit', 'Merchant Limit')}
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
                {this._getMenuLi('/transaction/refund-request', 'Refund Request')}
                {this._getMenuLi('/transaction/refund-review', 'Refund Review')}
              </ul>
            </li>
            {this._getMenuLi('/report', 'Report', 'fa fa-table text-aqua')}
            <li className='active treeview menu-open'>
              <Link to='#'>
                <i className='fa fa-user text-yellow' /> <span>User</span>
                <span className='pull-right-container'>
                  <i className='fa fa-angle-left pull-right' />
                </span>
              </Link>

              <ul className='treeview-menu'>
                {this._getMenuLi('/usermanagement/listAllUser', 'User Account')}
                {this._getMenuLi('/user/create', 'Create User')}
              </ul>
            </li>
          </ul>
        </section>
      </aside>
    )
  }
}
export default SidebarMerchant
