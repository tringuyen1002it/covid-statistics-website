import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Bar } from 'react-chartjs-2';
const useStyles = makeStyles({
 root: {
  width: '100%',
 },
});

const Chart = (props) => {
 const {
  dataChart: { confirmed, recovered, deaths },
 } = props;
 const classes = useStyles();
 return (
  <Bar
   data={{
    labels: ['Confirmed', 'Recovered', 'Deaths'],
    datasets: [
     {
      label: 'Chart Corona-Virus',
      backgroundColor: ['rgb(0, 176, 101)', 'rgb(67, 155, 226)', 'rgb(214, 49, 68)'],
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      data: [confirmed.value, recovered.value, deaths.value],
     },
    ],
   }}
   width={250}
   height={500}
   options={{
    maintainAspectRatio: false,
   }}
  />
 );
};
export default Chart;
