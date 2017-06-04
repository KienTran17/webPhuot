"use strict";
import React, { Component } from 'react';
import login from '../../api/login';
import { connect } from 'react-redux';
import Facebook from './Facebook';
//var formLogin = document.getElementsById('formLogin');
import getUserByUserName from '../../api/user/getUserByUserName';


function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

class FormLogin extends Component {

    componentDidMount() {

    }
     onSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { txtEmail, txtPassword } = this.refs;
         login(txtEmail.value, txtPassword.value).then( isOk => {
            if (isOk) {
                 dispatch({ type: 'LOGIN' });
                 getUserByUserName(getCookie('tk')).then( user => {
                     dispatch({type:"USER", item: user})
                });
            }
            else alert('Sai username hoặc mật khẩu, Vui lòng đăng nhập lại!')
        });
    }

    render() {

        return (
            <div className="container large-popup-container">
                <div className="row">
                    <div className="col-md-8 col-md-push-2 col-lg-6 col-lg-push-3  large-popup-content">
                        <div className="row">
                            <div className="col-md-12">
                                <i className="fa fa-times close-button"></i>
                                <h5 className="large-popup-title">Log in</h5>
                            </div>
                            <form onSubmit={this.onSubmit.bind(this)} className="popup-input-search">
                                <div className="col-md-6">
                                    <input className="input-signtype" type="email" ref="txtEmail" placeholder="Your email" />
                                </div>
                                <div className="col-md-6">
                                    <input className="input-signtype" type="password" ref="txtPassword" required="" placeholder="Password" />
                                </div>
                                <div className="col-xs-6">
                                    {/*<div className="be-checkbox">
                                        <label className="check-box">
                                            <input className="checkbox-input" type="checkbox" value="" /> <span className="check-box-sign"></span>
                                        </label>
                                        <span className="large-popup-text">
                                            Stay signed in
								</span>
                                    </div>*/}

                                    {/*<a href="#" className="link-large-popup">Forgot password?</a>*/}
                                    <Facebook />
                                </div>
                                <div className="col-xs-6 for-signin">
                                    {/*<a href="#" onClick={this.handleClick}>Login</a>*/}
                                    
                                    <button style={{marginRight:"0px"}} className="btn be-popup-sign-button" >SIGN IN</button>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(FormLogin);