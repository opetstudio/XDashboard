import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Line } from 'react-chartjs-2'
import LoginCheck from '../../Containers/Login/LoginCheck'
import ContentHeader from '../../Components/ContentHeader'

const paymentSuccessData = [65, 59, 80, 81, 56, 55, 40]
const paymentRejectData = [28, 48, 40, 19, 86, 27, 90]
const transactionPerMonth = 600
const totalAmountTransaction = 230025120
const totalAmountToday = 1000000
const transactionStatusPerMonth = {
  success: 300,
  pending: 10,
  reject: 190,
  refundSuccess: 20,
  refundPending: 40,
  refundReject: 40
}

const salesChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Payment Success',
      // fillColor: 'rgb(210, 214, 222)',
      // strokeColor: 'rgb(210, 214, 222)',
      // pointBackgroundColor: 'rgb(210, 214, 222)',
      // pointStrokeColor: '#c1c7d1',
      // pointHighlightFill: '#fff',
      // pointHighlightStroke: 'rgb(220,220,220)',
      data: paymentSuccessData,
      backgroundColor: [
        // 'rgba(255, 99, 132, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
        // 'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'green'
        // 'rgba(255, 99, 132, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 3
    },
    {
      label: 'Refund Success',
      // fillColor: 'rgba(60,141,188,0.9)',
      // strokeColor: 'rgba(60,141,188,0.8)',
      // pointBackgroundColor: '#3b8bba',
      // pointStrokeColor: 'rgba(60,141,188,1)',
      // pointHighlightFill: '#fff',
      // pointHighlightStroke: 'rgba(60,141,188,1)',
      data: paymentRejectData,
      backgroundColor: [
        // 'red'
        // 'rgba(255, 99, 132, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(153, 102, 255, 0.2)'
        // 'rgba(255, 159, 64, 0.2)'
      ],
      borderWidth: 3,
      borderColor: [
        'red'
      ]
    }
  ]
}
var salesChartOptions = {
  // Boolean - If we should show the scale at all
  // showScale: true,
  // Boolean - Whether grid lines are shown across the chart
  // scaleShowGridLines: false,
  // String - Colour of the grid lines
  // scaleGridLineColor: 'rgba(0,0,0,.05)',
  // Number - Width of the grid lines
  // scaleGridLineWidth: 1,
  // Boolean - Whether to show horizontal lines (except X axis)
  // scaleShowHorizontalLines: true,
  // Boolean - Whether to show vertical lines (except Y axis)
  // scaleShowVerticalLines: true,
  // Boolean - Whether the line is curved between points
  // bezierCurve: true,
  // Number - Tension of the bezier curve between points
  // bezierCurveTension: 0.3,
  // Boolean - Whether to show a dot for each point
  // pointDot: false,
  // Number - Radius of each point dot in pixels
  // pointDotRadius: 4,
  // Number - Pixel width of point dot stroke
  // pointDotStrokeWidth: 1,
  // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
  // pointHitDetectionRadius: 20,
  // Boolean - Whether to show a stroke for datasets
  // datasetStroke: true,
  // Number - Pixel width of dataset stroke
  // datasetStrokeWidth: 2,
  // Boolean - Whether to fill the dataset with a color
  // datasetFill: true,
  // String - A legend template
  // legendTemplate: '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<datasets.length; i++){%><li><span style=\'background-color:<%=datasets[i].lineColor%>\'></span><%=datasets[i].label%></li><%}%></ul>',
  // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
  // maintainAspectRatio: true,
  // Boolean - whether to make the chart responsive to window resizing
  // responsive: true
}

