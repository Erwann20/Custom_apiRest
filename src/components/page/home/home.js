import React from 'react';
import './home.scss'
import Nav from '../../fundamentale/nav/nav'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as homeActions from "../../store/home/actions";
export default function Home() {


    return (
      
        <div className="component-home">
          <Nav/>
  
        </div>
       
    )
    
  }
// export default connect(
//     ({ home }) => ({ ...home }),
//     dispatch => bindActionCreators({ ...homeActions }, dispatch)
//   )( home );