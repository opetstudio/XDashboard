import React, { Component } from 'react'
import { path } from 'ramda'

export default class Filter extends Component {
  constructor (props) {
    super(props)
    this.resetFilter = this.resetFilter.bind(this)
  }

  handleOnSubmit (e) {
    if (e) e.preventDefault()
    // (e) => { if (e) e.preventDefault(); requestData({}) }
    const { requestData, resetFilter, table } = this.props
    const obj = this.refs[table]
    const el = obj.querySelectorAll('input')
    const filter = {}
    el.forEach((v, k) => {
      console.log(v.getAttribute('value'))
      filter[v.getAttribute('name')] = v.getAttribute('value')
    })
    console.log('filter===>', filter)
    requestData({ table, filter })
  }

  componentDidMount () {
    const { requestData, resetFilter, table } = this.props
    const obj = this.refs[table]
    // obj.submit()
    console.log('obj=======>', obj)
    // this.refs.buttonSearch.click()
  }

  resetFilter (e) {
    if (e) e.preventDefault()
    const { requestData, resetFilter, table, handleOnChange } = this.props
    const obj = this.refs[table]
    const el = obj.querySelectorAll('input')
    el.forEach((v, k) => {
    //   console.log(v.getAttribute('value'))
      const val = v.getAttribute('value')
      const name = v.getAttribute('name')
      const isHidden = v.getAttribute('isHidden')
      //   console.log('isHidden=', isHidden)
      //   console.log('name=', name)
      //   console.log('val=', val)
      if (isHidden !== 'true') handleOnChange({ table, field: name, value: '' })
    //   if (!hiddenvalue) handleOnChange({ table, field: name, value: '' })
    //   filter[v.getAttribute('name')] = v.getAttribute('value')
    })
  }

  render () {
    const { requestData, table, submitFilterMSG } = this.props
    const rd = path([table, 'rd'], submitFilterMSG)
    return (
      <form ref={table} className='form' onSubmit={this.handleOnSubmit.bind(this)}>
        <div className='card'>
          <div className='card-header'>
            <h5 className='card-title'>Filter</h5>
            <div className='card-tools'>
              <button type='button' className='btn btn-tool' data-card-widget='collapse'>
                <i className='fas fa-minus' />
              </button>
            </div>
          </div>
          <div className='card-body'>

            {this.props.children}

          </div>
          <div className='card-footer'>
            <button ref='buttonSearch' type='submit' className='btn btn-info' style={{ marginRight: 5 }}>
              <i className='fas fa-search' /> Search
            </button>
            {/* <button type='button' className='btn btn-info' onClick={this.resetFilter.bind(this)} style={{ marginRight: 5 }}><i className='fas fa-close' /> Reset</button> */}
            <button type='button' className='btn btn-info' onClick={this.resetFilter.bind(this)} style={{ marginRight: 5 }}><i className='fas fa-close' /> Reset</button>
            {rd && <span style={{ color: 'red' }}>tesssss</span>}
          </div>

        </div>
      </form>
    )
  }
}
