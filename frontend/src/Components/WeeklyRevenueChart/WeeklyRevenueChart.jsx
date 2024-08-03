import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';


function WeeklyRevenueChart() {

    const [stack,setStack]=useState({
        series: [{
            name: 'A',
            data: [44, 55, 41, 67, 22, 43, 22, 11, 17, 15],
            color: '#8a2be2',

          }, {
            name: 'B',
            data: [13, 23, 20, 8, 13, 27, 15, 44, 55, 41],
            color: '#49fbe7',

          }, {
            name: 'C',
            data: [11, 17, 15, 15, 21, 14, 50, 13, 23, 20],
            color: '#eaeceb',
            
          }],
          options: {
            dataLabels: {
              enabled: false
            },
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                show: true
              },
              zoom: {
                enabled: true
              }
            },
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                  position: 'bottom',
                  offsetX: -10,
                  offsetY: 0
                }
              }
            }],
            plotOptions: {
              bar: {
                horizontal: false,
                borderRadius: 10,
                columnWidth: 20,
                borderRadiusApplication: 'end', // 'around', 'end'
                borderRadiusWhenStacked: 'last', // 'all', 'last'
                dataLabels: {
                    style: {
                        fontSize: '0px',
                      },
                  total: {
                    enabled: false,
                  }
                }
              },
            },
            xaxis: {
                type: 'category',
                categories: ["01", "02", "03", "04", "05", "06","07","08","09","10"],
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
                tickAmount: '0',
                
            },
            legend: {
              position: 'right',
              offsetY: 40
            },
            fill: {
              opacity: 1
            }
          },
    })

  return (
    <div className='chart-wrapper'>
      <ReactApexChart options={stack.options} series={stack.series} type="bar" height={260}  />
    </div>
  )
}

export default WeeklyRevenueChart