import "./App.css";
import React, { Component } from "react";
import Movies from "./component/movies";

class App extends Component {
  render() {
    return (
      <main className="container-fluid pl-0 pr-0 ">
        <Movies />
        
      </main>
    );
  }
}

export default App;
