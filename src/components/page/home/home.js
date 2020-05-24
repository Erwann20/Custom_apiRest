import React, { useState, useEffect } from 'react';
import './home.scss'
import Nav from '../../fundamentale/nav/nav'
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as homeActions from "../../store/home/actions";
export default function Home(props) {
    
    const [listeSchemajson, setListeSchemajson] = useState()
    let listeSchema = []
    let htmlList = []
    useEffect(() => {

    })
     

    function giveJsonName() {
          Axios.get(`http://localhost:8080/getNameSchema`)
          .then(res => {
            const json = res.data.schemajson
            const listJson = json.map((jsonFile) => 
            listeSchema.push(jsonFile.name)
            
            );
            listeSchema.map((fileName) => 
            htmlList.push(
                <div>
                  <a href={"http://localhost:8080/"+fileName}>{fileName}</a><br></br>
                </div>
                )
            )
            console.log(htmlList)
            
          }
      ).catch( function(error) {
        console.log(error)  
        setListeSchemajson("Aucun schéma n'a été ajouter")      
    })
    }
    return (
      
        <div className="component-home">
          <Nav/>
          { listeSchemajson }
        </div>
       
    )
    
  }
// export default connect(
//     ({ home }) => ({ ...home }),
//     dispatch => bindActionCreators({ ...homeActions }, dispatch)
//   )( home );