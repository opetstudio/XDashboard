import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import Immutable from 'seamless-immutable'
import PaginationActions, { PaginationSelectors } from './redux'
import Filter from '../../Components/Pagination/Filter'

class TheComponent extends React.PureComponent {
  render () {
    const { pageSize, page, table, filter, columns, datasource } = this.props
    return (
      <Filter requestData={(d) => this.props.onSubmit({ datasource, columns, table, page: page, size: pageSize, filter: d.filter })} {...this.props} />
    //   <Filter requestData={(d) => this.props.onSubmit({ datasource, columns, table, page: page, size: pageSize, filter: Immutable.asMutable(filter, { deep: true }) })} {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    filter: PaginationSelectors.filter(state.pagination, ownProps.table),
    pageSize: PaginationSelectors.size(state.pagination, ownProps.table),
    page: PaginationSelectors.page(state.pagination, ownProps.table),
    submitFilterMSG: PaginationSelectors.submitFilterMSG(state.pagination, ownProps.table)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // transactionReadRequest: query => dispatch(TransactionActions.transactionReadRequest(query))
    onSubmit: query => dispatch(PaginationActions.submitFilter(query)),
    resetFilter: query => dispatch(PaginationActions.resetFilter(query)),
    handleOnChange: query => dispatch(PaginationActions.fieldOnChange(query))
    // handleOnChange: query => dispatch(TransactionActions.handleOnChange(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
