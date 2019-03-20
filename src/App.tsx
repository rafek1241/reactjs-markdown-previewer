import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="row">Lorem ipsum dolor sit.</div>
            </div>
            <div className="col">
              <div className="row">Lorem ipsum dolor sit.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
