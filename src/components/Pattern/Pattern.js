import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import "./Pattern.css"
export default class Pattern extends React.Component {
  inputValue = "";

  handleClick = () =>{
    if (this.inputValue.trim() !== ""){
      this.props.onAdd(this.inputValue);
    }
  }

  render(){
    return (
      <section id="pattern">
        <div className="pattern__form-control">
          <div className="pattern__form-text-input">
            <TextField
              hintText="Add new spam word"
              fullWidth={true}
              onChange={(e, v) => {
                this.inputValue = v;
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter'){
                  this.handleClick();
                  e.target.value = "";
                }
              }}
            />
          </div>
          <div className="pattern__form-button">
            <RaisedButton
              label="ADD"
              primary={true}
              fullWidth={true}
              onClick={this.handleClick}
            />
          </div>
        </div>
      </section>
    )
  }
}