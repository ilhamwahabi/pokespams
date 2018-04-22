import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import "./Pattern.css"
export default class Pattern extends React.Component {
  render(){
    return (
      <section id="pattern">
        <form className="pattern__form">
          <div className="pattern__form-control">
            <div className="pattern__form-text-input">
              <TextField
                hintText="Add new spam word"
                fullWidth={true}
              />
            </div>
            <div className="pattern__form-button">
              <RaisedButton
                label="ADD"
                primary={true}
                fullWidth={true}
              />
            </div>
          </div>
        </form>
      </section>
    )
  }
}