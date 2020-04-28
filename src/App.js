import './App.module.css';
import { Chart, InformationCard, City } from './components/index'
import styles from './App.module.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestDataCovid, requestDataCountries } from './actions/index'
import { bindActionCreators } from "redux";
import { Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import moment from 'moment';


class App extends Component {
  state = {
    nameCountries: []
  }
  componentDidMount() {
    this.props.requestDataCovid()
    this.props.requestDataCountries()


  }
  render() {
    const { data } = this.props
    return (
      data ? (
        <div className={styles.container} >
          <Typography variant="h2" align="center" style={{ color: 'white' }}> Covid-19 -- nmtdev -- </Typography>
          <Typography style={{ color: 'white', textAlign: "center", marginBottom: '24px' }}>Last updated: {moment(data.lastUpdate).format('dddd-Mo-MM-YYYY')} </Typography>
          <InformationCard data={data} />
          <Chart />
          <City />
        </div >
      ) : <Skeleton animation="wave"> </Skeleton>
    )
  }
}

const mapStateToProps = state => ({ data: state.data.dataCorona });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestDataCovid, requestDataCountries }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)

