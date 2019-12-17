import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { TransactionSelectors } from '../../Containers/Transaction/redux'
import { LoginSelectors } from '../../Containers/Login/redux'
import FilterTransaction from '../../Containers/TablePagination/FilterTransaction'
import Loader from '../../Components/Loader/Loader'
import TablePaginationContainer from '../../Containers/TablePagination/TablePaginationContainer'
import { getTransactionForRefundColumn } from '../../Utils/TableColumn'
import { loadScript } from '../../Utils/Utils'
class ContentReconReport extends Component {
  componentDidMount () {
    loadScript()
  }

  render () {
    return (
      <section className='content'>

        {/* Main row */}
        <div className='row'>
          {/* Left col */}
          <section className='col-lg-6 connectedSortable'>
            <div className='box box-primary'>
              <div className='box-header bg-light-blue-gradient'>
                <h3 className='box-title'>Prismalink</h3>
                <div className='pull-right box-tools'>
                  <button type='button' className='btn btn-primary btn-sm pull-right' data-widget='collapse' data-toggle='tooltip' title='Collapse' style={{ marginRight: 5 }}>
                    <i className='fa fa-minus' />
                  </button>
                </div>
              </div>
              {/* /.box-header */}
              <div className='box-body'>
                <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th>Payment Status</th>
                      <th>Total</th>
                      <th>IDR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Success</td>
                      <td><span className='badge bg-green'>3</span></td>
                      <td>500.000‬‬</td>
                    </tr>
                    <tr>
                      <td>Cancel</td>
                      <td><span className='badge bg-red'>3</span></td>
                      <td>‭210.000‬</td>
                    </tr>
                    <tr>
                      <td>Pending</td>
                      <td><span className='badge bg-yellow'>6</span></td>
                      <td>620.000‬</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* /.box-body */}
            </div>
            {/* quick email widget */}
            <div className='box box-primary'>
              <div className='box-header'>
                <h3 className='box-title'>Prismalink</h3>
                {/* tools box */}
                <div className='pull-right box-tools'>
                  <button type='button' className='btn btn-sm pull-right' data-widget='collapse' data-toggle='tooltip' title='Collapse' style={{ marginRight: 5 }}>
                    <i className='fa fa-minus' />
                  </button>
                </div>
                {/* /. tools */}
              </div>
              <div className='box-body'>
                <table id='example1' className='table table-hover'>
                  <thead>
                    <tr>
                      <th>Plink Ref No</th>
                      <th>Bank Ref No</th>
                      <th>Amount</th>
                      <th>Payment Status</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>P001</td>
                      <td>B001</td>
                      <td>Rp. 100.000</td>
                      <td><span className='badge bg-secondary'>Pending</span></td>
                      <td>
                        <button type='button' className='btn btn-block btn-xs' data-toggle='tooltip' data-placement='top' title='incompatibility of data with prismalink'>Mismatch</button>
                      </td>
                    </tr>
                    <tr>
                      <td>P002</td>
                      <td>-</td>
                      <td>Rp. 200.000</td>
                      <td><span className='badge bg-secondary'>Pending</span></td>
                      <td>
                        <button type='button' className='btn btn-block btn-danger btn-xs' data-toggle='tooltip' data-placement='top' title='incompatibility of data with prismalink'>Not Found</button>
                      </td>
                    </tr>
                    <tr>
                      <td>P003</td>
                      <td>B002</td>
                      <td>Rp. 50.000</td>
                      <td><span className='badge bg-secondary'>Pending</span></td>
                      <td>
                        <button type='button' className='btn btn-block btn-xs' data-toggle='tooltip' data-placement='top' title='incompatibility of data with prismalink'>Mismatch</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <div class="box-footer clearfix">
        <button type="button" class="pull-right btn btn-default" id="sendEmail">Send
          <i class="fa fa-arrow-circle-right"></i></button>
      </div> */}
            </div>
          </section>
          {/* /.Left col */}
          {/* right col (We are only adding the ID to make the widgets sortable) */}
          <section className='col-lg-6 connectedSortable'>
            <div className='box box-success'>
              <div className='box-header bg-green-gradient'>
                <h3 className='box-title'>Prismalink</h3>
                <div className='pull-right box-tools'>
                  <button type='button' className='btn btn-success btn-sm pull-right' data-widget='collapse' data-toggle='tooltip' title='Collapse' style={{ marginRight: 5 }}>
                    <i className='fa fa-minus' />
                  </button>
                </div>
              </div>
              {/* /.box-header */}
              <div className='box-body'>
                <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th>Payment Status</th>
                      <th>Total</th>
                      <th>IDR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Success</td>
                      <td><span className='badge bg-green'>4</span></td>
                      <td>600.000‬‬</td>
                    </tr>
                    <tr>
                      <td>Cancel</td>
                      <td><span className='badge bg-red'>7</span></td>
                      <td>530.000‬</td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td>‭</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* /.box-body */}
            </div>
            {/* quick email widget */}
            <div className='box box-success'>
              <div className='box-header'>
                <h3 className='box-title'>Prismalink</h3>
                {/* tools box */}
                <div className='pull-right box-tools'>
                  <button type='button' className='btn btn-sm pull-right' data-widget='collapse' data-toggle='tooltip' title='Collapse' style={{ marginRight: 5 }}>
                    <i className='fa fa-minus' />
                  </button>
                </div>
                {/* /. tools */}
              </div>
              <div className='box-body'>
                <table id='example2' className='table table-hover'>
                  <thead>
                    <tr>
                      <th>Plink Ref No</th>
                      <th>Bank Ref No</th>
                      <th>Amount</th>
                      <th>Payment Status</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>P001</td>
                      <td>B001</td>
                      <td>Rp. 100.000</td>
                      <td><span className='badge bg-secondary'>Success</span></td>
                      <td>
                        <button type='button' className='btn btn-block btn-outline-secondary btn-xs' data-toggle='tooltip' data-placement='top' title='incompatibility of data with prismalink'>Mismatch</button>
                      </td>
                    </tr>
                    <tr>
                      <td>P003</td>
                      <td>B002</td>
                      <td>Rp. 50.000</td>
                      <td><span className='badge bg-secondary'>Cancel</span></td>
                      <td>
                        <button type='button' className='btn btn-block btn-outline-secondary btn-xs' data-toggle='tooltip' data-placement='top' title='incompatibility of data with prismalink'>Mismatch</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <div class="box-footer clearfix">
                <button type="button" class="pull-right btn btn-default" id="sendEmail">Send
                  <i class="fa fa-arrow-circle-right"></i></button>
              </div> */}
            </div>
          </section>
          {/* right col */}
        </div>
        {/* /.row (main row) */}

      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isRequesting: TransactionSelectors.isRequesting(state.login),
    userMerchantCode: LoginSelectors.userMerchantCode(state.login)
  }
}
const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(ContentReconReport))
