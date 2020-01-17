import React from 'react'
import Moment from 'moment'
import AppConfig from '../Config/AppConfig'
import { getAccessToken } from '../Utils/Utils'

const basePath = AppConfig.basePath
export const getTransactionColumn = ({ history, sessionToken }) => {
  return [{
    id: 'mercRefNo',
    Header: 'Merchant Ref. Number',
    accessor: 'mercRefNo'
  },
  {
    id: 'ecommRefNo',
    Header: 'Pg Ref. Number',
    accessor: 'ecommRefNo'
  },
  {
    id: 'payBnkRefNo',
    Header: 'Bank Ref. Number',
    accessor: 'payBnkRefNo'
  },
  {
    id: 'mercCd',
    Header: 'Merchant Id',
    accessor: 'mercCd'
  },
  // {
  //   id: 'pymtMethodCd',
  //   Header: 'Method',
  //   accessor: 'pymtMethodCd',
  //   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  // },
  {
    id: 'coCcyAmt', // Required because our accessor is not a string
    Header: 'Amount',
    accessor: d => d.coCcyAmt, // Custom value accessors!,
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    id: 'createdDt',
    Header: props => <span>Created Date Time</span>, // Custom header components!
    accessor: d => Moment(d.createdDt).format('YYYY-MM-DD HH:mm:ss')
    // accessor: 'friend.age'
  },
  {
    id: 'payDt',
    Header: props => <span>Payment Date Time</span>,
    accessor: d => {
      if (!d.payDt) return ''
      return Moment(d.payDt).format('YYYY-MM-DD HH:mm:ss')
    }
    // accessor: 'friend.age'
  },
  {
    Header: 'Merchant User Id',
    accessor: 'consUsernameMerchant'
  },
  {
    Header: 'Source Of Fund',
    accessor: 'issuerCode'
  },
  {
    Header: 'Status',
    accessor: 'paySts'
  },
  {
    Header: 'Action',
    accessor: 'id',
    Cell: p => <div className='btn-group'><button type='button' className='btn btn-success' onClick={() => history.push(`${basePath}/report/detail/${getAccessToken(sessionToken)}?id=${p.value}`)}>Detail</button></div>
  }
  ]
}
// this.props.history.push(`${basePath}/merchant/edit-profile/${getAccessToken(this.props.sessionToken)}`)}>
export const getTransactionForRefundColumn = ({ history, sessionToken }) => {
  return [{
    id: 'mercRefNo',
    Header: 'Merchant Ref. Number',
    accessor: 'mercRefNo' // String-based value accessors!
  },
  // {
  //   id: 'pymtMethodCd',
  //   Header: 'Method',
  //   accessor: 'pymtMethodCd',
  //   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  // },
  {
    id: 'coCcyAmt', // Required because our accessor is not a string
    Header: 'Amount',
    accessor: d => d.coCcyAmt, // Custom value accessors!,
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    id: 'createdDt',
    Header: props => <span>Created Date Time</span>, // Custom header components!
    accessor: d => Moment(d.createdDt).format('YYYY-MM-DD HH:mm')
    // accessor: 'friend.age'
  },
  {
    Header: 'Merchant User Id',
    accessor: 'consUsernameMerchant'
  },
  {
    Header: 'Source Of Fund',
    accessor: 'issuerCode'
  },
  {
    Header: 'Status',
    accessor: 'paySts'
  },
  {
    Header: 'Action',
    accessor: 'id',
    Cell: p => <div className='btn-group'><button type='button' className='btn btn-success' onClick={() => history.push(`${basePath}/report/detail-for-refund-request/${getAccessToken(sessionToken)}?id=${p.value}`)}>Refund</button></div>
  }
  ]
}
export const getTransactionForReviewColumn = ({ history, sessionToken }) => {
  return [{
    id: 'mercRefNo',
    Header: 'Merchant Ref. Number',
    accessor: 'mercRefNo' // String-based value accessors!
  },
  // {
  //   id: 'pymtMethodCd',
  //   Header: 'Method',
  //   accessor: 'pymtMethodCd',
  //   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  // },
  {
    id: 'coCcyAmt', // Required because our accessor is not a string
    Header: 'Amount',
    accessor: d => d.coCcyAmt, // Custom value accessors!,
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    id: 'createdDt',
    Header: props => <span>Created Date Time</span>, // Custom header components!
    accessor: d => Moment(d.createdDt).format('YYYY-MM-DD HH:mm')
    // accessor: 'friend.age'
  },
  {
    Header: 'Merchant User Id',
    accessor: 'consUsernameMerchant'
  },
  {
    Header: 'Source Of Fund',
    accessor: 'issuerCode'
  },
  {
    Header: 'Status',
    accessor: 'paySts'
  },
  {
    id: 'id',
    Header: 'Action',
    accessor: d => d,
    // Cell: props => <span>{props.value.paySts}</span>
    Cell: p => p.value.paySts === 'REFREQ' ? (<div className='btn-group'><button type='button' className='btn btn-success' onClick={() => history.push(`${basePath}/report/detail-for-refund-review/${getAccessToken(sessionToken)}?id=${p.value.id}`)}>Review</button></div>) : null
  }
  ]
}

