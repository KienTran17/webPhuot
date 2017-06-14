import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import handleUser from '../../api/user/handleUser';
import checkFacebook from '../../api/user/checkFacebook';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

// Let's say your component is called 'MyComponent'

// Works with standalone PropTypes
class Facebook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '212346185915988',
                cookie: true,  // enable cookies to allow the server to access 
                // the session
                xfbml: true,  // parse social plugins on this page
                version: 'v2.8' // use graph api version 2.8
            });

            // Now that we've initialized the JavaScript SDK, we call
            // FB.getLoginStatus().  This function gets the state of the
            // person visiting this page and can return one of three states to
            // the callback you provide.  They can be:
            //
            // 1. Logged into your app ('connected')
            // 2. Logged into Facebook, but not your app ('not_authorized')
            // 3. Not logged into Facebook and can't tell if they are logged into
            //    your app or not.
            //
            // These three cases are handled in the callback function.
            FB.getLoginStatus(function (response) {
                this.statusChangeCallback(response);
            }.bind(this));
        }.bind(this);

        // Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;

            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);

        }(document, 'script', 'facebook-jssdk'));

    }

    // // Here we run a very simple test of the Graph API after login is
    // // successful.  See statusChangeCallback() for when this call is made.

    testAPI() {
        const { dispatch, isAuthen } = this.props;
        const token = getCookie('tk');
        FB.api('/me', 'GET', { fields: 'first_name,last_name,name,picture,link,id,email' }, function (response) {
            if (!token)
                if (!isAuthen) {
                    checkFacebook(response.id)
                        .then(user => {
                            if (user) {
                                dispatch({ type: "LOGIN" })
                                dispatch({ type: "USER", item: user })
                            }

                        })
                        .catch(e => {
                            if (!response.email) {
                                const mail = prompt('Vui lòng nhập email');
                                response.email = mail;
                                if (!mail) return alert('Vui lòng điền vào email!')
                            }
                            handleUser(response).then(r => {
                                //console.log(r[0])
                                dispatch({ type: "LOGIN" })
                                if (r)
                                    dispatch({ type: "USER", item: r.rows[0] })
                            });
                        })

                }
        });
    }

    // // This is called with the results from from FB.getLoginStatus().
    statusChangeCallback(response) {
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            this.testAPI();
        } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
        } else {
            // The person is not logged into Facebook, so we're not sure if
        }
    }

    // // This function is called when someone finishes with the Login
    // // Button.  See the onlogin handler attached to it in the sample
    // // code below.
    checkLoginState() {
        FB.getLoginStatus(function (response) {
            this.statusChangeCallback(response);
        }.bind(this));
    }

    handleClick() {
        const { dispatch, isAuthen, user } = this.props;
        FB.login((response) => {
            if (response.status === "connected") {
                //dispatch({ type: "LOGIN" });
                this.checkLoginState();
            }

        });
    }
    // responseFacebook(response) {
    //     if (!isAuthen)
    //         handleUser(response).then(r => {
    //             console.log('zo');
    //             dispatch({ type: "LOGIN" })
    //         });
    //     console.log(response);
    // }
    render() {
        return (
            <a onClick={this.handleClick.bind(this)} className="btn color-1 size-1 " ><i className="fa fa-facebook" />sign up via facebook</a>
            /*<FacebookLogin
                appId="212346185915988"
                autoLoad={false}
                reAuthenticate={false}
                fields="name,email,picture"
                cssClass="btn color-1 size-1 hover-1"
                icon="fa-facebook"
                callback={this.responseFacebook}
            />*/
        )
    }
}

export default connect()(Facebook)


