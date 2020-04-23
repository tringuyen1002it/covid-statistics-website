import React from 'react';
import { Card, CardContent, Typography, Box, Paper, Grid } from '@material-ui/core';
import styles from './Card.module.css';
const InformationCard = (props) => {
 console.log(props);
 return (
  <div className={styles.container}>
   <Grid container direction="row" alignItems="center" spacing="3" justify="center">
    <Grid item xs={12} md={3}>
     <Card className={styles.card} style={{ backgroundColor: '#1c1c1d' }}>
      <Paper className={styles.paper} style={{ backgroundColor: '#00b065' }}></Paper>
      <CardContent>
       <Typography style={{ color: '#00b065', fontSize: '18px', textAlign: 'center' }}>Total Confirmed </Typography>
       <Typography style={{ color: 'white', fontSize: '16px', textAlign: 'center' }}>12312312 </Typography>
       <Typography style={{ color: 'white', fontSize: '13px', textAlign: 'center' }}> Time </Typography>
      </CardContent>
     </Card>
    </Grid>
    <Grid item xs={12} md={3}>
     <Card className={styles.card} style={{ backgroundColor: '#1c1c1d' }}>
      <Paper className={styles.paper} style={{ backgroundColor: '#d63144' }}></Paper>
      <CardContent>
       <Typography style={{ color: '#d63144', fontSize: '18px', textAlign: 'center' }}>Total Dead </Typography>
      </CardContent>
     </Card>
    </Grid>
    <Grid item xs={12} md={3}>
     <Card className={styles.card} style={{ backgroundColor: '#1c1c1d' }}>
      <Paper className={styles.paper} style={{ backgroundColor: '#439be2' }}></Paper>
      <CardContent>
       <Typography style={{ color: '#439be2', fontSize: '18px', textAlign: 'center' }}>Total recovered </Typography>
      </CardContent>
     </Card>
    </Grid>
   </Grid>
  </div>
 );
};

export default InformationCard;
