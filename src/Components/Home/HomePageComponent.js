import React, { Component } from 'react'
import Helmet from 'react-helmet'
import {Line} from 'react-chartjs-2'

var salesChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Electronics',
      // fillColor: 'rgb(210, 214, 222)',
      // strokeColor: 'rgb(210, 214, 222)',
      // pointBackgroundColor: 'rgb(210, 214, 222)',
      // pointStrokeColor: '#c1c7d1',
      // pointHighlightFill: '#fff',
      // pointHighlightStroke: 'rgb(220,220,220)',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        // 'rgba(255, 99, 132, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        // 'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Digital Goods',
      // fillColor: 'rgba(60,141,188,0.9)',
      // strokeColor: 'rgba(60,141,188,0.8)',
      // pointBackgroundColor: '#3b8bba',
      // pointStrokeColor: 'rgba(60,141,188,1)',
      // pointHighlightFill: '#fff',
      // pointHighlightStroke: 'rgba(60,141,188,1)',
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(153, 102, 255, 0.2)'
        // 'rgba(255, 159, 64, 0.2)'
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

class HomePageComponent extends Component {
  render () {
    console.log('render')
    console.log('HomePageComponent props===>', this.props)
    return (
      <div className='content-wrapper'>
        <Helmet>
          <title>Home</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        <section className='content-header'>
          <h1>
            Dashboard
            <small>Version 2.0</small>
          </h1>
          <ol className='breadcrumb'>
            <li><a href='#'><i className='fa fa-dashboard' /> Home</a></li>
            <li className='active'>Dashboard</li>
          </ol>
        </section>
        {/* Main content */}
        <section className='content'>
          {/* Info boxes */}
          <div className='row'>
            <div className='col-md-4 col-sm-6 col-xs-12'>
              <div className='info-box'>
                <span className='info-box-icon bg-aqua'><i className='fa fa-xl fa-line-chart color-blue' /></span>
                <div className='info-box-content'>
                  <span className='info-box-text'>Transaction Per Month</span>
                  <span className='info-box-number'>640<small /></span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className='col-md-4 col-sm-6 col-xs-12'>
              <div className='info-box'>
                <span className='info-box-icon bg-green'><i className='fa fa-xl fa-money color-orange' /></span>
                <div className='info-box-content'>
                  <span className='info-box-text'>Total Amount</span>
                  <span className='info-box-number'>230.025.120</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            {/* fix for small devices only */}
            <div className='clearfix visible-sm-block' />
            <div className='col-md-4 col-sm-6 col-xs-12'>
              <div className='info-box'>
                <span className='info-box-icon bg-red'><i className='fa fa-xl fa-university color-teal' /></span>
                <div className='info-box-content'>
                  <span className='info-box-text'>Bank Active</span>
                  <span className='info-box-number'>3</span>
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
              <div className='box'>
                <div className='box-header with-border'>
                  <h3 className='box-title'>Monthly Recap Report</h3>
                </div>
                {/* /.box-header */}
                <div className='box-body'>
                  <div className='row'>
                    <div className='col-md-8'>
                      <p className='text-center'>
                        <strong>Sales: 1 January, 2019 - 1 July, 2019</strong>
                      </p>
                      <div className='chart'>
                        {/* Sales Chart Canvas */}
                        {/* <canvas id='salesChart' style={{height: 180}} /> */}
                        <Line
                          data={salesChartData}
                          options={salesChartOptions}
                        />
                      </div>
                      {/* /.chart-responsive */}
                    </div>
                    {/* /.col */}
                    <div className='col-md-4'>
                      <p className='text-center'>
                        <strong>Transaction Status</strong>
                      </p>
                      <div className='progress-group'>
                        <span className='progress-text'>Setled</span>
                        <span className='progress-number'><b>590</b></span>
                        <div className='progress sm'>
                          <div className='progress-bar progress-bar-green' style={{width: '88%'}} />
                        </div>
                      </div>
                      {/* /.progress-group */}
                      <div className='progress-group'>
                        <span className='progress-text'>Pending</span>
                        <span className='progress-number'><b>30</b></span>
                        <div className='progress sm'>
                          <div className='progress-bar progress-bar-warning' style={{width: '10%'}} />
                        </div>
                      </div>
                      {/* /.progress-group */}
                      <div className='progress-group'>
                        <span className='progress-text'>Reject</span>
                        <span className='progress-number'><b>20</b></span>
                        <div className='progress sm'>
                          <div className='progress-bar progress-bar-red' style={{width: '5%'}} />
                        </div>
                      </div>
                      <div className='progress-group'>
                        <span className='progress-text'>Refund Request</span>
                        <span className='progress-number'><b>20</b></span>
                        <div className='progress sm'>
                          <div className='progress-bar progress-bar-warning' style={{width: '5%'}} />
                        </div>
                      </div>
                      <div className='progress-group'>
                        <span className='progress-text'>Refund Approved</span>
                        <span className='progress-number'><b>20</b></span>
                        <div className='progress sm'>
                          <div className='progress-bar progress-bar-green' style={{width: '5%'}} />
                        </div>
                      </div>
                      <div className='progress-group'>
                        <span className='progress-text'>Refund Rejected</span>
                        <span className='progress-number'><b>20</b></span>
                        <div className='progress sm'>
                          <div className='progress-bar progress-bar-red' style={{width: '5%'}} />
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
export default HomePageComponent
