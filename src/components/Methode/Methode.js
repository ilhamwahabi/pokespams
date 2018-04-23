import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

import Pattern from "../Pattern/Pattern"
import Filter from "../Filter/Filter"

import "./Methode.css";
export default class Methode extends React.Component {
  filteredText = [
    { id: 3, text: "Dijual barang ini" },
    { id: 2, text: "Dibutuhkan tenaga kerja"},
    { id: 1, text: "Tidak perlu test"}
  ]

  constructor(props){
    super(props);

    const textArr = this.filteredText.map((el) => el.text)
    localStorage.setItem("method", 0);    
    localStorage.setItem("text", JSON.stringify(textArr.join(',')));    
  }

  addItem = (newText) => {
    var newId; 
    if (this.filteredText[0]){
      // newId = this.filteredText[this.filteredText.length - 1].id + 1;
      const newArr = this.filteredText.map((el) => el.id)
      newId = Math.max.apply( Math, newArr) + 1;
    } else {
      newId = 1;
    }
    // console.log(newId);
    this.filteredText.unshift({id: newId, text: newText});

    const textArr = this.filteredText.map((el) => el.text)
    localStorage.setItem("text", JSON.stringify(textArr.join(',')));    

    this.forceUpdate();
  }

  deleteItem = (id) => {
    this.filteredText = this.filteredText.filter((el) => el.id !== id);

    const textArr = this.filteredText.map((el) => el.text)
    localStorage.setItem("text", JSON.stringify(textArr.join(',')));    

    this.forceUpdate();
  }

  changeMethod = (value) => {
    // console.log(value)
    localStorage.setItem("method", value);
  }

  render(){
    return (
      <section id="methode">
        <Tabs
          onChange={this.changeMethod}
        >
          <Tab
            value={0}
            icon={<FontIcon className="material-icons">view_day</FontIcon>}
            label="KMP"
          >
            <Pattern onAdd={this.addItem} />
            <Filter onDelete={this.deleteItem} text={this.filteredText} />
          </Tab>
          <Tab
            value={1}
            icon={<FontIcon className="material-icons">local_drink</FontIcon>}
            label="BM"
          >
            <Pattern onAdd={this.addItem} />
            <Filter onDelete={this.deleteItem} text={this.filteredText} />
          </Tab>
          <Tab
            value={2}
            icon={<FontIcon className="material-icons">code</FontIcon>}
            label="REGEX"
          >
            <Pattern onAdd={this.addItem} />
            <Filter onDelete={this.deleteItem} text={this.filteredText} />
          </Tab>
        </Tabs>
      </section>
    )
  }
}