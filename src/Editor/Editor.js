import React from "react";
import ReactQuill from "react-quill";

import { formats, modules } from "./config.js";

import "react-quill/dist/quill.snow.css";
import * as quillToWord from 'quill-to-word';
import './Editor.css';

import { saveAs } from 'file-saver';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.value || "",
      counter: null,
      contents : "",
    }; // You can also pass a Quill Delta here
    this.modules = modules({ onCount: this.onCount });
  }

  onCount = value => {
    this.setState({ counter: value });
  };

  exportFunctionDoc = async() => {
    var delta = this.state.contents

  };

  exportFunction = async () => {
    var delta = this.state.contents // gets the Quill delta
    console.log(delta);
    const quillToWordConfig = {
      exportAs: 'blob'
  };

    const docAsBlob = await quillToWord.generateWord(delta, quillToWordConfig);// converts to PDF
    saveAs(docAsBlob, 'CC_2.0.docx'); // downloads from the browser
    
  }

  handleChange = (value, delta, source, editor) => {
    this.setState({ text: value });
    // console.log(editor.getContents());
    // console.log(delta);
    this.setState({contents : editor.getContents()});
    
  };

  render() {
    return (
      <div>
        <div className="Menu-Bar">

        <button 
        className="btn-download" 
        onClick={this.exportFunction}> 
        Download
        </button>

        </div>
      
        <ReactQuill
          value={this.state.text}
          onChange={this.handleChange}
          formats={formats}
          modules={this.modules}
        />
        {this.state.counter}
      </div>
    );
  }
}

export default Editor;