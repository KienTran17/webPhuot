import React, { Component } from 'react';
import Login from '../login/ButtonLogin';
import { connect } from 'react-redux';
import checkLogin from '../../api/checkLogin';
import Author from '../login/Author';
import getUserByUserName from '../../api/user/getUserByUserName'
function getCookie(name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
}

class Header extends Component {
	 componentDidMount() {
		const { isAuthen, dispatch } = this.props;
		const token = getCookie('tk');

		 checkLogin(token).then(r => {
			if (r) {
				if (!isAuthen) {
					dispatch({ type: 'LOGIN' });
				}
			}
		}).catch(e => e);
	}
	render() {
		const token = getCookie('tk')
		const { isAuthen, user } = this.props;
		const show = token ? <Author isAuthen={isAuthen} user={user} /> : <Login />;
		return (
			<div className="container-fluid custom-container">
				<div className="row no_row row-header">
					<div style={{marginTop:"0px"}} className="brand-be">
						<a href="/"><img src="../asset/img/toplogo2.png" style={{width:"140px", height:"76px"}} alt="logo" className="be_logo" />
						</a>
					</div>
					<div className="header-menu-block">
						<button className="cmn-toggle-switch cmn-toggle-switch__htx"><span></span></button>
						<ul className="header-menu" id="one">
							<li className="active-header"><a href="/">Tìm Kiếm</a><i className="fa fa-angle-down"></i>
								{/*<ul>
									<li>
										<a href="activity.html">ACTIVITY</a>
										<i className="fa fa-angle-right"></i><i className="fa fa-angle-down"></i>
										<ul>
											<li><a href="page1.html">PAGE 1</a></li>
											<li><a href="page2.html">PAGE 2</a></li>
											<li><a href="page3.html">PAGE 3</a></li>
										</ul>
									</li>
									<li><a href="search.html">SEARCH</a></li>
								</ul>*/}
							</li>
							<li><a href="#">Tin tức - Lễ hội</a></li>
							<li><a href="#">Tìm bạn cùng Phượt</a><i className="fa fa-angle-down"></i>

							</li>
							<li><a href="#">Những điều cần biết</a><i className="fa fa-angle-down"></i>
								{/*<ul>
									<li><a href="blog.html">BLOG</a></li>
									<li><a href="blog-2.html">BLOG 2</a></li>
									<li><a href="blog-3.html">BLOG 3</a></li>
									<li><a href="statictics.html">STATISTICS</a></li>
									<li><a href="faq.html">FAQ</a></li>
									<li><a href="about-us.html">ABOUT US</a></li>
									<li><a href="contact-us.html">CONTACT US</a></li>
									<li><a href="shortcodes.html">SHORTCODES</a></li>
								</ul>*/}
							</li>
						</ul>
					</div>
					<div className="login-header-block">
						{show}

					</div>
				</div>
			</div>
		);
	}
}

export default connect(state => ({ isAuthen: state.isAuthen, user: state.user }))(Header)