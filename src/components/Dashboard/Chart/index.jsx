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
 console.log('Chart -> props', props);
 const {
  dataChart: { confirmed, recovered, deaths },
 } = props;
 console.log('Chart -> confirmed', confirmed);
 const classes = useStyles();
 return (
  <Bar
   data={{
    labels: ['Confirmed', 'Recovered', 'Deaths'],
    datasets: [
     {
      label: 'My First dataset',
      backgroundColor: ['rgba(255,99,132,0.2)', '#36a2eb', '#cc65fe'],
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      //   hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      //   hoverBorderColor: 'rgba(255,99,132,1)',
      data: [confirmed.value, recovered.value, deaths.value],
     },
    ],
   }}
   width={300}
   height={400}
   options={{
    maintainAspectRatio: false,
   }}
  />
 );
};
export default Chart;
