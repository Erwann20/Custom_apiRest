import React from 'react';
import './home.scss'
import Workspace from '../../layout/workspace/workspace'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as homeActions from "../../store/home/actions";
export default function home(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    return (
      <div className="component-home">
        Hello ! {props.pseudo}
      </div>
    )
    
  }
// export default connect(
//     ({ home }) => ({ ...home }),
//     dispatch => bindActionCreators({ ...homeActions }, dispatch)
//   )( home );