export const getUserColumn = () => {
  return [{
    id: 'userId',
    Header: 'User Id',
    accessor: 'userId' // String-based value accessors!
  }, {
    id: 'userFullname', // Required because our accessor is not a string
    Header: 'Full Name',
    accessor: d => d.userFullname, // Custom value accessors!,
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    id: 'email',
    Header: props => <span>Email</span>, // Custom header components!
    accessor: 'email'
    // accessor: 'friend.age'
  },
  // {
  //   Header: 'Group',
  //   accessor: 'consUsernameMerchant'
  // },
  {
    Header: 'Phone Number',
    accessor: 'mobile'
  }, {
    Header: 'Address',
    accessor: 'address'
  }, {
    Header: 'isLogin',
    accessor: 'isLogin'
  },
  {
    id: 'userId',
    Header: 'Action',
    accessor: d => d.userId,
    Cell: props => <div className='btn-group'><button type='button' className='btn btn-success' onClick={() => {}}>Detail</button></div>
    // Cell: p => <div className='btn-group'><button type='button' className='btn btn-success' onClick={() => {}}>Detail</button></div>
  }
  ]
}
export const getMbddEventsColumn = () => {
  return [
    {
      id: 'id',
      Header: 'Act',
      accessor: d => d.id,
      Cell: props => <div className='btn-group'><button type='button' className='btn btn-success' onClick={() => alert('cek' + props.value)}>Detail</button></div>
      // Cell: p => <div className='btn-group'><button type='button' className='btn btn-success' onClick={() => {}}>Detail</button></div>
    },
    {
      id: 'ecomRefNo',
      Header: 'Pg Ref No',
      accessor: 'ecomRefNo' // String-based value accessors!
    },
    {
      id: 'mercRefNo',
      Header: 'mercRefNo',
      accessor: 'mercRefNo' // String-based value accessors!
    },
    // {
    //   id: 'eventName', // Required because our accessor is not a string
    //   Header: 'Event Name',
    //   accessor: d => d.eventName, // Custom value accessors!,
    //   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    // },
    {
      id: 'latestLogName',
      Header: props => <span>latestLogName</span>, // Custom header components!
      accessor: 'latestLogName'
    // accessor: 'friend.age'
    },
    {
      id: 'mbddRd',
      Header: props => <span>mbddRd</span>, // Custom header components!
      accessor: 'mbddRd'
    // accessor: 'friend.age'
    },
    {
      id: 'sessionToken',
      Header: props => <span>sessionToken</span>, // Custom header components!
      accessor: 'sessionToken'
    // accessor: 'friend.age'
    },
    // {
    //   id: 'actionId',
    //   Header: props => <span>actionId</span>, // Custom header components!
    //   accessor: 'actionId'
    // // accessor: 'friend.age'
    // },
    {
      id: 'isComplete',
      Header: props => <span>isComplete</span>, // Custom header components!
      accessor: d => {
        if (d.isComplete === 'Y') return 'Y'
        else return 'N'
      }
    // accessor: 'friend.age'
    },
    {
      id: 'createdUnixtime',
      Header: props => <span>Created</span>, // Custom header components!
      accessor: d => d.createdUnixtime && `${Moment(parseInt(d.createdUnixtime))}`
    // accessor: 'friend.age'
    }
  ]
}
