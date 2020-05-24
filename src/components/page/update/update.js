import React, {useState} from 'react';
import './update.sass'
import Axios from 'axios';
import { Button } from '@material-ui/core';
import FormTitle from '../../fundamentale/formTitle';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as updateActions from "../../store/update/actions";
export default function Update() {
    let fileReader
    const path = require('path');
    const [ file, setFile ] = useState()
    const [ fileName, setFileName ]= useState()
    const [alertUpload, setAlertUpload] = useState()
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
          let link = "http://localhost:8080/"+ path.basename(fileName,'.json')

          let textAlertSuccess = (
            <div class="alert">
                <p>Vous pouvez accéder à votre api: <a target="_blank" rel="noopener noreferrer" href={link} >{link}</a></p>
            </div>
          )
          setAlertUpload(textAlertSuccess)
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
          <FormTitle text="Select a file to upload :"/><br></br><br></br>
          <input type="file" onChange={ e => handleFileChoose(e.target.files[0]) } name="fileupload"  id="fileupload"></input><br></br><br></br>
          <Button variant="contained" color="primary"  onClick={() => upload() }>Upload</Button>
          {alertUpload}
        </div>
      )
  }
  
// export default connect(
//     ({ update }) => ({ ...update }),
//     dispatch => bindActionCreators({ ...updateActions }, dispatch)
//   )( update );