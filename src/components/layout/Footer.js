import React, { Component } from 'react';
import FormLogin from '../login/FormLogin';
import FormRegister from '../login/FormRegister';
import { connect } from 'react-redux';

class Footer extends Component {
    render() {
        const { isAuthen } = this.props;
        const style = {display: "none"};
        const display = isAuthen ? style : {};
        return (
            <div>
                <div className="footer_slider">
                    <div className="swiper-container" data-autoplay={0} data-loop={1} data-speed={500} data-center={0} data-slides-per-view="responsive" data-xs-slides={4} data-sm-slides={8} data-md-slides={14} data-lg-slides={19} data-add-slides={19}>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide active" data-val={0}>
                                <img className="img-responsive img-full" src="../asset/img/f1.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={1}>
                                <img className="img-responsive img-full" src="../asset/img/f2.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={2}>
                                <img className="img-responsive img-full" src="../asset/img/f3.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={3}>
                                <img className="img-responsive img-full" src="../asset/img/f4.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={4}>
                                <img className="img-responsive img-full" src="../asset/img/f5.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={5}>
                                <img className="img-responsive img-full" src="../asset/img/f6.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={6}>
                                <img className="img-responsive img-full" src="../asset/img/f7.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={7}>
                                <img className="img-responsive img-full" src="../asset/img/f8.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={8}>
                                <img className="img-responsive img-full" src="../asset/img/f9.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={9}>
                                <img className="img-responsive img-full" src="../asset/img/f10.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={10}>
                                <img className="img-responsive img-full" src="../asset/img/f11.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={11}>
                                <img className="img-responsive img-full" src="../asset/img/f12.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={12}>
                                <img className="img-responsive img-full" src="../asset/img/f13.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={13}>
                                <img className="img-responsive img-full" src="../asset/img/f14.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={14}>
                                <img className="img-responsive img-full" src="../asset/img/f15.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={15}>
                                <img className="img-responsive img-full" src="../asset/img/f16.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={16}>
                                <img className="img-responsive img-full" src="../asset/img/f17.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={17}>
                                <img className="img-responsive img-full" src="../asset/img/f18.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={18}>
                                <img className="img-responsive img-full" src="../asset/img/f19.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={19}>
                                <img className="img-responsive img-full" src="../asset/img/f1.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={20}>
                                <img className="img-responsive img-full" src="../asset/img/f2.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={21}>
                                <img className="img-responsive img-full" src="../asset/img/f3.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={22}>
                                <img className="img-responsive img-full" src="../asset/img/f4.jpg" alt />
                            </div>
                            <div className="swiper-slide" data-val={23}>
                                <img className="img-responsive img-full" src="../asset/img/f5.jpg" alt />
                            </div>
                        </div>
                        <div className="pagination hidden" />
                    </div>
                </div>
                <div className="footer-main">
                    <div className="container-fluid custom-container">
                        <div className="row">
                            <div className="col-md-3 col-xl-4">
                                <div className="footer-block">
                                    <h1 className="footer-title">About Us</h1>
                                    <p>Vestibulum tincidunt, augue fermentum accumsan viverra, eros dui rutrum libero, nec imperdiet felis sem in augue luctus <a href="#">diam a porta</a> iaculis. Vivamus sit amet fermentum nisl. Duis id <a href="#">massa id purus</a> tristique varius a sit amet est. Fusce dolor libero, efficitur et lobortis at, faucibus nec nunc.</p>
                                    <ul className="soc_buttons">
                                        <li><a href><i className="fa fa-facebook" /></a></li>
                                        <li><a href><i className="fa fa-twitter" /></a></li>
                                        <li><a href><i className="fa fa-google-plus" /></a></li>
                                        <li><a href><i className="fa fa-pinterest-p" /></a></li>
                                        <li><a href><i className="fa fa-instagram" /></a></li>
                                        <li><a href><i className="fa fa-linkedin" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-xl-2">
                                <div className="footer-block">
                                    <h1 className="footer-title">Some Links</h1>
                                    <div className="row footer-list-footer">
                                        <div className="col-md-6">
                                            <ul className="link-list">
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Help</a></li>
                                                <li><a href="#">Contacts</a></li>
                                                <li><a href="#">Job</a></li>
                                                <li><a href="#">Projets</a></li>
                                            </ul></div>
                                        <div className="col-md-6">
                                            <ul className="link-list">
                                                <li><a href="#">New Works</a></li>
                                                <li><a href="#">Popular Authors</a></li>
                                                <li><a href="#">New Authors</a></li>
                                                <li><a href="#">Career</a></li>
                                                <li><a href="#">FAQ</a></li>
                                            </ul></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 galerry">
                                <div className="footer-block">
                                    <h1 className="footer-title">Recent Works</h1>
                                    <a href="#"><img src="../asset/img/g1.jpg" alt /></a>
                                    <a href="#"><img src="../asset/img/g2.jpg" alt /></a>
                                    <a href="#"><img src="../asset/img/g3.jpg" alt /></a>
                                    <a href="#"><img src="../asset/img/g4.jpg" alt /></a>
                                    <a href="#"><img src="../asset/img/g5.jpg" alt /></a>
                                    <a href="#"><img src="../asset/img/g6.jpg" alt /></a>
                                    <a href="#"><img src="../asset/img/g7.jpg" alt /></a>
                                    <a href="#"><img src="../asset/img/g8.jpg" alt /></a>
                                    <a href="#"><img src="../asset/img/g9.jpg" alt /></a>
                                    <a href="#"><img src="../asset/img/g10.jpg" alt /></a>
                                    <a href="#"><img src="../asset/img/g11.jpg" alt /></a>
                                    <a href="#"><img src="../asset/img/g12.jpg" alt /></a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer-block">
                                    <h1 className="footer-title">Subscribe On Our News</h1>
                                    <form action="./" className="subscribe-form">
                                        <input type="text" placeholder="Yout Name" required />
                                        <div className="submit-block">
                                            <i className="fa fa-envelope-o" />
                                            <input type="submit" defaultValue />
                                        </div>
                                    </form>
                                    <div className="soc-activity">
                                        <div className="soc_ico_triangle">
                                            <i className="fa fa-twitter" />
                                        </div>
                                        <div className="message-soc">
                                            <div className="date">16h ago</div>
                                            <a href="#" className="account">@faq</a> vestibulum accumsan est <a href="#" className="heshtag">#malesuada</a> sem auctor, eu aliquet nisi ornare leo sit amet varius egestas.
                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container-fluid custom-container">
                        <div className="col-md-12 footer-end clearfix">
                            <div className="left">
                                <span className="copy">© 2015. All rights reserved. <span className="white"><a href="#"> NRGNetwork</a></span></span>
                                <span className="created">Created with LOVE by <span className="white"><a href="#"> NRGThemes</a></span></span>
                            </div>
                            <div className="right">
                                <a className="btn color-7 size-2 hover-9">About Us</a>
                                <a className="btn color-7 size-2 hover-9">Help</a>
                                <a className="btn color-7 size-2 hover-9">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="be-fixed-filter" />
                <div id="formLogin" style={display} className="large-popup login">
                    <div className="large-popup-fixed" />
                    <FormLogin isAuthen={isAuthen} />
                </div>
                <div id="fromRegister" style={display} className="large-popup register">
                    <div className="large-popup-fixed" ></div>
                    <FormRegister isAuthen={isAuthen} />
                </div>
            </div>
        );
    }
}
export default connect()(Footer);