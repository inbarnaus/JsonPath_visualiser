import React, {useState} from 'react';
import { FileSelector } from 'react-rainbow-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FileSelect.css';
// import jsonPath from 'JSONPath';
var jp = require('JSONPath');

const containerStyles = {
  maxWidth: 300
}

export default function FileSelect(props){
    const [json, setJson] = useState('');

    function onFileChange (event) {
      setJson('');
      props.handleTree({});
      document.getElementById('message').innerHTML="";
      if(event.length !== 0){
        var reader = new FileReader();
            reader.onload = onReaderLoad;
            reader.readAsText(event[0]);
      }
    };
    function onReaderLoad(event){
      try {
        var obj = JSON.parse(event.target.result);
        var cities = [
          { name: "London", "population": 8615246 },
          { name: "Berlin", "population": 3517424 },
          { name: "Madrid", "population": 3165235 },
          { name: "Rome",   "population": 2870528 }
        ];
        var names = jp(cities, '$..name').toJSONString();
        console.log(names)
        setJson(obj)
        props.handleTree(obj);
      } catch (e) {
        console.log(e)
        document.getElementById('message').innerHTML="<b>upload valid json file</b>";
      }
  }
  
    return (
      <div>
        <div className="bar"></div>
        <div className="box">
          <FileSelector
            id="file_selector"
            className="form"
            style={containerStyles}
            label="Upload Json file"
            placeholder="Drag & Drop or Click to Browse"
            // bottomHelpText="Select only one file"
            onChange={onFileChange}
          />
          <div id="message" className="form" style={{color: "red"}}></div>
        </div>
        
      </div>
    )
}