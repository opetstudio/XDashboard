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
    return (<li className={(this.props.routeActive || '').startsWith(baseRoute) ? 'active' : ''}><Link onClick={() => this.props.appPatch({ routeActive: baseRoute })} to={`${baseRoute}/${getAccessToken(this.props.sessionToken)}`}><i className={liClass || 'fa fa-circle-o'} /> {page.title || title}</Link></li>)
  }

  _getMenuLiSingle (route, title, liClass) {
    const page = getPage(route) || {}
    const pageRole = page.role || 'xxxx'
    if (!pageRole.includes(this.props.userRole)) return null
    const baseRoute = `${basePath}${route}`
    return (<li className={(this.props.routeActive || '').startsWith(baseRoute) ? 'active' : ''}><Link onClick={() => this.props.appPatch({ routeActive: baseRoute })} to={`${baseRoute}/${getAccessToken(this.props.sessionToken)}`}><i className={liClass || 'fa fa-circle-o'} /> <span>{page.title || title}</span></Link></li>)
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
      <aside className='main-sidebar'>
        <section className='sidebar'>
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
            <SidebarInstitutionAdmin
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
        </section>
      </aside>
    )
  }
}
export default Sidebar
