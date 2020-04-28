import React from 'react';
import { Card, CardContent, Typography, Box, Paper, Grid } from '@material-ui/core';
import styles from './Card.module.css';
import CountUp from 'react-countup';
import MaterialTable from 'material-table';
const columns = [
 {
  title: 'Country',
  field: 'countryRegion',
 },
 {
  title: 'Confirmed',
  field: 'confirmed',
 },
 {
  title: 'Deaths',
  field: 'deaths',
 },
 {
  title: 'Recovered',
  field: 'recovered',
 },
];
const InformationCard = ({ data: { confirmed, deaths, recovered } }) => {
 return (
  <div className={styles.container}>
   <Grid container direction="row" alignItems="center" justify="center">
    <Grid item xs={12} md={3}>
     <Card className={styles.card} style={{ backgroundColor: '#1c1c1d' }}>
      <Paper className={styles.paper} style={{ backgroundColor: '#00b065' }}></Paper>
      <CardContent>
       <Typography style={{ color: '#00b065', fontSize: '20px', textAlign: 'center' }}>Total Confirmed </Typography>
       <Typography style={{ color: '#00b065', fontSize: '16px', textAlign: 'center', fontWeight: 'bold' }}>
        <CountUp start={0} end={confirmed.value} duration={2} separator="," />
       </Typography>
      </CardContent>
     </Card>
    </Grid>
    <Grid item xs={12} md={3}>
     <Card className={styles.card} style={{ backgroundColor: '#1c1c1d' }}>
      <Paper className={styles.paper} style={{ backgroundColor: '#d63144' }}></Paper>
      <CardContent>
       <Typography style={{ color: '#d63144', fontSize: '20px', textAlign: 'center' }}> Total Deaths </Typography>
       <Typography style={{ color: '#d63144', fontSize: '16px', textAlign: 'center', fontWeight: 'bold' }}>
        <CountUp start={0} end={deaths.value} duration={2} separator="," />
       </Typography>
      </CardContent>
     </Card>
    </Grid>
    <Grid item xs={12} md={3}>
     <Card className={styles.card} style={{ backgroundColor: '#1c1c1d' }}>
      <Paper className={styles.paper} style={{ backgroundColor: '#439be2' }}></Paper>
      <CardContent>
       <Typography style={{ color: '#439be2', fontSize: '20px', textAlign: 'center' }}>Total recovered </Typography>
       <Typography style={{ color: '#439be2', fontSize: '16px', textAlign: 'center', fontWeight: 'bold' }}>
        <CountUp start={0} end={recovered.value} duration={2} separator="," />
       </Typography>
      </CardContent>
     </Card>
    </Grid>
   </Grid>
   <Grid container direction="row" alignItems="center" justify="center">
    <Grid item xs={12} md={9}>
     {/* <MaterialTable style={{ marginRight: '10%', marginTop: '2%' }} columns={columns} title={null} /> */}
    </Grid>
   </Grid>
  </div>
 );
};

export default InformationCard;
