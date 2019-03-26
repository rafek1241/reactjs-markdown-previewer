import React, { Component, Props } from "react";
import "./App.scss";
import ReactHtmlParser from 'react-html-parser';


const marked = require("../node_modules/marked/lib/marked.js");

class App extends Component<{}, { document: string }> {
  constructor(props: any) {
    super(props);

    this.state = {
      document:
        "# Welcome to my React Markdown Previewer!\r\n\r\n## This is a sub-heading...\r\n### And here's some other cool stuff:\r\n  \r\nHeres some code, `<div></div>`, between 2 backticks.\r\n\r\n```\r\n// this is multi-line code:\r\n\r\nfunction anotherExample(firstLine, lastLine) {\r\n  if (firstLine == '```' && lastLine == '```') {\r\n    return multiLineCode;\r\n  }\r\n}\r\n```\r\n  \r\nYou can also make text **bold**... whoa!\r\nOr _italic_.\r\nOr... wait for it... **_both!_**\r\nAnd feel free to go crazy ~~crossing stuff out~~.\r\n\r\nThere's also [links](https://www.freecodecamp.com), and\r\n> Block Quotes!\r\n\r\nAnd if you want to get really crazy, even tables:\r\n\r\nWild Header | Crazy Header | Another Header?\r\n------------ | ------------- | ------------- \r\nYour content can | be here, and it | can be here....\r\nAnd here. | Okay. | I think we get it.\r\n\r\n- And of course there are lists.\r\n  - Some are bulleted.\r\n     - With different indentation levels.\r\n        - That look like this.\r\n\r\n\r\n1. And there are numbererd lists too.\r\n1. Use just 1s if you want! \r\n1. But the list goes on...\r\n- Even if you use dashes or asterisks.\r\n* And last but not least, let's not forget embedded images:\r\n\r\n![React Logo w/ Text](https://goo.gl/Umyytc)\r\n"
    };

    this.updateDocumentValue = this.updateDocumentValue.bind(this);
  }

  updateDocumentValue(event: any) {
    this.setState({
      document: event.target.value
    });
  }

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
                  value={this.state.document}
                  onChange={this.updateDocumentValue}
                />
              </div>
            </div>
            <div className="col">
              <div className="row section-header-bar">Preview</div>
              <div className="row pl-1 section">
                <div id="preview">
                  {ReactHtmlParser(marked(this.state.document))}
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
