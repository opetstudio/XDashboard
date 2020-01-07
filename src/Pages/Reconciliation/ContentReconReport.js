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
        {/* Date and time range */}
        <div className='col-6'>
          <div className='form-group'>
            <label style={{ color: '#999999' }}>Date and time range:</label>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'><i className='far fa-clock' /></span>
              </div>
              <input type='text' className='form-control float-right' id='reservationtime2' />
            </div>
            {/* /.input group */}
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-6'>
              <div className='card card-primary'>
                <div className='card-header'>
                  <h3 className='card-title'>Prismalink</h3>
                  <div className='card-tools'>
                    <button type='button' className='btn btn-tool' data-card-widget='collapse'><i className='fas fa-minus' />
                    </button>
                  </div>
                </div>
                <div className='card-body p-0'>
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
                        <td><span className='badge bg-success'>3</span></td>
                        <td>500.000‬‬</td>
                      </tr>
                      <tr>
                        <td>Cancel</td>
                        <td><span className='badge bg-danger'>3</span></td>
                        <td>‭210.000‬</td>
                      </tr>
                      <tr>
                        <td>Pending</td>
                        <td><span className='badge bg-info'>6</span></td>
                        <td>620.000‬</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
              {/* Default box */}
              <div className='card card-outline card-primary'>
                <div className='card-header'>
                  <h3 className='card-title'>Prismalink</h3>
                  <div className='card-tools'>
                    <button type='button' className='btn btn-tool' data-card-widget='maximize'><i className='fas fa-expand' />
                    </button>
                  </div>
                </div>
                <div className='card-body'>
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
                          <button type='button' className='btn btn-block btn-outline-secondary btn-xs' data-toggle='tooltip' data-placement='top' title='incompatibility of data with prismalink'>Mismatch</button>
                        </td>
                      </tr>
                      <tr>
                        <td>P002</td>
                        <td>-</td>
                        <td>Rp. 200.000</td>
                        <td><span className='badge bg-secondary'>Pending</span></td>
                        <td>
                          <button type='button' className='btn btn-block btn-outline-danger btn-xs' data-toggle='tooltip' data-placement='top' title='incompatibility of data with prismalink'>Not Found</button>
                        </td>
                      </tr>
                      <tr>
                        <td>P003</td>
                        <td>B002</td>
                        <td>Rp. 50.000</td>
                        <td><span className='badge bg-secondary'>Pending</span></td>
                        <td>
                          <button type='button' className='btn btn-block btn-outline-secondary btn-xs' data-toggle='tooltip' data-placement='top' title='incompatibility of data with prismalink'>Mismatch</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            <div className='col-6'>
              <div className='card card-success'>
                <div className='card-header'>
                  <h3 className='card-title'>Bank</h3>
                  <div className='card-tools'>
                    <button type='button' className='btn btn-tool' data-card-widget='collapse'><i className='fas fa-minus' />
                    </button>
                  </div>
                </div>
                <div className='card-body p-0'>
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
                        <td><span className='badge bg-success'>4</span></td>
                        <td>600.000‬‬</td>
                      </tr>
                      <tr>
                        <td>Cancel</td>
                        <td><span className='badge bg-danger'>7</span></td>
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
                {/* /.card-body */}
              </div>
              <div className='card card-outline card-success' id='merchant2'>
                <div className='card-header'>
                  <h3 className='card-title'>Bank</h3>
                  <div className='card-tools'>
                    <button type='button' className='btn btn-tool' data-card-widget='maximize'><i className='fas fa-expand' />
                    </button>
                  </div>
                </div>
                <div className='card-body'>
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
                {/* /.card-body */}
              </div>
            </div>
          </div>
        </div>

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
