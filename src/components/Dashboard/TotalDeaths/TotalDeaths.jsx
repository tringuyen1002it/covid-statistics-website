import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';

const useStyles = makeStyles((theme) => ({
 root: {
  height: '100%',
  backgroundColor: '#1c1c1d',
 },
 content: {
  alignItems: 'center',
  display: 'flex',
 },
 title: {
  fontWeight: 500,
  color: 'white',
 },
 avatar: {
  backgroundColor: theme.palette.success.main,
  height: 56,
  width: 56,
 },
 icon: {
  height: 32,
  width: 32,
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
  color: 'white',
 },
}));

const TotalDeaths = (props) => {
 const { className, ...rest } = props;

 const classes = useStyles();

 return (
  <Card {...rest} className={clsx(classes.root, className)}>
   <CardContent>
    <Grid container justify="space-between">
     <Grid item>
      <Typography className={classes.title} color="textSecondary" gutterBottom variant="body1">
       TOTAL DEATHS
      </Typography>
      <Typography variant="h4" className={classes.number}>
       1,600
      </Typography>
     </Grid>
     <Grid item>
      <Avatar className={classes.avatar}>
       <PeopleIcon className={classes.icon} />
      </Avatar>
     </Grid>
    </Grid>
   </CardContent>
  </Card>
 );
};

TotalDeaths.propTypes = {
 className: PropTypes.string,
};

export default TotalDeaths;
