import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import PaginationActions, { PaginationSelectors } from './redux'
import FieldText from '../../Components/Pagination/FieldText'
class TheComponent extends React.PureComponent {
  render () {
    return (
      <FieldText {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    value: PaginationSelectors.fieldValue(state.pagination, ownProps.table, ownProps.name)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleOnChange: query => dispatch(PaginationActions.fieldOnChange(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
