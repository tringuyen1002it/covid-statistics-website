import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
const Chart = (props) => {
 //  React.useEffect(() => {
 //   const { dataChart } = props.location.state;
 //   console.log('Chart -> dataChart', dataChart);
 //  }, []);
 return (
  <Card>
   <CardContent>
    <Typography color="textSecondary">Word of the Day</Typography>
   </CardContent>
  </Card>
 );
};
export default Chart;
