import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Sadhu", age: 23 },
      { name: "Casey", age: 23 },
      { name: "Jesus", age: 2020 },
    ],
    otherState: "Other INfo",
  };

  switchNameHandler = (newName) => {
    //console.log("Was Clicked");
    // Don't do this : this.state.persons[0].name = "GOD";
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: "Casey Robert Roman", age: 23 },
        { name: "GOD", age: 6000 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Sadhu", age: 23 },
        { name: event.target.value, age: 23 },
        { name: "Jesus", age: 6000 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is Really Working</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler("Sadhu Pittala!")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, "Sadhu The Greatest")}
        >
          {" "}
          My hobbies are turning Water into Wine
        </Person>
      </div>
    );
    // return React.createElement(
    //   "div",
    //  null,
    //   React.createElement("h1", null, "Does this work now??")
    //);
  }
}

export default App;
