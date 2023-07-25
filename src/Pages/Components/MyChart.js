import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import "./Co_Home.css"

class MyChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.chart = null;
  }

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

   label = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'April', 'May', 'June', 'July'
  ];
  buildChart() {
    const chartRef = this.chartRef.current.getContext('2d');

    if (this.chart) {
      this.chart.destroy();
    }
 
    this.chart = new Chart(chartRef, {
      type: 'line',
      data: {
        // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'April', 'May', 'June', 'July'],
        labels: this.label,
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3, 7, 2, 8, 9, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
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
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }



render() {
 
  return <canvas id="Chart-box" ref={this.chartRef} />;
}
}

export default MyChart;
