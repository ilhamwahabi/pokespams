import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

class App extends Component {
  state = {
    response: []
  }

  handleResponse = (data) => {
    this.setState({ response: data })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header getResponse={this.handleResponse} />
          <Content responseData={this.state.response} />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;