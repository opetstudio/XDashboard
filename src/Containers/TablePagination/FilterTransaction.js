import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import TablepaginationActions, {TablepaginationSelectors} from './redux'
import { LoginSelectors } from '../Login/redux'

import FilterTransaction from '../../Components/Tablepagination/FilterTransaction'

class TheComponent extends React.PureComponent {
  render () {
    console.log('render')
    return (<FilterTransaction
      {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userRole: LoginSelectors.userRole(state.login),
    // filter
    merchantCode: TablepaginationSelectors.merchantCode(state.tablepagination),
    transactionStartDate: TablepaginationSelectors.transactionStartDate(state.tablepagination),
    transactionEndDate: TablepaginationSelectors.transactionEndDate(state.tablepagination),
    transactionAmountMin: TablepaginationSelectors.transactionAmountMin(state.tablepagination),
    transactionAmountMax: TablepaginationSelectors.transactionAmountMax(state.tablepagination),
    merchantRefNo: TablepaginationSelectors.merchantRefNo(state.tablepagination),
    merchantUserId: TablepaginationSelectors.merchantUserId(state.tablepagination),
    sourceOfFund: TablepaginationSelectors.merchantUserId(state.tablepagination),
    transactionStatus: TablepaginationSelectors.merchantUserId(state.tablepagination)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    tablepaginationReadRequest: query => dispatch(TablepaginationActions.tablepaginationReadRequest(query)),
    tablepaginationFetchAllUser: query => dispatch(TablepaginationActions.tablepaginationFetchAllUser(query)),
    tablepaginationFetchAllTrxForRefundRequest: query => dispatch(TablepaginationActions.tablepaginationFetchAllTrxForRefundRequest(query)),
    tablepaginationFetchAllTrxForRefundReview: query => dispatch(TablepaginationActions.tablepaginationFetchAllTrxForRefundReview(query)),
    tablepaginationFetchAllTrxForVaReport: query => dispatch(TablepaginationActions.tablepaginationFetchAllTrxForVaReport(query)),
    tablepaginationReadRequestPatch: query => dispatch(TablepaginationActions.tablepaginationReadRequestPatch(query)),
    tablepaginationResetFilter: query => dispatch(TablepaginationActions.tablepaginationResetFilter(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
