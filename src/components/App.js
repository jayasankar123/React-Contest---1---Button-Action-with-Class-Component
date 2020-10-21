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
        <button onClick={() => this.setState({ clicked: true })}>
          CLICK TO SEE PARA
        </button>
        {this.state.clicked
          ? "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
          : ""}
      </div>
    );
  }
}

export default App;
