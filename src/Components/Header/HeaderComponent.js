import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import {Images} from '../../Themes'
import AppConfig from '../../Config/AppConfig'
import { getAccessToken, getUserPrivName } from '../../Utils/Utils'

// const useravatar = Images.useravatar
class HeaderComponent extends Component {
  _logout (e) {
    if (e) e.preventDefault()
    this.props.logout()
    alert('do logout')
  }

  render () {
    console.log('render')
    // console.log('userFullName=', this.props.userFullName)
    return (
      <nav className='main-header navbar navbar-expand navbar-white navbar-light'>
        {/* Left navbar links */}
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' data-widget='pushmenu' href='#'><i className='fas fa-bars' /></a>
          </li>
          <li className='nav-item d-sm-inline-block'>
            {/* <h3 style={{ marginBottom: 0, marginTop: 4 }}>{this.props.pageTitle}</h3> */}
          </li>
          {/* <li className='nav-item d-none d-sm-inline-block'>
              <a href='index3.html' className='nav-link'>Home</a>
            </li>
            <li className='nav-item d-none d-sm-inline-block'>
              <a href='#' className='nav-link'>Contact</a>
            </li> */}
        </ul>

        {/* Navbar Right Menu */}
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a className='nav-link' data-toggle='modal' data-target='#modal-default' data-widget='control-sidebar' href='#'><i className='fas fa-power-off' /></a>
          </li>
        </ul>
      </nav>
    )
  }
}
export default HeaderComponent
