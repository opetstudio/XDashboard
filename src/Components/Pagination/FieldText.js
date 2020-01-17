import React, { Component } from 'react'

export default class FieldText extends Component {
  constructor (props) {
    super(props)
    this.state = { v: this.props.defaultValue }
  }

  componentDidMount () {
    const { defaultValue, handleOnChange, id, table } = this.props
    handleOnChange({ table, field: id, value: defaultValue })
  }

  render () {
    const { name, id, label, type, placeholder, value, handleOnChange, table, defaultValue, hidden, constantValue } = this.props
    console.log('FieldText defaultValue=' + defaultValue)
    return (
      <div style={{ display: hidden ? 'none' : 'block' }} className='form-group'>
        <label htmlFor={id}>{label}</label>
        {/* <input isHidden={hidden} name={name} type={type} className='form-control' id={id} placeholder={placeholder} ref={name} value={this.state.v} onChange={(e, f) => this.setState({ v: e.target.value })} /> */}
        <input isHidden={`${hidden}`} hiddenvalue={hidden} name={name} type={type} className='form-control' id={id} placeholder={placeholder} ref={name} onChange={(e, f) => handleOnChange({ table, field: name, value: e.target.value })} value={constantValue || value || defaultValue} />
      </div>
    )
  }
}
