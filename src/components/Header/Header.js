import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';

import "./Header.css"

const AppBarExampleIcon = () => (
  <header id="header">
    <AppBar
      title="PokeSpams"
      iconElementLeft={<IconButton><Search /></IconButton>}
      iconElementRight={<FlatButton label="Poke" />}
    />
  </header>
);

export default AppBarExampleIcon;