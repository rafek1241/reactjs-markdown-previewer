import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
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
        <div className="container-fluid editor-and-preview-container">
          <div className="row">
            <div className="col">
              <div className="row section-header-bar">Editor</div>
              <div className="row pr-1 section">
                <textarea
                  className="form-control"
                  id="editor"
                  placeholder="Type here your document code"
                />
              </div>
            </div>
            <div className="col">
              <div className="row section-header-bar">Preview</div>
              <div className="row pl-1 section">
                <div id="preview">
                  There will be view of the parsed document that you passed to the left side of the screen.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
