import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import TotalConfirmed from './TotalConfirmed';
import TotalRecovered from './TotalRecovered';
import TotalDeaths from './TotalDeaths';
import { requestDataCountries, requestDataCovidMap } from '../../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import Chart from './Chart';
import Map from './Map';
import CountryPicker from '../Dashboard/CountryPicker';
import _ from 'lodash';
import ReactTooltip from 'react-tooltip';
const useStyles = makeStyles((theme) => ({
 root: {
  padding: theme.spacing(4),
 },
}));

const Dashboard = (props) => {
 const dataCorona = useSelector((state) => state.data.dataCountries);
 const dataMap = useSelector((state) => state.data.dataMap);
 const classes = useStyles();
 const dispatch = useDispatch();
 useEffect(() => {
  const fetchAPI = async () => {
   if (!dataCorona) {
    await dispatch(requestDataCountries());
    await dispatch(requestDataCovidMap());
   }
  };
  fetchAPI();
 }, [dispatch]);
 const [content, setContent] = useState('');
 return (
  dataCorona !== undefined && (
   <div className={classes.root}>
    <Grid container spacing={4} alignItems="center">
     <Grid item lg={4} sm={6} xl={3} xs={12}>
      <TotalConfirmed confirmed={dataCorona.confirmed.value} lastUpdate={dataCorona.lastUpdate} />
     </Grid>
     <Grid item lg={4} sm={6} xl={3} xs={12}>
      <TotalRecovered recovered={dataCorona.recovered.value} lastUpdate={dataCorona.lastUpdate} />
     </Grid>
     <Grid item lg={4} sm={6} xl={3} xs={12}>
      <TotalDeaths deaths={dataCorona.deaths.value} lastUpdate={dataCorona.lastUpdate} />
     </Grid>
     <Grid item lg={12} sm={12} xl={12}>
      <CountryPicker />
     </Grid>
     <Grid item lg={12} sm={12} xl={12} xs={12}>
      <Chart dataChart={dataCorona} />
     </Grid>
    </Grid>
   </div>
  )
 );
};
export default Dashboard;
