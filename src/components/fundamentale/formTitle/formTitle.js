import React, {Component} from 'react';
import './formTitle.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as formTitleActions from "../../store/formTitle/actions";
export default class formTitle extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return(
        <label>Saisir un pseudo</label>
      )
    }
  }
// export default connect(
//     ({ formTitle }) => ({ ...formTitle }),
//     dispatch => bindActionCreators({ ...formTitleActions }, dispatch)
//   )( formTitle );