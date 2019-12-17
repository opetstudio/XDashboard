import React, { Component } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
// import { HashRouter as Router, Route, withRouter } from 'react-router-dom'

// Import Screens for the Router
// prettier-ignore
import ResponsiveContainer from '../Containers/ResponsiveContainer'
import { pageList } from '../Utils/Pages'

import { loadScript, getSession } from '../Utils/Utils'
import AppConfig from '../Config/AppConfig'
const basePath = AppConfig.basePath
const loginPath = basePath + '/login'

class App extends Component {
  constructor (props) {
    super(props)
    this.checkLogin(window.location.pathname)
    this.unlisten = this.props.history.listen((location, action) => {
      this.checkLogin(window.location.pathname)
      // console.log('props.history.listen ', window.location.pathname)
      // // const loginRestriction = [basePath + '/home', basePath + '/', basePath + '/merchant/create']
      // // if (loginRestriction.indexOf(location.pathname) !== -1) {
      // //   this.props.checkLogedStatus({})
      // // }
      // var str = location.pathname
      // // console.log('location==>', str)
      // // console.log('basePath==>', basePath)
      // // if (
      // //   str.startsWith(basePath + '/home') ||
      // //   str.startsWith(basePath + '/') ||
      // //   str.startsWith(basePath + '/merchant/create')
      // // ) {
      // //   console.log('checkLogedStatus')
      //   if(str.startsWith('/dashboard/login-force')) {

      //   } else {
      //     this.props.checkLogedStatus({})
      //   }

      // // }
    })
  }

  checkLogin (pathName) {
    console.log('checkLogin statussssss')
    if (loginPath === pathName) {
      console.log('ok')
    } else {
      this.props.checkLogedStatus({})
    }
  }

  componentWillUnmount () {
    this.unlisten()
  }

  componentDidMount () {
    loadScript()
  }

  render () {
    console.log('render')
    return <div>{this.props.children}</div>
  }
}
const AppContainer = withRouter(App)
class NavigationRouter extends Component {
  render () {
    console.log('render')
    // let basePath = '/PaymentPageCc' // for jboss
    // let basePath = '/paymentpage' // for jboss
    // let basePath = '' // for docker
    // let basePath = '/dashboard' // for docker
    const userRole = getSession('userRole')
    // if (this.props.userRole >= 400 && this.props.userRole < 500) return (<SidebarUser sessionToken={this.props.sessionToken} history={this.props.history} {...this.props} />)
    // // merchant support
    // else if (this.props.userRole >= 310 && this.props.userRole < 400) return (<SidebarMerchantSupport appPatch={this.props.appPatch} routeActive={this.props.routeActive} sessionToken={this.props.sessionToken} history={this.props.history} {...this.props} />)
    // // merchant admin
    // else if (this.props.userRole >= 300 && this.props.userRole < 310) return (<SidebarMerchantAdmin appPatch={this.props.appPatch} routeActive={this.props.routeActive} sessionToken={this.props.sessionToken} history={this.props.history} {...this.props} />)
    // else if (this.props.userRole >= 200 && this.props.userRole < 300) return (<SidebarPartner sessionToken={this.props.sessionToken} history={this.props.history} {...this.props} />)
    return (
      <Router>
        <AppContainer checkLogedStatus={this.props.checkLogedStatus}>
          <ResponsiveContainer appname='adminlte'>
            {pageList.map(r => r.role.includes(userRole) ? <Route key={r.path} exact path={`${basePath}${r.path}`} component={r.component} /> : null)}
          </ResponsiveContainer>
        </AppContainer>
      </Router>
    )
  }
}
export default NavigationRouter
