import React from 'react'
import { connect } from 'react-redux'
import { path } from 'ramda'
import Immutable from 'seamless-immutable'
import { injectIntl } from 'react-intl'
import PaginationActions, { PaginationSelectors } from './redux'
import TableContent from '../../Components/Pagination/TableContent'

class TheComponent extends React.PureComponent {
  render () {
    const { datasource, columns, pageSize, page, submitFilterMSG, totalPages, rows, table, filter } = this.props
    const loading = path(['ir'], submitFilterMSG)
    // console.log('render react table propssssss ==>', this.props)
    return (
      <TableContent
        columns={columns}
        pageSize={pageSize}
        page={page}
        loading={loading}
        pages={totalPages}
        data={rows}
        requestData={(d) => this.props.onSubmit({ datasource, columns, table, page: d.page, size: d.pageSize, sorted: d.sorted, filtered: d.filtered, filter: Immutable.asMutable(filter, { deep: true }) })}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    filter: PaginationSelectors.filter(state.pagination, ownProps.table),
    pageSize: PaginationSelectors.size(state.pagination, ownProps.table),
    page: PaginationSelectors.page(state.pagination, ownProps.table),
    totalPages: PaginationSelectors.totalPages(state.pagination, ownProps.table),
    rows: PaginationSelectors.rows(state.pagination, ownProps.table),
    submitFilterMSG: PaginationSelectors.submitFilterMSG(state.pagination, ownProps.table)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // transactionReadRequest: query => dispatch(TransactionActions.transactionReadRequest(query))
    onSubmit: query => dispatch(PaginationActions.submitFilter(query)),
    resetFilter: query => dispatch(PaginationActions.resetFilter(query))
    // handleOnChange: query => dispatch(TransactionActions.handleOnChange(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
