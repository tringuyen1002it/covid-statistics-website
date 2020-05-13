import './App.module.css';
import React, { Component } from 'react'
import Routes from './Routes'
import { ThemeProvider } from '@material-ui/styles';

import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});
class App extends Component {

  render() {
    console.log("App -> render -> render")
    return (
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    )
  }
}

export default (App)

