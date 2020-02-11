import React, { Component, PureComponent } from 'react'
import { connect } from 'react-redux'
import { injectIntl, WrappedComponentProps } from 'react-intl'
import { TransactionSelectors } from '../../Containers/Transaction/redux'
import { LoginSelectors } from '../../Containers/Login/redux'
import FilterTransaction from '../../Containers/TablePagination/FilterTransaction'
import Loader from '../../Components/Loader/Loader'
import TablePaginationContainer from '../../Containers/TablePagination/TablePaginationContainer'
import { getVirtualAccountReportColumn } from '../../Utils/TableColumn'

type VaProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
export interface Props extends VaProps, WrappedComponentProps {
  userMerchantCode: string;
  enthusiasmLevel?: number;
  isRequesting: boolean;
  history: any;
  sessionToken: any;
}
  
interface State {
  currentEnthusiasm: number;
}

class ContentVirtualacountReport extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
  }
  render () : JSX.Element {
    return (
      <section className='content'>
        <FilterTransaction
          withoutSof
          withoutStatus
          withRefundStatus
          table='trxForVAReport'
          type='trxForVAReport'
          userMerchantCode={this.props.userMerchantCode}
        />
        <div className='box'>
          <div className='box-body'>
            {this.props.isRequesting && <Loader loading />}
            {!this.props.isRequesting &&
              <TablePaginationContainer
                columns={getVirtualAccountReportColumn(this.props)}
                userMerchantCode={this.props.userMerchantCode}
                table='trxForVAReport'
              />}
          </div>
        </div>
      </section>
    )
  }
}

interface RootState {
  login: any
}

const mapStateToProps = (state: RootState) => {
  return {
    isRequesting: TransactionSelectors.isRequesting(state.login),
    userMerchantCode: LoginSelectors.userMerchantCode(state.login)
  }
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(
  mapStateToProps,
  null
)(injectIntl(ContentVirtualacountReport))
