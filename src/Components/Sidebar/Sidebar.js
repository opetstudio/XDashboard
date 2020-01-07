import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../../Themes'
import AppConfig from '../../Config/AppConfig'
import { getAccessToken } from '../../Utils/Utils'
import SidebarInstitutionAdmin from './SidebarInstitutionAdmin'
import SidebarInstitutionSupport from './SidebarInstitutionSupport'
import SidebarMerchantAdmin from './SidebarMerchantAdmin'
import SidebarMerchantSupport from './SidebarMerchantSupport'
import SidebarUser from './SidebarUser'
import SidebarOperator from './SidebarOperator'
import SidebarBank from './SidebarBank'
import { getPage } from '../../Utils/Pages'

const basePath = AppConfig.basePath

class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this._getMenuLi = this._getMenuLi.bind(this)
    this._getMenuLiSingle = this._getMenuLiSingle.bind(this)
  }

  _getMenuLi (route, title, liClass) {
    const page = getPage(route) || {}
    const pageRole = page.role || 'xxxx'
    if (!pageRole.includes(this.props.userRole)) return null
    const baseRoute = `${basePath}${route}`
    return (<li className={(this.props.routeActive || '').startsWith(baseRoute) ? 'active nav-item' : 'nav-item'}><Link className='nav-link' onClick={() => this.props.appPatch({ routeActive: baseRoute, pageTitle: title })} to={`${baseRoute}/${getAccessToken(this.props.sessionToken)}`}><i className={liClass || 'far fa-circle nav-icon'} /> <p>{page.title || title}</p></Link></li>)
  }

  _getMenuLiSingle (route, title, liClass) {
    const page = getPage(route) || {}
    const pageRole = page.role || 'xxxx'
    if (!pageRole.includes(this.props.userRole)) return null
    const baseRoute = `${basePath}${route}`
    return (<li className={(this.props.routeActive || '').startsWith(baseRoute) ? 'nav-item active' : 'nav-item active'}><Link className='nav-link' onClick={() => this.props.appPatch({ routeActive: baseRoute, pageTitle: title })} to={`${baseRoute}/${getAccessToken(this.props.sessionToken)}`}><i className={liClass || 'fas fa-circle nav-icon'} /> <p>{page.title || title}</p></Link></li>)
  }

  render () {
    console.log('render')
    // if (this.props.userRole >= 400 && this.props.userRole < 500) return (<SidebarUser sessionToken={this.props.sessionToken} history={this.props.history} {...this.props} />)
    // // merchant support
    // else if (this.props.userRole >= 310 && this.props.userRole < 400) return (<SidebarMerchantSupport appPatch={this.props.appPatch} routeActive={this.props.routeActive} sessionToken={this.props.sessionToken} history={this.props.history} {...this.props} />)
    // // merchant admin
    // else if (this.props.userRole >= 300 && this.props.userRole < 310) return (<Sidebar userRole={this.props.userRole} appPatch={this.props.appPatch} routeActive={this.props.routeActive} sessionToken={this.props.sessionToken} history={this.props.history} {...this.props} />)
    // else if (this.props.userRole >= 200 && this.props.userRole < 300)
    return (
      <aside className='main-sidebar sidebar-dark-primary elevation-4'>
        {/* Brand Logo */}
        <a href='#' className='brand-link'>
          <img src={Images.AdminLTELogo} alt='Prismalink International' className='brand-image img-circle elevation-3' style={{ opacity: '.8' }} />
          <span className='brand-text font-weight-light'>MBDD</span>
        </a>
        <div className='sidebar'>
          <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
            <div className='image'>
              <img src={Images.useravatar} className='img-circle elevation-2' alt='User Image' />
            </div>
            <div className='info'>
              <Link to={`${AppConfig.basePath}/my-profile/${getAccessToken(this.props.sessionToken)}`} className='d-block'>{this.props.userFullName}</Link>
            </div>
          </div>

          <nav className='mt-2'>
            {(this.props.userRole >= 500 && this.props.userRole < 600) &&
              <SidebarBank
                getMenuLiSingle={this._getMenuLiSingle}
                getMenuLi={this._getMenuLi}
                appPatch={this.props.appPatch}
                sessionToken={this.props.sessionToken}
                routeActive={this.props.routeActive}
              />}
            {(this.props.userRole >= 400 && this.props.userRole < 500) &&
              <SidebarOperator
                getMenuLiSingle={this._getMenuLiSingle}
                getMenuLi={this._getMenuLi}
                appPatch={this.props.appPatch}
                sessionToken={this.props.sessionToken}
                routeActive={this.props.routeActive}
              />}
            {(this.props.userRole >= 310 && this.props.userRole < 400) &&
              <SidebarOperator
                getMenuLiSingle={this._getMenuLiSingle}
                getMenuLi={this._getMenuLi}
                appPatch={this.props.appPatch}
                sessionToken={this.props.sessionToken}
                routeActive={this.props.routeActive}
              />}
            {(this.props.userRole >= 300 && this.props.userRole < 310) &&
              <SidebarOperator
                getMenuLiSingle={this._getMenuLiSingle}
                getMenuLi={this._getMenuLi}
                appPatch={this.props.appPatch}
                sessionToken={this.props.sessionToken}
                routeActive={this.props.routeActive}
              />}
            {(this.props.userRole >= 210 && this.props.userRole < 300) &&
              <SidebarOperator
                getMenuLiSingle={this._getMenuLiSingle}
                getMenuLi={this._getMenuLi}
                appPatch={this.props.appPatch}
                sessionToken={this.props.sessionToken}
                routeActive={this.props.routeActive}
              />}
            {(this.props.userRole >= 200 && this.props.userRole < 210) &&
              <SidebarOperator
                getMenuLiSingle={this._getMenuLiSingle}
                getMenuLi={this._getMenuLi}
                appPatch={this.props.appPatch}
                sessionToken={this.props.sessionToken}
                routeActive={this.props.routeActive}
              />}
            {(this.props.userRole >= 100 && this.props.userRole < 200) &&
              <SidebarOperator
                getMenuLiSingle={this._getMenuLiSingle}
                getMenuLi={this._getMenuLi}
                appPatch={this.props.appPatch}
                sessionToken={this.props.sessionToken}
                routeActive={this.props.routeActive}
              />}
          </nav>
        </div>
      </aside>
    )
  }
}
export default Sidebar
