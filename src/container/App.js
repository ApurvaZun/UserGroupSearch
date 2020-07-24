import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "../components/Header/header";
import Appcard from "../components/AppCard/appCard";

function getParams(location) {
  const searchParams = new URLSearchParams(location.search);
  return {
    query: searchParams.get("query") || ""
  };
}

class App extends Component {
  render() {
    const { history, location } = this.props;
    const { query } = getParams(location);

    return (
      <div>
        <Header history={history} />
        <Appcard title="Appointment Set" query={query} />
      </div>
    );
  }
}

export default App;
