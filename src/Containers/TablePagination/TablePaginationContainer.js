import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import TablepaginationActions, {TablepaginationSelectors} from './redux'
import TablepaginationListPageComponent from '../../Components/Tablepagination/TablepaginationListPageComponent'
import TablepaginationUser from '../../Components/Tablepagination/TablepaginationUser'
import TableTrxForRefundRequest from '../../Components/Tablepagination/TableTrxForRefundRequest'
import TableTrxForRefundReport from '../../Components/Tablepagination/TableTrxForRefundReport'
import TableTrxForRefundReview from '../../Components/Tablepagination/TableTrxForRefundReview'
import TableTrxForVAReport from '../../Components/Tablepagination/TableTrxForVAReport'

class TheComponent extends React.PureComponent {
  render () {
    console.log('render')
    if (this.props.table === 'user') return (<TablepaginationUser {...this.props} />)
    if (this.props.table === 'trxForRefundReport') return (<TableTrxForRefundReport {...this.props} />)
    if (this.props.table === 'trxForRefundRequest') return (<TableTrxForRefundRequest {...this.props} />)
    if (this.props.table === 'trxForRefundReview') return (<TableTrxForRefundReview {...this.props} />)
    if (this.props.table === 'trxForVAReport') return (<TableTrxForVAReport {...this.props} />)
    return (<TablepaginationListPageComponent {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: TablepaginationSelectors.dataTablepagination(state.tablepagination),
    pages: TablepaginationSelectors.pages(state.tablepagination),
    page: TablepaginationSelectors.page(state.tablepagination),
    pageSize: TablepaginationSelectors.pageSize(state.tablepagination),
    isRequesting: TablepaginationSelectors.isRequesting(state.tablepagination)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    tablepaginationReadRequest: query => dispatch(TablepaginationActions.tablepaginationReadRequest(query)),
    tablepaginationFetchAllUser: query => dispatch(TablepaginationActions.tablepaginationFetchAllUser(query)),
    tablepaginationFetchAllTrxForVaReport: query => dispatch(TablepaginationActions.tablepaginationFetchAllTrxForVaReport(query)),
    tablepaginationFetchAllTrxForRefundRequest: query => dispatch(TablepaginationActions.tablepaginationFetchAllTrxForRefundRequest(query)),
    tablepaginationFetchAllTrxForRefundReview: query => dispatch(TablepaginationActions.tablepaginationFetchAllTrxForRefundReview(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
