import './App.module.css';
import { Chart, InformationCard, City } from './components/index'
import styles from './App.module.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestDataCovid } from './actions/index'
import { bindActionCreators } from "redux";
import { Typography } from '@material-ui/core';


class App extends Component {

  componentDidMount() {
    this.props.requestDataCovid()
  }
  render() {
    const { data } = this.props
    console.log("App -> render -> data", data)
    return (
      <div className={styles.container}>
        <Typography variant="h2" align="center" style={{ color: 'white' }}> Covid-19 -- nmtdev -- </Typography> <br />
        <InformationCard data={data} />
        <Chart />
        <City />
      </div>

    )
  }
}

const mapStateToProps = state => ({ data: state.data.dataCorona });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestDataCovid }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)

