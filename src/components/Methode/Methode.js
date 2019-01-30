import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

import Pattern from "../Pattern/Pattern"
import Filter from "../Filter/Filter"

import "./Methode.css";
export default class Methode extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      filteredText: [
        { id: 3, text: "Dijual barang ini" },
        { id: 2, text: "Dibutuhkan tenaga kerja"},
        { id: 1, text: "Tidak perlu test"}
      ]
    }

    const textArr = this.state.filteredText.map((el) => el.text)
    localStorage.setItem("method", 0);    
    localStorage.setItem("text", JSON.stringify(textArr.join(',')));    
  }

  addItem = (newText) => {
    var newId; 
    if (this.state.filteredText[0]){
      newId = this.state.filteredText[0].id + 1
    } else {
      newId = 1;
    }
    var newWord = {id: newId, text: newText}

    this.setState(prevState => {
      return {
        filteredText: [].concat(newWord, prevState.filteredText)
      }
    })

    const textArr = this.state.filteredText.map((el) => el.text)
    localStorage.setItem("text", JSON.stringify(textArr.join(',')));    
  }

  deleteItem = (id) => {
    this.setState(prevState => {
      return {
        filteredText: prevState.filteredText.filter((el) => el.id !== id)
      }
    })

    const textArr = this.state.filteredText.map((el) => el.text)
    localStorage.setItem("text", JSON.stringify(textArr.join(',')));    
  }

  changeMethod = (value) => {
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
            <Filter onDelete={this.deleteItem} text={this.state.filteredText} />
          </Tab>
          <Tab
            value={1}
            icon={<FontIcon className="material-icons">local_drink</FontIcon>}
            label="BM"
          >
            <Pattern onAdd={this.addItem} />
            <Filter onDelete={this.deleteItem} text={this.state.filteredText} />
          </Tab>
          <Tab
            value={2}
            icon={<FontIcon className="material-icons">code</FontIcon>}
            label="REGEX"
          >
            <Pattern onAdd={this.addItem} />
            <Filter onDelete={this.deleteItem} text={this.state.filteredText} />
          </Tab>
        </Tabs>
      </section>
    )
  }
}