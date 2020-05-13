import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import TotalConfirmed from './TotalConfirmed';
import TotalRecovered from './TotalRecovered';
import TotalDeaths from './TotalDeaths';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestDataCovid, requestDataCountries } from '../../actions/index';
const useStyles = makeStyles((theme) => ({
 root: {
  padding: theme.spacing(4),
 },
}));

const getMuiTheme = () =>
 createMuiTheme({
  overrides: {
   MUIDataTableToolbar: {
    root: {
     backgroundColor: '#1C1C1D',
     color: 'white',
    },
   },
   MuiTablePagination: {
    root: {
     backgroundColor: '#1C1C1D',
     color: 'white',
    },
   },
   MUIDataTableBodyCell: {
    root: {
     backgroundColor: '#1C1C1D',
     color: 'white',
    },
   },
  },
 });

const formatNumber = (value) => {
 const nf = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
 });

 return nf.format(value);
};
const columns = [
 {
  name: 'combinedKey',
  label: 'City',
  options: {
   setCellHeaderProps: (value) => ({ style: { backgroundColor: '#1C1C1D', color: 'white', fontWeight: 'bold', fontSize: '18px' } }),
   setCellProps: (value) => ({ style: { fontWeight: 'bold', fontSize: '16px' } }),
  },
 },
 {
  name: 'confirmed',
  label: 'Total confirmed',
  options: {
   setCellHeaderProps: (value) => ({ style: { backgroundColor: '#1C1C1D', color: '#00b065', fontWeight: 'bold', fontSize: '18px' } }),
   setCellProps: (value) => ({ style: { color: '#00b065', fontWeight: 'bold', fontSize: '16px' } }),
   customBodyRender: (value) => formatNumber(value),
  },
 },
 {
  name: 'deaths',
  label: 'Total deaths',
  options: {
   setCellHeaderProps: (value) => ({ style: { backgroundColor: '#1C1C1D', color: '#d63144', fontWeight: 'bold', fontSize: '18px' } }),
   setCellProps: (value) => ({ style: { color: '#d63144', fontWeight: 'bold', fontSize: '16px' } }),
   customBodyRender: (value) => formatNumber(value),
  },
 },
 {
  name: 'recovered',
  label: 'Total recovered',
  options: {
   setCellHeaderProps: (value) => ({ style: { backgroundColor: '#1C1C1D', color: '#439be2', fontWeight: 'bold', fontSize: '18px' } }),
   setCellProps: (value) => ({ style: { color: '#439be2', fontWeight: 'bold', fontSize: '16px' } }),
   customBodyRender: (value) => formatNumber(value),
  },
 },
];
const Dashboard = () => {
 const classes = useStyles();

 return (
  <div className={classes.root}>
   <Grid container spacing={4}>
    <Grid item lg={3} sm={6} xl={3} xs={12}>
     <TotalConfirmed />
    </Grid>
    <Grid item lg={3} sm={6} xl={3} xs={12}>
     <TotalRecovered />
    </Grid>
    <Grid item lg={3} sm={6} xl={3} xs={12}>
     <TotalDeaths />
    </Grid>
    <Grid item lg={3} sm={6} xl={3} xs={12}></Grid>
    <Grid item lg={12} sm={12} xl={12}>
     <MuiThemeProvider theme={getMuiTheme()}>
      <MUIDataTable title={null} columns={columns} options={{ selectableRows: 'none', filter: false, responsive: 'scrollFullHeight' }} />
     </MuiThemeProvider>
    </Grid>
   </Grid>
  </div>
 );
};

const mapStateToProps = (state) => ({ dataCorona: state.data.dataCorona, dataTable: state.data.dataCountries });
const mapDispatchToProps = (dispatch) => bindActionCreators({ requestDataCovid, requestDataCountries }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
