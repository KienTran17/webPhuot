import React, { Component } from 'react';
import { connect } from 'react-redux';

class ButtonRegister extends Component {
    render() {
        return (
            <a style={{marginTop:"10px"}} className="be-register btn color-3 size-1 hover-6"><i className="fa fa-lock" />sign up now</a>
        );
    }
}
export default connect()(ButtonRegister);
