import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import axios from 'axios';

import "./Header.css"

const Header = ({ getResponse }) => {
   const onPoke = () => {
    const patterns = 
      JSON.parse(localStorage.getItem("text")) ? 
      JSON.parse(localStorage.getItem("text")) : "none";

    var method;
    if (localStorage.getItem('method') === "0") {
      method = "kmp"
    } else if (localStorage.getItem('method') === "1") {
      method = "bym"
    } else if (localStorage.getItem('method') === "2") {
      method = "regex"
    }

    axios.get(`http://localhost:51503/api/search?method=${method}&patterns=${patterns}`, {})
      .then((res) => {
        console.log(res.data);
        getResponse(res.data)
      })
      .catch(e => {
        getResponse([["Sorry, server not deployed yet :(", "-", "-"]])
      })
  }

  return (
    <header id="header">
      <AppBar
        title="PokeSpams"
        iconElementLeft={<IconButton><Search /></IconButton>}
        iconElementRight={<FlatButton onClick={onPoke} label="Poke" />}
      />
    </header>
  )
}

export default Header