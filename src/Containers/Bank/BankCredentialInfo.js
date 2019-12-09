import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import Moment from 'moment'
import BankActions, { BankSelectors } from './redux'
import Loader from '../../Components/Loader/Loader'

class BankCredentialInfo extends Component {
  componentWillMount () {
    console.log('componentWillMount props', this.props)
    this.props.bankFetchCredential({})
  }

  render () {
    console.log('render bank credential info props=', this.props)
    const {
      apiKey,
      bankSecretKey,
      callbackUrl,
      publicKey,
      validFrom,
      validTo
    } = this.props.bankCredential || {}
    const {
      ir
    } = this.props.bankFetchCredentialMSG || {}
    if (ir) return <Loader loading />
    const dtFrom = new Date(Moment(validFrom).format('YYYY-MM-DD hh:mm:ss'))
    const dtTo = new Date(Moment(validTo).format('YYYY-MM-DD hh:mm:ss'))
    const now = new Date()
    const status = now >= dtFrom && now <= dtTo ? 'ACTIVE' : 'INACTIVE'
    return (
      <dl className='dl-horizontal'>
        <dt>Api Key</dt>
        <dd>{apiKey}</dd>
        <dt>Callback Url</dt>
        <dd>{callbackUrl}</dd>
        <dt>Bank Secret Key</dt>
        <dd>{bankSecretKey}</dd>
        <dt>RSA Key</dt>
        <dd>{publicKey}</dd>
        <dt>Valid From</dt>
        <dd>{Moment(validFrom).format('YYYY-MM-DD hh:mm:ss')}</dd>
        <dt>Valid To</dt>
        <dd>{Moment(validTo).format('YYYY-MM-DD hh:mm:ss')}</dd>
        <dt>Status</dt>
        <dd>{status}</dd>
        {/* <dt>Remark</dt>
        <dd>{remark}</dd> */}
        {/* <dt>Updated Date</dt>
        <dd>{updatedDate}</dd> */}
      </dl>)
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    bankCredential: BankSelectors.bankCredential(state.bank),
    bankFetchCredentialMSG: BankSelectors.bankFetchCredentialMSG(state.bank)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    bankFetchCredential: data => dispatch(BankActions.bankFetchCredential(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(BankCredentialInfo))
