import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './YourPieChart.css';

function YourPieChart() {

    const pie = {
          
        series: [63, 25, 12],
        options: {
            dataLabels: {
                enabled: false
              },
          chart: {
            width: 300,
            type: 'pie',
          },
          colors: ['#8a2be2', '#49fbe7', '#eaeceb'],
          labels: ['A', 'B', 'C'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 350
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
                width: 240
              },
              legend: {
                position: 'bottom',
                
              }
            }
          }]
        },
      
      
      };
    

  return (
    <div>
        <ReactApexChart options={pie.options} series={pie.series} type="pie" width={270} />
    </div>
  )
}

export default YourPieChart