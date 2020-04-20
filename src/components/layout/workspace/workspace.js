import React, {Component} from 'react';
import axios from 'axios'

import FormTitle from '../../fundamentale/formTitle'
import FormInput from '../../fundamentale/formInput'
import FormButton from '../../fundamentale/formButton'


import './workspace.sass'

export default class workspace extends Component {
    constructor(props) {
      super(props);
      this.state = {
        pseudo: "",
        present: false,
      };
    }

    setPseudo(event) {
      this.setState({
        pseudo: event.target.value
      })
    }

    submit() {
      this.setState({
        present: false
      })

      axios.get(`http://localhost:8080/workspace/`)
        .then(res => {
          const users = res.data;
          // eslint-disable-next-line
          users.map( user => {
            console.log(user.name)

            if (this.state.pseudo === user.name) {
              this.setState({
                present: true
              })
            }
          })
        }
      )
    }

    render() {
      let text =""

      if (this.state.present === false) {
        text = "Le pseudo n'est pas valide"
      } else {
        text ="Le pseudo est valide"
      }

      return (
        <div className="component-workspace">
            
            <div><FormTitle/></div>
              
            <div><FormInput setPseudo={this.setPseudo.bind(this)}/></div><br></br>
            <div><FormButton submit={this.submit.bind(this)}/></div>
          
          {text}
        
        </div>
      )
    }
  }
