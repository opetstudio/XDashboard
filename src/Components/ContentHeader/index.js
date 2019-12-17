import React, { Component } from 'react'

export default class index extends Component {
  render () {
    return (
      <div className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1 className='m-0 text-dark'>{this.props.title}</h1>
            </div>{/* /.col */}
            <div className='col-sm-6'>
              <ol className='breadcrumb float-sm-right'>
                {this.props.breadcrumb.map(r => (<li key={r.title} className={r.isActive ? 'breadcrumb-item active' : 'breadcrumb-item'}>{r.link && <a href={r.link}>{r.title}</a>}{!r.link && r.title}</li>))}
              </ol>
            </div>{/* /.col */}
          </div>{/* /.row */}
        </div>{/* /.container-fluid */}
      </div>
    )
  }
}
