import React, {Component, useState} from 'react';
import './update.sass'
import Axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as updateActions from "../../store/update/actions";
export default function Update() {
    let fileReader
    const [ file, setFile ] = useState()
    const [ fileName, setFileName ]= useState()
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
      function upload() {
   
        let jsonUpload = {
           'name': fileName,
           'json': JSON.parse(file)
        }
        console.log(jsonUpload)
        // Axios.post('http://localhost:8080/template', {jsonUpload}).then(res => {
        //   console.log(res)
        // })
        Axios.put('http://localhost:8080/create', { jsonUpload } ).then(resp => {

            console.log(resp.data);
        }).catch(error => {

            console.log(error);
        });  

      }

      const handleFileRead = (e) => {
          const content = fileReader.result
          setFile(content)
      }

      function handleFileChoose(file) {
        setFileName(file.name)

        fileReader = new FileReader()
        fileReader.onloadend = handleFileRead
        fileReader.readAsText(file)

      }

      return (
        <div className="component-update">
          <input type="file" onChange={ e => handleFileChoose(e.target.files[0]) } name="fileupload"  id="fileupload"></input><br></br>
          <label for="fileupload"> Select a file to upload</label>
          <input type="submit" onClick={() => upload() }></input>
        </div>
      )
  }
  
// export default connect(
//     ({ update }) => ({ ...update }),
//     dispatch => bindActionCreators({ ...updateActions }, dispatch)
//   )( update );