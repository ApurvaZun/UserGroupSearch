import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Appcard from "./appCard";

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Appcard title="Appointment Set" />
      </div>
    );
  }
}

export default App;
