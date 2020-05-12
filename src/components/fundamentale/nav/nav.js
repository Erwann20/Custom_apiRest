import React, {Component} from 'react';
import './nav.sass'
import { Button } from '@material-ui/core';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as navActions from "../../store/nav/actions";
export default function nav() {

      return (
        <div className="navbar" >
          <div class="nav-center">
            <div class="nav-item">
                <a href="/home"><Button variant="contained" color="primary">
                  Home
                </Button></a>
            </div>
            <div class="nav-item">
                <a href="#"><Button variant="contained" color="primary">
                  Custom
                </Button></a>
            </div>
            <div class="nav-item">
                <a href="#"><Button variant="contained" color="primary">
                  Upload
                </Button></a>
            </div>
 
          </div>
        </div>
      )
      
    
  }
// export default connect(
//     ({ nav }) => ({ ...nav }),
//     dispatch => bindActionCreators({ ...navActions }, dispatch)
//   )( nav );