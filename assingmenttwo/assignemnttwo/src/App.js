import React, { Component } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import "./App.css";

class App extends Component {
  state = {
    lengthOfString: "",
  };

  lengthChangeHandler = (event) => {
    this.setState({
      lengthOfString: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <ValidationComponent stringlength={this.state.lengthOfString.length} />

        <input
          type="text"
          onChange={this.lengthChangeHandler}
          value={this.state.lengthOfString}
        />
        <p>{this.state.lengthOfString.length}</p>
        <p>{this.state.lengthOfString}</p>
      </div>
    );
  }
}

export default App;
