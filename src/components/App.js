import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    return (
      <div id="main">
        <button id="click" onClick={() => this.setState({ clicked: true })}>
          CLICK TO SEE PARA
        </button>
        {this.state.clicked ? (
          <p id="para">
            "Hello, I've learnt to use the full-stack evaluation tool. This
            makes me so happy"
          </p>
        ) : (
          <p id="para">""</p>
        )}
      </div>
    );
  }
}

export default App;
