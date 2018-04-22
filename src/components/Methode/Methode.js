import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

import Pattern from "../Pattern/Pattern"
import Filter from "../Filter/Filter"

export default class Methode extends React.Component {
  filteredText = [
    "Dijual barang ini",
    "Dibutuhkan tenaga kerja",
    "Tidak perlu test"
  ]

  filteredPattern = [
    "Dijual barang ini",
    "Dibutuhkan tenaga kerja",
    "Tidak perlu test"
  ]

  addItem = (newText) => {
    this.filteredText.push(newText);
    this.forceUpdate();
  }
  
  render(){
    return (
      <section>
        <Tabs>
          <Tab
            icon={<FontIcon className="material-icons">view_day</FontIcon>}
            label="Knuth-Morris-Pratt"
          >
            <Pattern onAdd={this.addItem} />
            <Filter text={this.filteredText} />
          </Tab>
          <Tab
            icon={<FontIcon className="material-icons">local_drink</FontIcon>}
            label="Boyer-Moore"
          >
            <Pattern onAdd={this.addItem} />
            <Filter text={this.filteredText} />
          </Tab>
          <Tab
          icon={<FontIcon className="material-icons">code</FontIcon>}
          label="Regular Expression"
          >
            <Pattern onAdd={this.addItem} />
            <Filter text={this.filteredPattern} />
          </Tab>
        </Tabs>
      </section>
    )
  }
}