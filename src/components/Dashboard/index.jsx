import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import TotalConfirmed from './TotalConfirmed';
import TotalRecovered from './TotalRecovered';
import TotalDeaths from './TotalDeaths';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestDataCovid, requestDataCountry, requestDataCountries } from '../../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import MapChart from '../Map';
import CountryPicker from '../Dashboard/CountryPicker';
const useStyles = makeStyles((theme) => ({
 root: {
  padding: theme.spacing(4),
 },
}));

const Dashboard = (props) => {
 console.log('Dashboard -> props', props);
 const classes = useStyles();
 const [dataCovid, setDataCovid] = useState('');
 const dispatch = useDispatch();
 useEffect(() => {
  const fetchAPI = async () => {
   if (!dataCovid) {
    let totalDataCovid = await dispatch(requestDataCountries());
   }
  };
  fetchAPI();
 }, [dispatch]);

 return (
  <div className={classes.root}>
   <Grid container spacing={4} alignItems="center">
    <Grid item lg={4} sm={6} xl={3} xs={12}>
     <TotalConfirmed />
    </Grid>
    <Grid item lg={4} sm={6} xl={3} xs={12}>
     <TotalRecovered />
    </Grid>
    <Grid item lg={4} sm={6} xl={3} xs={12}>
     <TotalDeaths />
    </Grid>
    <Grid item lg={12} sm={12} xl={12}>
     <CountryPicker />
    </Grid>
   </Grid>
  </div>
 );
};

const mapStateToProps = (state) => ({ dataCorona: state.data.dataCorona, dataTable: state.data.dataCountries });
const mapDispatchToProps = (dispatch) => bindActionCreators({ requestDataCovid, requestDataCountry }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
