// semua class react js harus import module react
import React from 'react'
// librari untuk connect ke local storage atau (redux)
import { connect } from 'react-redux'
// librari untuk multi language, biar label2 yang tampil di web, bisa multi bahasa
import { injectIntl } from 'react-intl'
// import fungsi redirect page dari library react-router-dom
import { Redirect } from 'react-router-dom'
// import component untuk halaman my-profile
import MyProfilePageComp from '../../Components/Profile/MyProfilePageComp'
import {isLoggedIn} from '../../Utils/Utils'
import LoginActions, { LoginSelectors } from '../Login/redux'
// import object AppConfig untuk ambil variable basepath dari file configurasi aplikasi
import AppConfig from '../../Config/AppConfig'

// ini adalah kelas contianer (container artinya, kelas yang akan konek ke local storage atau redux)
class MyProfilePage extends React.PureComponent {
  render () {
    console.log('render')
    // cek apakah sedang login atau tidak. kalo tidak login, lakukan redirect page ke halaman login
    if (isLoggedIn(this.props.isLoggedIn) !== true) { return <Redirect to={`${AppConfig.basePath}/login`} /> }
    // render component MyProfilePageComp
    return (<MyProfilePageComp
      history={this.props.history}
      {...this.props}
    />)
  }
}

// ini fungsi untuk melakukan inject atau parsing state2 yang ada di localstorage atau redux, ke dalam props nya sih kelas ini.
const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login),
    parameterRedux1: 'value dari parameterRedux1'
  }
}

// ini fungsi untuk melakukan inject atau parsing fungsi2 yang ada di localstorage atau redux, ke dalam props nya sih kelas ini.
const mapDispatchToProps = dispatch => {
  return {
    functionRedux1: () => {
      console.log('fungsi functionRedux1, di exekusi')
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(MyProfilePage))
