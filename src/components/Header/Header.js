import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import axios from 'axios';

import "./Header.css"

export default class AppBarExampleIcon extends React.Component {
  onPoke(){
    const text = JSON.parse(localStorage.getItem("text"));
    console.log(text);
    axios.get('http://localhost:51503/api/search?method=bym&patterns=jual,beli,spam,tes', {

    })
    .then((res) => {
      console.log(res);
    })
  }

  render(){
    return (
      <header id="header">
        <AppBar
          title="PokeSpams"
          iconElementLeft={<IconButton><Search /></IconButton>}
          iconElementRight={<FlatButton onClick={this.onPoke} label="Poke" />}
        />
      </header>
    )
  }
}