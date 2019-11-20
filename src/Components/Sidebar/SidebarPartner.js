import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Images} from '../../Themes'
import AppConfig from '../../Config/AppConfig'
import {getAccessToken} from '../../Utils/Utils'
const basePath = AppConfig.basePath
const useravatar = Images.useravatar

class SidebarComponent extends Component {
  render () {
    console.log('render')
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
            <li className='active treeview menu-open'>
              <Link to='#'>
                <i className='fa fa-dashboard' /> <span>Merchant</span>
                <span className='pull-right-container'>
                  <i className='fa fa-angle-left pull-right' />
                </span>
              </Link>
              <ul className='treeview-menu'>
                <li><Link to={`${basePath}/merchant/create/${getAccessToken(this.props.sessionToken)}`}><i className='fa fa-circle-o' /> Registrasi Merchant</Link></li>
                <li className='active'><Link to={`${basePath}/merchant/list/${getAccessToken(this.props.sessionToken)}`}><i className='fa fa-circle-o' /> Daftar Merchant</Link></li>
                <li><Link to={`${basePath}/merchant/change-limit/${getAccessToken(this.props.sessionToken)}`}><i className='fa fa-circle-o' /> Rubah Limit Merchant</Link></li>
              </ul>
            </li>
            <li className='treeview'>
              <Link to='#'>
                <i className='fa fa-dashboard' /> <span>User</span>
                <span className='pull-right-container'>
                  <i className='fa fa-angle-left pull-right' />
                </span>
              </Link>
              <ul className='treeview-menu'>
                <li><Link to={`${basePath}/user/create/${getAccessToken(this.props.sessionToken)}`}><i className='fa fa-circle-o' /> Registrasi User</Link></li>
                <li className='active'><Link to={`${basePath}/user/list/${getAccessToken(this.props.sessionToken)}`}><i className='fa fa-circle-o' /> Daftar User</Link></li>
                <li><Link to={`${basePath}/user/change-limit/${getAccessToken(this.props.sessionToken)}`}><i className='fa fa-circle-o' /> Rubah Limit User</Link></li>
              </ul>
            </li>
            <li className='treeview'>
              <Link to='#'>
                <i className='fa fa-pie-chart' />
                <span>Transaksi</span>
                <span className='pull-right-container'>
                  <i className='fa fa-angle-left pull-right' />
                </span>
              </Link>
              <ul className='treeview-menu'>
                <li><Link to={`${basePath}/report${getAccessToken(this.props.sessionToken)}`}><i className='fa fa-circle-o' /> Laporan Transaksi</Link></li>
              </ul>
            </li>
          </ul>
        </section>
      </aside>
    )
  }
}
export default SidebarComponent
