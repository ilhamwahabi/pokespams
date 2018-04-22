import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import "./Header.css"

const AppBarExampleIcon = () => (
  <header id="header">
    <AppBar
      title="PokeSpams"
      iconElementRight={<FlatButton label="Poke" />}
    />
  </header>
);

export default AppBarExampleIcon;