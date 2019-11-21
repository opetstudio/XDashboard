import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import Loader from '../../Components/Loader/Loader'
import TablePaginationContainer from '../../Containers/TablePagination/TablePaginationContainer'
import { getTransactionForReviewColumn } from '../../Utils/TableColumn'
import FilterTransaction from '../../Containers/TablePagination/FilterTransaction'
import { TransactionSelectors } from '../../Containers/Transaction/redux'
import { LoginSelectors } from '../../Containers/Login/redux'

class RefundReviewContent extends Component {
  render () {
    return (
      <section className='content'>
        <FilterTransaction
          withoutStatus
          withRefundStatus
          table='trxForRefundReview'
          userMerchantCode={this.props.userMerchantCode}
        />
        <div className='box'>
          <div className='box-body'>
            {this.props.isRequesting && <Loader loading />}
            {!this.props.isRequesting &&
              <TablePaginationContainer
                columns={getTransactionForReviewColumn(this.props)}
                userMerchantCode={this.props.userMerchantCode}
                table='trxForRefundReview'
              />}
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isRequesting: TransactionSelectors.isRequesting(state.login),
    userMerchantCode: LoginSelectors.userMerchantCode(state.login)
  }
}
const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(RefundReviewContent))
