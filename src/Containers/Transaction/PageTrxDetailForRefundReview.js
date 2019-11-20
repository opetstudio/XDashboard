import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import LoginActions, { LoginSelectors } from '../Login/redux'
import TransactionActions, {TransactionSelectors} from './redux'
import { Redirect } from 'react-router-dom'
import PageTrxDetailForRefundReview from '../../Components/Transaction/PageTrxDetailForRefundReview'
import {isLoggedIn} from '../../Utils/Utils'

import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

class TheComponent extends React.PureComponent {
  render () {
    console.log('render')
    // console.log('render container report. props=', this.props)
    if (isLoggedIn(this.props.isLoggedIn) !== true) { return <Redirect to={`${basePath}/login`} /> }
    return (<PageTrxDetailForRefundReview
      history={this.props.history}
      {...this.props}
    />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    transactionFetchOne: query => dispatch(TransactionActions.transactionFetchOne(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
