import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import "./Pattern.css";

export default class Pattern extends React.Component {
  state = { inputValue: "" };

  handleChange = (event, value) => {
    this.setState({ inputValue: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.inputValue.trim() !== "") {
      this.props.onAdd(this.state.inputValue);
      this.setState({ inputValue: "" });
    }
  };

  render() {
    return (
      <section id="pattern">
        <form onSubmit={this.handleSubmit} className="pattern__form-control">
          <div className="pattern__form-text-input">
            <TextField
              hintText="Add new spam word"
              fullWidth={true}
              onChange={this.handleChange}
              value={this.state.inputValue}
            />
          </div>
          <div className="pattern__form-button">
            <RaisedButton
              label="ADD"
              primary={true}
              fullWidth={true}
              onClick={this.handleSubmit}
            />
          </div>
        </form>
      </section>
    );
  }
}
