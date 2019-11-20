import React, { Component } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

// Can be a string as well. Need to ensure each key-value pair ends with ;
// const override = css`
//     display: block;
//     margin: 0 auto;
//     border-color: red;
// `

export default class Loader extends Component {
  render () {
    console.log('render')
    return (
      <div className='sweet-loading'>
        <ClipLoader
        //   css={override}
          sizeUnit={'px'}
          size={40}
          color={'#123abc'}
          loading={this.props.loading}
        />
      </div>
    )
  }
}
