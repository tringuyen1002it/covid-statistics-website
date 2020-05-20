import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import { PeopleIcon } from '@material-ui/icons/PeopleOutlined';
import { Check } from '@material-ui/icons';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
 root: {
  height: '100%',
  backgroundColor: 'black',
 },
 content: {
  alignItems: 'center',
  display: 'flex',
 },
 title: {
  fontWeight: 500,
  color: '#00b065',
 },
 avatar: {
  backgroundColor: '#00b065',
  height: 56,
  width: 56,
 },
 icon: {
  height: 32,
  width: 32,
  color: '',
 },
 difference: {
  marginTop: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
 },
 differenceIcon: {
  color: theme.palette.success.dark,
 },
 differenceValue: {
  color: theme.palette.success.dark,
  marginRight: theme.spacing(1),
 },
 number: {
  color: '#00b065',
 },
}));

const TotalConfirmed = (props) => {
 const { className, confirmed, lastUpdate } = props;

 const classes = useStyles();

 return (
  <Card className={clsx(classes.root, className)}>
   <CardContent>
    <Grid container justify="space-between">
     <Grid item>
      <Typography className={classes.title} color="textSecondary" gutterBottom variant="body1">
       TOTAL CONFIRMED
      </Typography>
      <Typography variant="h4" className={classes.number}>
       <CountUp start={0} end={confirmed} duration={2} separator="," />
      </Typography>
     </Grid>
     <Grid item>
      <Avatar className={classes.avatar}>
       <Check className={classes.icon} />
      </Avatar>
     </Grid>
    </Grid>
   </CardContent>
  </Card>
 );
};

TotalConfirmed.propTypes = {
 className: PropTypes.string,
};

export default TotalConfirmed;
