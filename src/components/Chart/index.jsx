import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestDataCovid, requestDataCountry } from '../../actions/index';
const Chart = (props) => {
 //  React.useEffect(() => {
 //   const { dataChart } = props.location.state;
 //   console.log('Chart -> dataChart', dataChart);
 //  }, []);

 const formatNumber = (value) => {
  const nf = new Intl.NumberFormat('en-US', {
   minimumFractionDigits: 0,
   maximumFractionDigits: 2,
  });

  return nf.format(value);
 };
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
 ];
 return (
  <Card>
   <MuiThemeProvider theme={getMuiTheme()}>
    <MUIDataTable title={null} columns={columns} options={{ selectableRows: 'none', filter: false, responsive: 'scrollFullHeight' }} />
   </MuiThemeProvider>
  </Card>
 );
};
const mapStateToProps = (state) => ({ dataCorona: state.data.dataCorona, dataTable: state.data.dataCountries });
const mapDispatchToProps = (dispatch) => bindActionCreators({ requestDataCovid, requestDataCountry }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Chart);
