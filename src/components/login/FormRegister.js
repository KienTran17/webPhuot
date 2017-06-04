import React, { Component } from 'react';
import register from '../../api/register';
import { connect } from 'react-redux';
//var formLogin = document.getElementsById('formLogin');


function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

class FormRegister extends Component {
    componentDidMount() {
    }
    onSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { txtFirstName, txtLastName, txtUsername, txtEmail, txtPassword, txtRepeatPassword, cbCheck } = this.refs;
        register(txtFirstName.value, txtLastName.value, txtUsername.value, txtEmail.value, txtPassword.value)
            .then(isOk => {
                if (isOk) {
                    console.log(isOk)
                    dispatch({ type: 'LOGIN' });
                    dispatch({ type: 'USER', item: isOk });
                }
                else alert('Vui lòng đăng ký lại!')
            })
    }
    render() {
        return (
            <div>
                <div className="container large-popup-container">
                    <div className="row">
                        <div className="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2 large-popup-content">
                            <div className="row">
                                <div className="col-md-12">
                                    <i className="fa fa-times close-button" />
                                    <h5 className="large-popup-title">Register</h5>
                                </div>
                                <form onSubmit={this.onSubmit.bind(this)} className="popup-input-search">
                                    <div className="col-md-6">
                                        <input ref="txtFirstName" className="input-signtype" type="text" required placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input ref="txtLastName" className="input-signtype" type="text" required placeholder="Last Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input ref="txtUsername" className="input-signtype" type="text" required placeholder="username" />
                                    </div>
                                    <div className="col-md-6">
                                        <input ref="txtEmail" className="input-signtype" type="text" required placeholder="Email" />
                                    </div>
                                    <div className="col-md-6">
                                        <input ref="txtPassword" className="input-signtype" type="password" required placeholder="Password" />
                                    </div>
                                    <div className="col-md-6">
                                        <input ref="txtRepeatPassword" className="input-signtype" type="password" required placeholder="Repeat Password" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="be-checkbox">
                                            <label className="check-box">
                                                <input ref="cbCheck" className="checkbox-input" type="checkbox" required defaultValue /> <span className="check-box-sign" />
                                            </label>
                                            <span className="large-popup-text">
                                                I have read and agree to the <a className="be-popup-terms" href="#">Terms of Use</a> and <a className="be-popup-terms" href="#">Privacy Policy</a>.
                        </span>
                                        </div>

                                    </div>
                                    <div className="col-md-6 for-signin">
                                        <button className="be-popup-sign-button" >SIGN IN </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(FormRegister);
