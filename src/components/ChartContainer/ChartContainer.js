import React, { useEffect, useRef } from 'react';
import { CategoryScale, Chart, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js'
import { useUserData } from '../../userDataContext';

Chart.register(CategoryScale, LineController, LineElement, PointElement, LinearScale, Title);

const ChartContainer = () => {
  const chartRef = useRef(null);
  const {visibleUsers} = useUserData();
  
  useEffect(() => {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const monthlyData = labels.map((label, index) => {
      return visibleUsers.filter(user => user.birthday === (index + 1)).length;
    });

    const cumulativeData = monthlyData.map((sum => val => sum += (val * 5))(0));

    const chart = new Chart(chartRef.current.getContext('2d'), {
      type: 'line',
      data: {
          labels,
          datasets: [{
              label: '# of Users',
              data: monthlyData,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
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
          }, {
            label: 'Cumulative',
            data: cumulativeData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
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
    });

    return () => chart.destroy();
  }, [visibleUsers]);

  return (
    <div>
      Chart
      <canvas ref={chartRef} id="myChart" width="400" height="200"></canvas>
    </div>
  )
};

export default ChartContainer;