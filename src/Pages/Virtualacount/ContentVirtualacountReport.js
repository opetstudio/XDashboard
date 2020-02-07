import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { TransactionSelectors } from '../../Containers/Transaction/redux'
import { LoginSelectors } from '../../Containers/Login/redux'
import FilterTransaction from '../../Containers/TablePagination/FilterTransaction'
import Loader from '../../Components/Loader/Loader'
import TablePaginationContainer from '../../Containers/TablePagination/TablePaginationContainer'
import { getVirtualAccountReportColumn } from '../../Utils/TableColumn'

class ContentVirtualacountReport extends Component {
  render () {
    return (
      <section className='content'>
        <FilterTransaction
          withoutSof
          withoutStatus
          withRefundStatus
          table='trxForVAReport'
          type='trxForVAReport'
          userMerchantCode={this.props.userMerchantCode}
        />
        <div className='box'>
          <div className='box-body'>
            {this.props.isRequesting && <Loader loading />}
            {!this.props.isRequesting &&
              <TablePaginationContainer
                columns={getVirtualAccountReportColumn(this.props)}
                userMerchantCode={this.props.userMerchantCode}
                table='trxForVAReport'
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
)(injectIntl(ContentVirtualacountReport))
