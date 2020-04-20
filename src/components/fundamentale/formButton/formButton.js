import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './formButton.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as formButtonActions from "../../store/formButton/actions";
export default class formButton extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    submit() {
      this.props.submit()
    }

    render() {
      return (
      <div className="component-form-button">
        <Button variant="contained" color="primary" onClick={this.submit.bind(this)}>Toto</Button>
      </div>
      
      )

    }
  }
// export default connect(
//     ({ formButton }) => ({ ...formButton }),
//     dispatch => bindActionCreators({ ...formButtonActions }, dispatch)
//   )( formButton );