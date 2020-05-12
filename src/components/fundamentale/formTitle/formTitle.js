import React, {Component} from 'react';
import './formTitle.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as formTitleActions from "../../store/formTitle/actions";
export default function formTitle(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
      return(
        <label>{ props.text }</label>
      )
    
  }
// export default connect(
//     ({ formTitle }) => ({ ...formTitle }),
//     dispatch => bindActionCreators({ ...formTitleActions }, dispatch)
//   )( formTitle );