import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Loader from '../Loader/Loader'
import TablePaginationContainer from '../../Containers/TablePagination/TablePaginationContainer'
import {getTransactionForRefundColumn} from '../../Utils/TableColumn'
import FilterTransaction from '../../Containers/TablePagination/FilterTransaction'

export default class RefundRequestPage extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <Helmet>
          <title>Transaksi Refund Request</title>
        </Helmet>
        <section className='content-header'>
          <h1>
          Transaksi Refund Request
          </h1>
          <ol className='breadcrumb'>
            <li><a href='#'><i className='fa fa-dashboard' /> Transaksi</a></li>
            <li className='active'>Transaksi Refund Request</li>
          </ol>
        </section>
        <section className='content'>
          <FilterTransaction
            withoutStatus
            table={'trxForRefundRequest'}
            userMerchantCode={this.props.userMerchantCode}
          />
          <div className='box'>
            <div className='box-body'>
              {this.props.isRequesting && <Loader loading />}
              {!this.props.isRequesting && <TablePaginationContainer
                columns={getTransactionForRefundColumn(this.props)}
                userMerchantCode={this.props.userMerchantCode}
                table={'trxForRefundRequest'}
              />}
            </div>
          </div>
        </section>
      </div>
    )
  }
}
