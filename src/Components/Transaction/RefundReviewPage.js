import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Loader from '../Loader/Loader'
import TablePaginationContainer from '../../Containers/TablePagination/TablePaginationContainer'
import {getTransactionForReviewColumn} from '../../Utils/TableColumn'
import FilterTransaction from '../../Containers/TablePagination/FilterTransaction'

export default class RefundReviewPage extends Component {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <Helmet>
          <title>Transaksi Refund Review</title>
        </Helmet>
        <section className='content-header'>
          <h1>
          Transaksi Refund Review
          </h1>
          <ol className='breadcrumb'>
            <li><a href='#'><i className='fa fa-dashboard' /> Transaksi</a></li>
            <li className='active'>Transaksi Refund Review</li>
          </ol>
        </section>
        <section className='content'>
          <FilterTransaction
            withoutStatus
            withRefundStatus
            table={'trxForRefundReview'}
            userMerchantCode={this.props.userMerchantCode}
          />
          <div className='box'>
            <div className='box-body'>
              {this.props.isRequesting && <Loader loading />}
              {!this.props.isRequesting && <TablePaginationContainer
                columns={getTransactionForReviewColumn(this.props)}
                userMerchantCode={this.props.userMerchantCode}
                table={'trxForRefundReview'}
              />}
            </div>
          </div>
        </section>
      </div>
    )
  }
}
