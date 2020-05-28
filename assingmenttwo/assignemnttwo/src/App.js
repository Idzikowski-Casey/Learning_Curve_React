import React, { Component } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import "./App.css";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    lengthOfString: "",
  };

  lengthChangeHandler = (event) => {
    this.setState({
      lengthOfString: event.target.value,
    });
  };
  deleteListHandler = (index) => {
    const text = this.state.lengthOfString.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ lengthOfString: updatedText });
  };

  render() {
    const char = this.state.lengthOfString.split("").map((ch, index) => {
      return (
        <CharComponent
          click={() => this.deleteListHandler(index)}
          characters={ch}
          key={index}
        />
      );
    });
    return (
      <div>
        <ol>
          <li>
            Create an Input Field (In app Component) with a change listenener
            which outputs the entered text
          </li>
          <li>Create a new Component that recieves the text as a prop</li>
          <li>
            Inside this Component output if its too long or short depending upon
            the length of the text
          </li>
          <li>
            Create another Component with inline formatting, (display:
            inline-block, padding: 16px, text-align: center, margin: 16px,
            border: 1px solid black)
          </li>
          <li>
            Render a list of this Component where each recieves a different
            letter of the entered text as a prop
          </li>
          <li>
            When you click on this Component, it should be deleted from the page
          </li>
        </ol>

        <hr />

        <ValidationComponent stringlength={this.state.lengthOfString.length} />

        <input
          type="text"
          onChange={this.lengthChangeHandler}
          value={this.state.lengthOfString}
        />
        <p>{this.state.lengthOfString.length}</p>

        <br></br>
        <br></br>
        {char}
      </div>
    );
  }
}

export default App;
