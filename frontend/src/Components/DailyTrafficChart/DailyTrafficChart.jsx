import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './DailyTrafficChart.css';


function DailyTrafficChart() {

    const [basicChart,setBasicChart]=useState({
        series: [{
            name: 'A',
            data: [44, 25, 41, 67, 22, 83, 42],
            color: '#8a2be2',

          }, 
            ],
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
                chart: {
                  width: 240
                },
                legend: {
                  position: 'bottom',
                  offsetX: -10,
                  offsetY: 0
                }
              }
            },
            {
              breakpoint: 1100,
              options: {
                chart: {
                  width: 240
                },
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
                borderRadius: 7,
                columnWidth: 15,
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
                categories: ["01", "02", "03", "04", "05", "06","07"],
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
    <div>
        <ReactApexChart options={basicChart.options} series={basicChart.series} type="bar" height={300} width={260}/>
    </div>
  )
}

export default DailyTrafficChart