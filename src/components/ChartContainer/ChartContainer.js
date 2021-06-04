import React from 'react';
import { Line } from 'react-chartjs-2';
import { useUserData } from '../../userDataContext';
import { months } from '../../utils';
import './ChartContainer.css';

const ChartContainer = () => {
  const {visibleUsers} = useUserData();

  
  const monthlyData = months.map((label, index) => {
    return visibleUsers.filter(user => user.birthday === (index + 1)).length;
  });

  const cumulativeData = monthlyData.map((sum => val => sum += (val * 5))(0));

  const data = {
    labels: months,
    datasets: [
      {
        label: '# of Users',
        data: monthlyData,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      }, {
        label: 'Cumulative',
        data: cumulativeData,
        fill: false,
        backgroundColor: 'rgb(132, 99, 255)',
        borderColor: 'rgba(132, 99, 255, 0.2)',
      }
    ],
  };

  return (
    <div className='c-ChartContainer'>
      <Line data={data} />
    </div>
  )
};

export default ChartContainer;