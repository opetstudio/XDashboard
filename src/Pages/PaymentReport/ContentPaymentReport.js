import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { LoginSelectors } from '../../Containers/Login/redux'
import { getTransactionColumn } from '../../Utils/TableColumn'
import TablePaginationContainer from '../../Containers/TablePagination/TablePaginationContainer'
import FilterTransaction from '../../Containers/TablePagination/FilterTransaction'
class ContentPaymentReport extends Component {
  render () {
    console.log('render')
    return (
      <section className='content'>
        <FilterTransaction
          userMerchantCode={this.props.userMerchantCode}
        />
        {/* <MaterialUiTable   /> */}
        <div className='box'>
          {/* <div className='box-header'>
                <h3 className='box-title'>Data Table With Full Features</h3>
              </div> */}
          <div className='box-body'>
            <div className='row'>
              <div className='col-sm-12'>
                <TablePaginationContainer
                  url='/plink/report/list'
                  columns={getTransactionColumn(this.props)}
                  userMerchantCode={this.props.userMerchantCode}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login),
    userMerchantCode: LoginSelectors.userMerchantCode(state.login)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // transactionReadRequest: query => dispatch(TransactionActions.transactionReadRequest(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(ContentPaymentReport))
