import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import ContentVirtualacountReport from './ContentVirtualacountReport'
import LoginCheck from '../../Containers/Login/LoginCheck'
import ContentHeader from '../../Components/ContentHeader'

// const TheProps = {
//   userMerchantCode: '', isRequesting: false, history: {}, sessionToken: ''
// }
export interface Props {
  history: any;
  userMerchantCode: string;
  isRequesting: boolean;
  sessionToken: string;
}
export default class PageVirtualacountReport extends PureComponent<Props> {
  render () {
    console.log('render')
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Virtual Account Report</title>
          <body className='hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed' />
        </Helmet>
        <ContentHeader
          title='Virtual Account Report'
          breadcrumb={[{ title: 'Virtual Account', link: '#' }, { title: 'Virtual Account Report', link: null, isActive: true }]}
        />
        <ContentVirtualacountReport {...this.props} />
      </div>
    )
  }
}
