import React, {Component} from 'react';
import './nav.sass'
import { Button } from '@material-ui/core';
import { Route, BrowserRouter } from 'react-router-dom';
import Custom from '../../page/custom/custom'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as navActions from "../../store/nav/actions";
export default function nav() {

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
                  <a href="#"><Button variant="contained" color="primary">
                    Upload
                  </Button></a>
              </div>
  
            </div>
          </div>
          <div className="main-route-place">
            <Route exact path="/custom" component={Custom} />
          </div>
        </BrowserRouter>
      )
      
    
  }
// export default connect(
//     ({ nav }) => ({ ...nav }),
//     dispatch => bindActionCreators({ ...navActions }, dispatch)
//   )( nav );