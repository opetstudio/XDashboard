import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import {Images} from '../../Themes'
import AppConfig from '../../Config/AppConfig'
import {getAccessToken, getUserPrivName} from '../../Utils/Utils'

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
      <div>
        <header className='main-header'>
          {/* Logo */}
          <Link to={`${AppConfig.basePath}/home/${getAccessToken(this.props.sessionToken)}`} className='logo'>
            {/* mini logo for sidebar mini 50x50 pixels */}
            <span className='logo-mini'><b>PL</b></span>
            {/* logo for regular state and mobile devices */}
            <span className='logo-lg'><b>PLINK MBDD</b></span>
          </Link>
          {/* Header Navbar: style can be found in header.less */}
          <nav className='navbar navbar-static-top'>
            {/* Sidebar toggle button */}
            <a href='#' className='sidebar-toggle' data-toggle='push-menu' role='button'>
              <span className='sr-only'>Toggle navigation</span>
            </a>
            {/* Navbar Right Menu */}
            <div className='navbar-custom-menu'>
              <ul className='nav navbar-nav'>
                {/* User Account: style can be found in dropdown.less */}
                <li className='dropdown user user-menu'>
                  <a href='#' className='dropdown-toggle' data-toggle='dropdown'>
                    {/* <img src={useravatar} className='user-image' alt='User Image' /> */}
                    <span className='hidden-xs'>{this.props.userFullName}</span>
                  </a>
                  <ul className='dropdown-menu'>
                    {/* User image */}
                    <li className='user-header'>
                      {/* <img src={useravatar} className='img-circle' alt='User Image' /> */}
                      <p>
                        {this.props.userFullName}
                        <small>{getUserPrivName(this.props.userRole)}</small>
                      </p>
                    </li>
                    {/* Menu Body */}
                    <li className='user-body'>
                      {/* <div className='row'>
                        <div className='col-xs-4 text-center'>
                          <a href='#'>Followers</a>
                        </div>
                        <div className='col-xs-4 text-center'>
                          <a href='#'>Sales</a>
                        </div>
                        <div className='col-xs-4 text-center'>
                          <a href='#'>Friends</a>
                        </div>
                      </div> */}
                      {/* /.row */}
                    </li>
                    {/* Menu Footer */}
                    <li className='user-footer'>
                      <div className='pull-left'>
                        <Link to={`${AppConfig.basePath}/my-profile/${getAccessToken(this.props.sessionToken)}`} className='btn btn-default btn-flat'>
                        Profile
                        </Link>
                      </div>
                      <div className='pull-right'>
                        {/* <a href='#' className='btn btn-default btn-flat' onClick={(e) => this._logout(e)}>Sign out</a> */}
                        <button type='button' className='btn btn-default' data-toggle='modal' data-target='#modal-default'>
                          Logout
                        </button>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className='modal fade' id='modal-default'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>×</span></button>
                <h4 className='modal-title'>Logout Konfirmasi</h4>
              </div>
              <div className='modal-body'>
                <p>Klik logout untuk keluar</p>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-default pull-left' data-dismiss='modal'>Close</button>
                <button type='button' className='btn btn-primary' data-dismiss='modal' onClick={(e) => this._logout(e)}>Logout</button>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
      </div>
    )
  }
}
export default HeaderComponent
