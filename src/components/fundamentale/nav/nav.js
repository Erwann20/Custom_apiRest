import React, {Component, useState} from 'react';
import './nav.sass'
import { Button } from '@material-ui/core';
import { Route, BrowserRouter } from 'react-router-dom';
import Custom from '../../page/custom/custom'
import Upload from '../../page/update/update'
import Axios from 'axios';

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as navActions from "../../store/nav/actions";
export default function Nav() {
  const [listeSchemajson, setListeSchemajson] = useState()
  const [isOpen, setIsOpen] = useState(false)
    let htmlList = []


    function giveJsonName() {
      let listeSchema = []

      if (isOpen === true) {
        setIsOpen(false)
        setListeSchemajson("")
      } else {
        setIsOpen(true)
            Axios.get(`http://localhost:8080/getNameSchema`)
              .then(res => {
                const json = res.data.schemajson
                const listJson = json.map((jsonFile) => 
                listeSchema.push(jsonFile.name)
                
                );
                listeSchema.map((fileName) => 
                htmlList.push(
                    <div>
                      <a target="_blank" href={"http://localhost:8080/"+fileName}>{fileName}</a><br></br>
                    </div>
                    )
                )
                setListeSchemajson(htmlList)
                
              }
          ).catch( function(error) {
            console.log(error)  
            return (
              setListeSchemajson("toto")
            )
            
          })
      }

      

  }

      return (
        <BrowserRouter>
          <div className="navbar" >
            <div class="nav-center">
              <div class="nav-item">
                  <a href="/home"><Button variant="contained" color="primary">
                    Home
                  </Button></a>
              </div>
              
              <div class="nav-item">
                  <a href="/custom"><Button variant="contained" color="primary">
                    Custom
                  </Button></a>
              </div>
              <div class="nav-item">
                  <a href="/upload"><Button variant="contained" color="primary">
                    Upload
                  </Button></a>
              </div>
              <div class="nav-item">
                  <Button variant="contained" color="primary" onClick={() => giveJsonName()}>
                    View API
                  </Button>
              </div>
    
            </div>
            <div class="modal-nameJson">
              {listeSchemajson}
            </div>
          </div>
         
          <div className="main-route-place">
            <Route exact path="/custom" component={Custom} />
            <Route exact path="/upload" component={Upload} />
          </div>
        </BrowserRouter>
      )
      
    
  }
// export default connect(
//     ({ nav }) => ({ ...nav }),
//     dispatch => bindActionCreators({ ...navActions }, dispatch)
//   )( nav );