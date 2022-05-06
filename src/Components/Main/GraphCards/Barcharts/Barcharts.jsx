import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: false,
  plugins: {
    legend: {
      display:false
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
  scales:{
    y:{
      beginAtZero:true,
      ticks:{
        display:false
      }
    },
    x:{
      beginAtZero:true,
      ticks:{
        display:false
      }
    }
  }
  };
  const labels= ['', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', '', '', '','' ]
  export default function Barcharts({Color}) {
  return <Bar width={120} height={100} options={options} data={{
    labels,
    datasets: [
      {
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: Color
      },
    ],
  }}

   />;
};
