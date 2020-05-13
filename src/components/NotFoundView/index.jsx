import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
 content: {
  paddingTop: 150,
  textAlign: 'center',
 },
 image: {
  marginTop: 50,
  display: 'inline-block',
  maxWidth: '100%',
  width: 560,
 },
}));

const NotFoundView = () => {
 const classes = useStyles();

 return (
  <div>
   <Grid container justify="center" spacing={4}>
    <Grid item lg={6} xs={12}>
     <div className={classes.content}>
      <Typography variant="h1" style={{ color: 'white' }}>
       404: The page you are looking for isn’t here
      </Typography>
      <Typography variant="subtitle2" style={{ color: 'white' }}>
       You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation
      </Typography>
     </div>
    </Grid>
   </Grid>
  </div>
 );
};

export default NotFoundView;
