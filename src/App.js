import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
class App extends Component {
  constructor(props){
    super(props);
    this.state = { response: [] }
  }

  handleResponse = (data) => {
    // console.log(data);    
    this.setState({ response: data })
    // console.log("Yay, i got response")
    // console.log(this.state.response);    
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
