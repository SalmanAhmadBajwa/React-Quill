import React from "react";
import ReactDOM from "react-dom";

import Editor from "./Editor/Editor";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Editor value="Type Something .." />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);