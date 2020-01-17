
import React, { Component } from 'react'
import { path } from 'ramda'
import TableContent from '../../Containers/Pagination/TableContent'
import { getMbddEventsColumn } from '../../Utils/TableColumn'
import Filter from '../../Containers/Pagination/Filter'
import FieldText from '../../Containers/Pagination/FieldText'

export default class TabContent extends Component {
  render () {
    const { eventName, actionId, table } = this.props
    console.log('TabContent=======>', this.props)
    return (
      <div style={{ marginTop: 10 }}>
        <Filter table={table} columns={getMbddEventsColumn()} datasource='mbddEvents'>
          <div className='row'>
            <div className='col-md-6'>
              <FieldText table={table} name='ecomRefNo' id={`${table}1`} label='Pg Ref No' type='text' placeholder='Pg Ref. No' defaultValue='' />
              <FieldText hidden table={table} name='eventName' id={`${table}2`} label='' type='text' placeholder='' defaultValue={eventName} constantValue={eventName} />
              <FieldText hidden table={table} name='actionId' id={`${table}3`} label='' type='text' placeholder='' defaultValue={actionId} />
            </div>
            <div className='col-md-6' />
          </div>
        </Filter>
        <div className='card'>
          <div className='card-body'>
            <TableContent
              columns={getMbddEventsColumn()}
              table={table}
              datasource='mbddEvents'
            />
          </div>
        </div>
      </div>
    )
  }
}

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
