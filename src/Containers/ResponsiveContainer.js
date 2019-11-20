import PropTypes from 'prop-types'
import React from 'react'
import AdminlteContainer from './AdminlteContainer'
// import MaterialuiContainer from './MaterialuiContainer'

const ResponsiveContainer = ({ children, appname }) => {
  return (<AdminlteContainer>{children}</AdminlteContainer>)
}

// ResponsiveContainer.propTypes = {
//   children: PropTypes.node
// }

export default ResponsiveContainer
