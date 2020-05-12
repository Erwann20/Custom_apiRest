import React from 'react';
import './home.scss'
import Nav from '../../fundamentale/nav/nav'
import { BrowserRouter } from 'react-router-dom';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as homeActions from "../../store/home/actions";
export default function home(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    return (
      <BrowserRouter>
        <div className="component-home">
          <Nav/>
        </div>
        <div className="main-route-place">
            {/* <Route exact path="/home" component={Home} /> */}
        </div>
      </BrowserRouter>
    )
    
  }
// export default connect(
//     ({ home }) => ({ ...home }),
//     dispatch => bindActionCreators({ ...homeActions }, dispatch)
//   )( home );