import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const AppBarExampleIcon = () => (
  <AppBar
    title="PokeSpams"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    iconElementRight={<FlatButton label="Poke" />}
  />
);

export default AppBarExampleIcon;