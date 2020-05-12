import React, {Component, useState} from 'react';
import axios from 'axios'

import FormTitle from '../../fundamentale/formTitle'
import FormButton from '../../fundamentale/formButton'


import './workspace.sass'
import { TextField } from '@material-ui/core';
import { Router, BrowserRouter } from 'react-router-dom';

export default function Workspace() {
    const [pseudo, setPseudo] = useState()
    const [present, setPresent] = useState(false)

    function submit() {
      setPresent(false)

      axios.get(`http://localhost:8080/workspace/`)
        .then(res => {
          const users = res.data;
          // eslint-disable-next-line
          users.map( user => {
            console.log(user.name)

            if (pseudo === user.name) {
              setPresent(true)
            }
          })
        }
      )
    }

      let text =""

      if (present === false) {
        text = "Le pseudo n'est pas valide"
      } else {
        text ="Le pseudo est valide"
      }

      return (
        <BrowserRouter>
          <div className="component-workspace">
              
              <div class="workspace-title">
                <FormTitle text="Saisir un pseudo"/>
              </div>
              <div class="workspace-form">
                <TextField class="textField" id="standard-basic" onChange={e => setPseudo(e.target.value)}/>
                <FormButton submit={() => submit()}/>
              </div>
            {text}
          </div>
          <div className="main-route-place">
              {/* <Route exact path="/login" component={FormConnect} /> */}
          </div>
        </BrowserRouter>
      )
    
  }