class PageHome extends Component {
  render () {
    console.log('render')
    console.log('HomePageComponent props===>', this.props)
    return (
      <div className='content-wrapper'>
        <LoginCheck />
        <Helmet>
          <title>Home</title>
          <body className='hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed' />
        </Helmet>
        {/* Content Header (Page header) */}
        <ContentHeader
          title='Dashboard'
          breadcrumb={[{ title: 'Home', link: '#' }, { title: 'Dashboard v2', link: null, isActive: true }]}
        />
        {/* /.content-header */}
        {/* Main content */}
        <section className='content'>
          {/* Info boxes */}
          <div className='row'>
            <div className='col-12 col-sm-6 col-md-4'>
              <div className='info-box'>
                <span className='info-box-icon bg-info elevation-1'><i className='fas fa-cog' /></span>
                <div className='info-box-content'>
                  <span className='info-box-text'>Transaction Per Month</span>
                  <span className='info-box-number'>{transactionPerMonth}<small /></span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className='col-12 col-sm-6 col-md-4'>
              <div className='info-box mb-3'>
                <span className='info-box-icon bg-danger elevation-1'><i className='fas fa-thumbs-up' /></span>
                <div className='info-box-content'>
                  <span className='info-box-text'>Total Amount</span>
                  <span className='info-box-number'>{totalAmountTransaction}</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            {/* fix for small devices only */}
            <div className='clearfix hidden-md-up' />
            <div className='col-12 col-sm-6 col-md-4'>
              <div className='info-box mb-3'>
                <span className='info-box-icon bg-success elevation-1'><i className='fas fa-shopping-cart' /></span>
                <div className='info-box-content'>
                  <span className='info-box-text'>Total Amount Today</span>
                  <span className='info-box-number'>{totalAmountToday}</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className='row'>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-header'>
                  <h5 className='card-title'>Monthly Recap Report</h5>
                  <div className='card-tools'>
                    <button type='button' className='btn btn-tool' data-card-widget='collapse'>
                      <i className='fas fa-minus' />
                    </button>
                  </div>
                </div>
                {/* /.box-header */}
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-md-8'>
                      <p className='text-center'>
                        <strong>Transaction Success: 1 January, 2019 - 1 July, 2019</strong>
                      </p>
                      <div className='chart'>
                        {/* Sales Chart Canvas */}
                        {/* <canvas id='salesChart' style={{height: 180}} /> */}
                        <Line
                          data={salesChartData}
                          options={salesChartOptions}
                        />
                        {/* <canvas id='salesChart' height='180' style='height: 180px;' /> */}
                      </div>
                      {/* /.chart-responsive */}
                    </div>
                    {/* /.col */}
                    <div className='col-md-4'>
                      <p className='text-center'>
                        <strong>Transaction Status Per Month</strong>
                      </p>
                      <div className='progress-group'>
                        Settled
                        <span className='float-right'>{transactionStatusPerMonth.success}</span>
                        <div className='progress progress-sm'>
                          <div className='progress-bar bg-primary' style={{ width: `${transactionStatusPerMonth.success / transactionPerMonth * 100}%` }} />
                        </div>
                      </div>
                      <div className='progress-group'>
                        Pending
                        <span className='float-right'>{transactionStatusPerMonth.pending}</span>
                        <div className='progress progress-sm'>
                          <div className='progress-bar bg-primary' style={{ width: `${transactionStatusPerMonth.pending / transactionPerMonth * 100}%` }} />
                        </div>
                      </div>
                      <div className='progress-group'>
                        Reject
                        <span className='float-right'>{transactionStatusPerMonth.reject}</span>
                        <div className='progress progress-sm'>
                          <div className='progress-bar bg-primary' style={{ width: `${transactionStatusPerMonth.reject / transactionPerMonth * 100}%` }} />
                        </div>
                      </div>
                      <div className='progress-group'>
                        Refund Request
                        <span className='float-right'>{transactionStatusPerMonth.refundPending}</span>
                        <div className='progress progress-sm'>
                          <div className='progress-bar bg-primary' style={{ width: `${transactionStatusPerMonth.refundPending / transactionPerMonth * 100}%` }} />
                        </div>
                      </div>
                      <div className='progress-group'>
                        Refund Approved
                        <span className='float-right'>{transactionStatusPerMonth.refundSuccess}</span>
                        <div className='progress progress-sm'>
                          <div className='progress-bar bg-primary' style={{ width: `${transactionStatusPerMonth.refundSuccess / transactionPerMonth * 100}%` }} />
                        </div>
                      </div>
                      <div className='progress-group'>
                        Refund Rejected
                        <span className='float-right'>{transactionStatusPerMonth.refundReject}</span>
                        <div className='progress progress-sm'>
                          <div className='progress-bar bg-primary' style={{ width: `${transactionStatusPerMonth.refundReject / transactionPerMonth * 100}%` }} />
                        </div>
                      </div>
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* ./box-body */}
                {/* /.box-footer */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          {/* Main row */}
          {/* /.row */}
        </section>
        {/* /.content */}

      </div>
    )
  }
}
export default PageHome
