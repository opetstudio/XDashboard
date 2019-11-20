import React, { Component } from 'react'
import Helmet from 'react-helmet'
import {getUserColumn} from '../../Utils/TableColumn'
import TablePaginationContainer from '../../Containers/TablePagination/TablePaginationContainer'
class ListAllUserComp extends Component {
  render () {
    console.log('render')
    console.log('props=====>', this.props)
    return (
      <div className='content-wrapper'>
        <Helmet> <title>User Management</title></Helmet> <section className={'content-header'}>
          <h1>
            List All User
          </h1> <ol className='breadcrumb'>
            <li><a href='#'><i className='fa fa-dashboard' /> User Management</a></li> <li className='active'>List All User</li>
          </ol>
        </section> <section className='content'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='box'>
                <div className='box-header'>
                  {/* <h3 className='box-title'>Data Table With Full Features</h3> */}
                </div> <div className='box-body'>
                  {(this.props.tablepaginationResponseCode !== 'MBDD00' && this.props.tablepaginationResponseDescription !== '') && <span style={{color: 'red'}}>{this.props.tablepaginationResponseDescription}</span>}
                  <TablePaginationContainer url='/plink/merchant/findBy' columns={getUserColumn()} userMerchantCode={this.props.userMerchantCode} table='user' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default ListAllUserComp
