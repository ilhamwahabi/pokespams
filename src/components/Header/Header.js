import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import axios from 'axios';

import "./Header.css"

export default class AppBarExampleIcon extends React.Component {
  onPoke = () => {
    const patterns = JSON.parse(localStorage.getItem("text")) ? JSON.parse(localStorage.getItem("text")) : "none";
    const query = "test";
    const lang = "id";
    const count = "100";

    var method;
    if (localStorage.getItem('method') === "0") {
      method = "kmp"
    } else if (localStorage.getItem('method') === "1") {
      method = "bym"
    } else if (localStorage.getItem('method') === "2") {
      method = "regex"
    }

    axios.get(`http://localhost:51503/api/search?
      method=${method}&patterns=${patterns}&query=${query}&lang=${lang}&count=${count}`, {})
    .then((res) => {
      this.props.getResponse(res.data)
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