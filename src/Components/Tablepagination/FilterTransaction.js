import React, { Component } from 'react'
import {loadScript} from '../../Utils/Utils'

export default class FilterTransaction extends Component {
  constructor (props) {
    super(props)
    this._onChange = this._onChange.bind(this)
    this._resetFilter = this._resetFilter.bind(this)
  }
  componentWillMount () {
    this.props.tablepaginationResetFilter()
  }
  componentDidMount () {
    loadScript(this.props.tablepaginationReadRequest)
  }
  _onChange (e, f) {
    console.log('_onChange===>', e)
    const filter = {
      merchantRefNo: (this.refs.merchantRefNo || {}).value || '',
      merchantUserId: (this.refs.merchantUserId || {}).value || '',
      sourceOfFund: (this.refs.sourceOfFund || {}).value || '',
      transactionStatus: (this.refs.transactionStatus || {}).value || '',
      transactionStartDate: (this.refs.transactionStartDate || {}).value || '',
      transactionEndDate: (this.refs.transactionEndDate || {}).value || '',
      transactionAmountMin: (this.refs.transactionAmountMin || {}).value || '',
      transactionAmountMax: (this.refs.transactionAmountMax || {}).value || ''
    }
    this.props.tablepaginationReadRequestPatch({...filter})
  }
  _resetFilter (e) {
    if (e) e.preventDefault()
    console.log('_resetFilter')
    this.props.tablepaginationResetFilter()
  }
  _formOnSubmit (e) {
    if (e) e.preventDefault()
    console.log('_formOnSubmit')
    if (this.props.table === 'trxForRefundReview') return this.props.tablepaginationFetchAllTrxForRefundReview({})
    if (this.props.table === 'trxForRefundRequest') return this.props.tablepaginationFetchAllTrxForRefundRequest({})
    return this.props.tablepaginationReadRequest({})
  }
  _renderFormGroup (type, label, id, placeholder, options) {
    if (type === 'text' || type === 'number') {
      return (
        <div className='form-group'>
          <label className='col-sm-3 control-label'>{label}</label> <div className='col-sm-9'>
            <input type={type} className='form-control' id={id} placeholder={placeholder} ref={id} onChange={this._onChange} value={this.props[id]} />
          </div>
        </div>
      )
    }
    if (type === 'datepicker') {
      return (
        <div className='form-group'>
          <label className='col-sm-3 control-label'>{label}</label> <div className='col-sm-9'>
            <div className='input-group date'>
              <div className='input-group-addon'><i className='fa fa-calendar' /></div> <input type='text' className='form-control pull-right cok' id={id} ref={id} onChange={this._onChange} value={this.props[id]} />
            </div>
          </div>
        </div>
      )
    }
    if (type === 'select') {
      return (
        <div className='form-group'>
          <label className='col-sm-3 control-label'>{label}</label> <div className='col-sm-9'>
            <select className='form-control select2' style={{width: '100%'}} ref={id} onChange={this._onChange} defaultValue={this.props[id]}>
              {options.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
            </select>
          </div>
        </div>
      )
    }
  }
  render () {
    console.log('render')
    return (
      <div className='box box-default'>
        <div className='box-header with-border'>
          <h3 className='box-title'>Transaction Filter</h3> <div className='box-tools pull-right'>
            <button type='button' className='btn btn-box-tool' data-widget='collapse'><i className='fa fa-minus' /></button>
            {/* <button type='button' className='btn btn-box-tool' data-widget='remove'><i className='fa fa-remove' /></button> */}
          </div>
        </div> <div className='box-body'>
          <form className='form-horizontal' onSubmit={(e) => this._formOnSubmit(e)}>
            <div className='row'>
              <div className='col-md-6'>
                {this._renderFormGroup('text', 'Merchant Ref. Number', 'merchantRefNo', 'Merchant Ref No')}
                {this._renderFormGroup('text', 'Bank Ref. Number', 'bankRefNo', 'Bank Ref No')}
                {this._renderFormGroup('text', 'Merchant User Id', 'merchantUserId', 'Merchant User Id')}
                {this._renderFormGroup('select', 'Source Of Fund', 'sourceOfFund', 'Source Of Fund', [{value: '', label: '-- select bank --'}, {value: 'bank-btpn', label: 'Jenius - Bank BTPN'}, {value: 'bank-cimb', label: 'Bank CIMB Niaga'}])}
                {(this.props.userRole === '100' || this.props.userRole === '200' || this.props.userRole === '210' || this.props.userRole === '400') && this._renderFormGroup('number', 'Merchant Code', 'merchantCode', 'Merchant Code')}
              </div> <div className='col-md-6'>
                {!this.props.withoutStatus && this._renderFormGroup('select', 'Status', 'transactionStatus', 'Status', [{value: '', label: '-- select status --'}, {value: 'SETLD', label: 'Settle'}, {value: 'PNDNG', label: 'Pending'}, {value: 'REJEC', label: 'Reject'}])}
                {this.props.withRefundStatus && this._renderFormGroup('select', 'Status', 'transactionStatus', 'Status', [{value: '', label: '-- select status --'}, {value: 'REFREQ', label: 'Refund Request'}, {value: 'REFAPP', label: 'Refund Approve'}, {value: 'REFREJ', label: 'Refund Reject'}])}
                {this._renderFormGroup('number', 'Minimal Amount', 'transactionAmountMin', 'Minimal Amount')}
                {this._renderFormGroup('number', 'Maximal Amount', 'transactionAmountMax', 'Maximal Amount')}
                {this._renderFormGroup('datepicker', 'Start Date', 'transactionStartDate', 'Start Date')}
                {this._renderFormGroup('datepicker', 'End Date', 'transactionEndDate', 'End Date')}
              </div>
            </div> <div className='box-footer'>
              <button type='submit' className='btn btn-info btn-flat'><i className='fa fa-search' />Search</button>|
              <button type='button' className='btn btn-info btn-flat' onClick={this._resetFilter}><i className='fa fa-close' />Reset</button>|
              <div class="btn-group">
                <button type="button" class="btn btn-warning btn-flat">Download</button>
                <button type="button" class="btn btn-warning btn-flat dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <span class="caret"></span>
                  <span class="sr-only">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Download CSV</a></li>
                  <li><a href="#">Download TXT</a></li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
