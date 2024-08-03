import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './TotalSpentReport.css';


function TotalSpentReport() {

    const [state] =useState({

        series: [{
            name: '',
            data: [21, 40, 28, 51, 42, 9, 50],
            color: '#8a2be2',
          }, {
            name: '',
            data: [11, 32, 45, 32, 34, 52, 41],
            color: '#49fbe7',
          }],
          options: {
            chart: 
            {
              type: 'line'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'category',
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
              labels:{
                style:{colors:'#9fa2a2',fontWeight: 900}
              }
            },
            yaxis:{
                type: 'category',
                show:false,
                labels:{
                    style:{colors:'#FF5733'}
                  },
                tickAmount: '2',
                
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 300
                },
                legend: {
                  position: 'bottom'
                }
              }
            },
            {
              breakpoint: 1100,
              options: {
                chart: {
                  width: 350
                },
                legend: {
                  position: 'bottom'
                }
              }
            }
          ]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
              
            },
          },
    )

  return (
    <div className='chart-wrapper'>
        <ReactApexChart options={state.options} series={state.series} type="line" />
    </div>
  )
}

export default TotalSpentReport