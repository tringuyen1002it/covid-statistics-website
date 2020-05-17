import { Card, CardContent, Typography, Paper, Grid, Button } from '@material-ui/core';
import styles from './Card.module.css';
import CountUp from 'react-countup';
import React from 'react';
import MUIDataTable from 'mui-datatables';
import { connect } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { requestDataCovid, requestDataCountry } from '../../actions/index';
import { Skeleton } from '@material-ui/lab';
import { Link } from 'react-router-dom';
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
 {
  name: 'See Graph',
  label: 'See Graph',
  options: {
   setCellHeaderProps: (value) => ({ style: { backgroundColor: '#1C1C1D', color: '#439be2', fontWeight: 'bold', fontSize: '18px' } }),
   //    setCellProps: (value) => ({ style: { color: '#439be2', fontWeight: 'bold', fontSize: '16px' } } && <>{value === 'ABC'}</Button>),
   customBodyRender: (value, tableMeta, updateValue) => redirectLink(tableMeta),
  },
 },
];
const redirectLink = (tableMeta) => {
 return (
  <Link
   to={{
    pathname: '/chart',
    search: `?${tableMeta.rowData[0]}`,
    state: { dataChart: tableMeta.rowData },
   }}
  >
   <button>Edit</button>
  </Link>
 );
};
const formatNumber = (value) => {
 const nf = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
 });

 return nf.format(value);
};

class InformationCard extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   loading: true,
   array: [],
  };
 }
 componentDidMount() {
  console.log('InformationCard -> componentWillMount -> componentWillMount');
  this.props.requestDataCovid();
  this.props.requestDataCountry();
 }

 render() {
  console.log('InformationCard -> render -> render');
  const { dataCorona, dataTable } = this.props;
  return dataCorona && dataTable ? (
   <>
    <div className={styles.container}>
     <Grid container direction="row" alignItems="center" justify="center" spacing="3">
      <Grid item md={3}>
       <Card className={styles.card} style={{ backgroundColor: '#1c1c1d' }}>
        <Paper className={styles.paper} style={{ backgroundColor: '#00b065' }}></Paper>
        <CardContent>
         <Typography style={{ color: '#00b065', fontSize: '20px', textAlign: 'center' }}>Trí Chó Đẹp Trai Kute 9x Pro</Typography>
         <Typography style={{ color: '#00b065', fontSize: '16px', textAlign: 'center', fontWeight: 'bold' }}>
          <CountUp start={0} end={dataCorona.confirmed.value} duration={2} separator="," />
         </Typography>
        </CardContent>
       </Card>
      </Grid>
      <Grid item md={3}>
       <Card className={styles.card} style={{ backgroundColor: '#1c1c1d' }}>
        <Paper className={styles.paper} style={{ backgroundColor: '#d63144' }}></Paper>
        <CardContent>
         <Typography style={{ color: '#d63144', fontSize: '20px', textAlign: 'center' }}> Total Deaths </Typography>
         <Typography style={{ color: '#d63144', fontSize: '16px', textAlign: 'center', fontWeight: 'bold' }}>
          <CountUp start={0} end={dataCorona.deaths.value} duration={2} separator="," />
         </Typography>
        </CardContent>
       </Card>
      </Grid>
      <Grid item md={3}>
       <Card className={styles.card} style={{ backgroundColor: '#1c1c1d' }}>
        <Paper className={styles.paper} style={{ backgroundColor: '#439be2' }}></Paper>
        <CardContent>
         <Typography style={{ color: '#439be2', fontSize: '20px', textAlign: 'center' }}>Total recovered </Typography>
         <Typography style={{ color: '#439be2', fontSize: '16px', textAlign: 'center', fontWeight: 'bold' }}>
          <CountUp start={0} end={dataCorona.recovered.value} duration={2} separator="," />
         </Typography>
        </CardContent>
       </Card>
      </Grid>
     </Grid>
    </div>
    <div className={styles.table}>
     <MuiThemeProvider theme={getMuiTheme()}>
      <MUIDataTable title={null} data={dataTable} columns={columns} options={{ selectableRows: 'none', filter: false, responsive: 'scrollFullHeight' }} />
     </MuiThemeProvider>
    </div>
   </>
  ) : (
   <Skeleton />
  );
 }
}

const mapStateToProps = (state) => ({ dataCorona: state.data.dataCorona, dataTable: state.data.dataCountries });
const mapDispatchToProps = (dispatch) => bindActionCreators({ requestDataCovid, requestDataCountry }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(InformationCard);
