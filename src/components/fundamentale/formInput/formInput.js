import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import './formInput.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as formInputActions from "../../store/formInput/actions";
export default class formInput extends Component {
    //  constructor(props) {
    //      super(props);
        
    // }

    setPseudo(event) {
        this.props.setPseudo(event)
    }

    render() {
      return (
         <div className="component-form-input">
           <TextField id="standard-basic" onChange={this.setPseudo.bind(this)}/>
         </div>
      )
    }
  }
// export default connect(
//     ({ formInput }) => ({ ...formInput }),
//     dispatch => bindActionCreators({ ...formInputActions }, dispatch)
//   )( formInput );