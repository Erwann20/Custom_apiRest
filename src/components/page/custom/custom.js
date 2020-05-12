import React, {Component, useState} from 'react';
import './custom.sass'
import { TextField } from '@material-ui/core';
import FormTitle from '../../fundamentale/formTitle';
import FormButton from '../../fundamentale/formButton';
import Axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customActions from "../../store/custom/actions";
export default function Custom(props) {
    const [nameSchema, setNameSchema] = useState()
    const [schemaStatus, setSchemaStatus] = useState(500)
    const [schema, setSchema] = useState()
    const [msgError, setMsgError] = useState()

    function search() {

        Axios.get(`http://localhost:8080/`+nameSchema)
        .then(res => {
          const json = res.data;
          setSchemaStatus(res.status)
          console.log(json)

          setSchema(JSON.stringify(json, null, ' '))

        }
      ).catch( function(error) {
        console.log(error)  
        setMsgError(nameSchema + " n'est pas un nom du schéma json disponible dans la base de donnée")      
      })

    }

    function modifySchema() {

      let schemaParse = JSON.parse(schema)
      console.log(schemaParse)
      const customSchema = {
        schema: JSON.parse(schema),
        pseudo: "toto"
      }
      Axios.post('http://localhost:8080/'+nameSchema, {customSchema}).then(res => {
      })
    }

    if (schemaStatus === 200) {
      return (
      <div className="component-custom">
        <textarea onChange={e => setSchema(e.target.value)} value={schema}></textarea>
        <FormButton submit={ () => modifySchema() } />
      </div>)
    } else {
      return (<div className="component-custom">
        <div class="custom-search">
          <div class="custom-title">
            <FormTitle text="Donner le nom du schéma json: "/><br></br>
          </div>
          <div class="custom-form">
            <TextField class="textField"  onChange={ e => setNameSchema(e.target.value) } />
            <FormButton submit={ () => search() } />
          </div>
          { msgError }
        </div>

      </div>)
    }
    
  }
// export default connect(
//     ({ custom }) => ({ ...custom }),
//     dispatch => bindActionCreators({ ...customActions }, dispatch)
//   )( custom );