
import React, { Component } from 'react'
import gql from 'graphql-tag'
import { path } from 'ramda'
import { connect } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import { injectIntl } from 'react-intl'
import TableContent from '../Pagination/TableContent'
import { getMbddEventsColumn } from '../../Utils/TableColumn'
import Filter from '../Pagination/Filter'
import { LoginSelectors } from '../Login/redux'
import FieldText from '../Pagination/FieldText'

class MbddEvents extends Component {
  render () {
    return (
      <div>
        <Filter table='mbddEvents' columns={getMbddEventsColumn()}>
          <div className='row'>
            <div className='col-md-6'>
              <FieldText table='mbddEvents' id='ecomRefNo' label='Pg Ref No' type='text' placeholder='Pg Ref. No' defaultValue='' />
              <FieldText hidden table='mbddEvents' id='eventName' label='' type='text' placeholder='' defaultValue='INITIALIZATION' />
            </div>
            <div className='col-md-6' />
          </div>
        </Filter>
        <div className='card'>
          <div className='card-body'>
            <TableContent
              columns={getMbddEventsColumn()}
              table='mbddEvents'
            />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    userMerchantCode: LoginSelectors.userMerchantCode(state.login)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // transactionReadRequest: query => dispatch(TransactionActions.transactionReadRequest(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(MbddEvents))

// export default (props) => {
//   const GET_DOGS = gql`
//     {
//         mbddEvents(page: 0, size: 3, where: "", sort: "", ) {
//         content{
//             ecomRefNo
//             eventName
//             merchantCode
//             actionId
//             mbddRc
//             mbddRm
//         }
//         size
//         number
//         totalPages
//         }
//     }
//     `
//   const { loading, error, data } = useQuery(GET_DOGS)
//   //   if (loading) return 'Loading...'
//   if (error) return `Error! ${error.message}`
//   console.log('data ==>', data)
//   return (
//     <TableContent
//       columns={getMbddEventsColumn()}
//       pageSize={path(['mbddEvents', 'size'], data)}
//       page={path(['mbddEvents', 'number'], data)}
//       loading={loading}
//       pages={path(['mbddEvents', 'totalPages'], data)}
//       data={path(['mbddEvents', 'content'], data)}
//       requestData={(d) => this.props.tablepaginationReadRequest({ url: this.props.url, userMerchantCode: this.props.userMerchantCode, ...d })}
//     />
//   )
// }
