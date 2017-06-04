import React, { Component } from 'react';
import { connect } from 'react-redux';
import getUserByUserName from '../../../api/user/getUserByUserName';
import getListPlaceFromUser from '../../../api/user/getListPlaceFromUser';
import ListPlaceUser from './ListPlaceUser';
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { user: {}, lstPlace: [] };
    }
    componentDidMount() {
        const token = getCookie('tk');
        getUserByUserName(token).then(user => {
            this.setState({ user: user });
            getListPlaceFromUser(token, user.id).then(lst => {
                this.setState({ lstPlace: lst });
            })
        })

    }
    render() {
        const lstPlace = this.state.lstPlace;
        const user = this.state.user;
        return (
            <div id="content-block">
                <div className="container be-detail-container">
                    <div className="row">
                        <div className="col-xs-12 col-md-4 left-feild">
                            <div className="be-user-block style-3">
                                <div className="be-user-detail">
                                    <a className="be-ava-user style-2" href="#">
                                        <img src={user.avatar} alt />
                                    </a>
                                    <a href="/editprofile" className="be-ava-left btn color-1 size-2 hover-1"><i className="fa fa-pencil" />Edit</a>
                                    <div className="be-ava-right btn btn-share color-4 size-2 hover-7">
                                        <i className="fa fa-share-alt" />share
                    <div className="share-buttons">
                                            <a className="color-1" href="#"><i className="fa fa-facebook" /> 278</a>
                                            <a className="color-2" href="#"><i className="fa fa-twitter" /> 180</a>
                                            <a className="color-3" href="#"><i className="fa fa-pinterest-p" /> 78</a>
                                            <a className="color-4" href="#"><i className="fa fa-linkedin" /> 53</a>
                                        </div>
                                    </div>
                                    <p className="be-use-name">{user.last_name + ' ' + user.first_name}</p>
                                    <div className="be-user-info">
                                        Barnsley, United Kingdom
                  </div>
                                    <div className="be-text-tags style-2">
                                        <a href="#">UI/UX</a>,
                    <a href="#">Web Design</a>,
                    <a href="#">Art Direction</a>
                                    </div>
                                    <div className="be-user-social">
                                        <a className="social-btn color-1" href="#"><i className="fa fa-facebook" /></a>
                                        <a className="social-btn color-2" href="#"><i className="fa fa-twitter" /></a>
                                        <a className="social-btn color-3" href="#"><i className="fa fa-google-plus" /></a>
                                        <a className="social-btn color-4" href="#"><i className="fa fa-pinterest-p" /></a>
                                        <a className="social-btn color-5" href="#"><i className="fa fa-instagram" /></a>
                                        <a className="social-btn color-6" href="#"><i className="fa fa-linkedin" /></a>
                                    </div>
                                    <a className="be-user-site" href="http://www.phoenix.cool"><i className="fa fa-link" /> www.phoenix.cool</a>
                                </div>
                                <div className="be-user-statistic">
                                    <div className="stat-row clearfix"><i className="stat-icon icon-views-b" /> Projects views<span className="stat-counter">{user.view}</span></div>
                                    <div className="stat-row clearfix"><i className="stat-icon icon-like-b" />Appreciations<span className="stat-counter">{user.like}</span></div>
                                    {/*<div className="stat-row clearfix"><i className="stat-icon icon-followers-b" />Followers<span className="stat-counter">2208</span></div>*/}
                                    {/*<div className="stat-row clearfix"><i className="stat-icon icon-following-b" />Following<span className="stat-counter">0</span></div>*/}
                                </div>
                            </div>
                            <div className="be-desc-block">
                                <div className="be-desc-author">
                                    <div className="be-desc-label">About Me</div>
                                    <div className="clearfix" />
                                    <div className="be-desc-text">
                                        Nam sit amet massa commodo, tristique metus at, consequat turpis. In vulputate justo at auctor mollis. Aliquam non sagittis tortor. Duis tristique suscipit risus, quis facilisis nisl congue vitae. Nunc varius pellentesque scelerisque. Etiam quis massa vitae lectus placerat ullamcorper pellentesque vel nisl.
                  </div>
                                </div>
                                <div className="be-desc-author">
                                    <div className="be-desc-label">My Values</div>
                                    <div className="clearfix" />
                                    <div className="be-desc-text">
                                        Sed dignissim scelerisque pretium. Vestibulum vel lacus laoreet nunc fermentum maximus. Proin id sodales sem, at consectetur urna. Proin vestibulum, erat a hendrerit sodales, nulla libero ornare dolor.
                  </div>
                                </div>
                            </div>
                            <a className="btn full color-1 size-1 hover-1"><i className="fa fa-plus" />add sections</a>
                        </div>
                        <div className="col-xs-12 col-md-8">
                            <div className="tab-wrapper style-1">
                                <div className="tab-nav-wrapper">
                                    <div className="nav-tab  clearfix">

                                        <div className="nav-tab-item active">
                                            <span>Bộ sưu tập địa điểm</span>
                                        </div>
                                        <div className="nav-tab-item ">
                                            <span>Bộ sưu tập hành trình</span>
                                        </div>
                                        <div className="nav-tab-item ">
                                            <span>Album của bạn</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabs-content clearfix">
                                    <div className="tab-info active">
                                        <div className="row">
                                            {lstPlace ? lstPlace.map((e, i) => <ListPlaceUser place={e} key={i} user={user} />) : " "}
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="tab-info">
                                        <div className="row">
                                            <h1>tag bộ sưu tập hành trình</h1>
                                            <div id="listJourney" />
                                        </div>
                                        <a> XEM THÊM </a>
                                        <hr />
                                        <h1> hành trình đã lưu</h1>
                                    </div>
                                    <div className="tab-info">
                                        <div className="collection">
                                            <h3 className="menu-article">Creative Ideas</h3>
                                            <div className="collection-header">
                                                <span><i className="fa fa-user" />by <a href="#">Leigh Taylor</a> </span>
                                                <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                <span><i className="fa fa-eye" /> 789</span>
                                                <div className="edit-collection">
                                                    <i className="fa fa-pencil" />
                                                    <div className="c_edit">
                                                        <div className="btn-rename" href="#">
                                                            rename
                              <div className="message-popup">
                                                                <div className="message-popup-inner container">
                                                                    <div className="row">
                                                                        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                                                                            <i className="fa fa-times close-button" />
                                                                            <h5 className="large-popup-title">Rename</h5>
                                                                            <div className="form-group">
                                                                                <input className="form-input" required placeholder="Your text" />
                                                                            </div>
                                                                            <button className="btn btn-right color-1 size-1 hover-1">OK</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#">delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-entry">
                                                <a href="#" className="portfolio-link type-2 clearfix">
                                                    <img src="../asset/img/collection_1.jpg" alt />
                                                    <img src="../asset/img/collection_2.jpg" alt />
                                                    <img src="../asset/img/collection_3.jpg" alt />
                                                    <img src="../asset/img/collection_4.jpg" alt />
                                                    <img src="../asset/img/collection_5.jpg" alt />
                                                    <div className="color_bg">
                                                        <span>view gallery</span>
                                                        <span className="child" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="collection">
                                            <h3 className="menu-article">Creative Agency</h3>
                                            <div className="collection-header">
                                                <span><i className="fa fa-user" />by <a href="#">Leigh Taylor</a> </span>
                                                <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                <span><i className="fa fa-eye" /> 789</span>
                                                <div className="edit-collection">
                                                    <i className="fa fa-pencil" />
                                                    <div className="c_edit">
                                                        <div className="btn-rename" href="#">
                                                            rename
                              <div className="message-popup">
                                                                <div className="message-popup-inner container">
                                                                    <div className="row">
                                                                        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                                                                            <i className="fa fa-times close-button" />
                                                                            <h5 className="large-popup-title">Rename</h5>
                                                                            <div className="form-group">
                                                                                <input className="form-input" required placeholder="Your text" />
                                                                            </div>
                                                                            <button className="btn btn-right color-1 size-1 hover-1">OK</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#">delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-entry">
                                                <a href="#" className="portfolio-link type-2 clearfix">
                                                    <img src="../asset/img/collection_6.jpg" alt />
                                                    <img src="../asset/img/collection_7.jpg" alt />
                                                    <img src="../asset/img/collection_8.jpg" alt />
                                                    <img src="../asset/img/collection_9.jpg" alt />
                                                    <img src="../asset/img/collection_10.jpg" alt />
                                                    <div className="color_bg">
                                                        <span>view gallery</span>
                                                        <span className="child" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="collection">
                                            <h3 className="menu-article">Creative Agency</h3>
                                            <div className="collection-header">
                                                <span><i className="fa fa-user" />by <a href="#">Inspiration Art</a> </span>
                                                <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                <span><i className="fa fa-eye" /> 789</span>
                                                <div className="edit-collection">
                                                    <i className="fa fa-pencil" />
                                                    <div className="c_edit">
                                                        <div className="btn-rename" href="#">
                                                            rename
                              <div className="message-popup">
                                                                <div className="message-popup-inner container">
                                                                    <div className="row">
                                                                        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                                                                            <i className="fa fa-times close-button" />
                                                                            <h5 className="large-popup-title">Rename</h5>
                                                                            <div className="form-group">
                                                                                <input className="form-input" required placeholder="Your text" />
                                                                            </div>
                                                                            <button className="btn btn-right color-1 size-1 hover-1">OK</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#">delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-entry">
                                                <a href="#" className="portfolio-link type-2 clearfix">
                                                    <img src="../asset/img/collection_11.jpg" alt />
                                                    <img src="../asset/img/collection_12.jpg" alt />
                                                    <img src="../asset/img/collection_13.jpg" alt />
                                                    <img src="../asset/img/collection_14.jpg" alt />
                                                    <img src="../asset/img/collection_15.jpg" alt />
                                                    <div className="color_bg">
                                                        <span>view gallery</span>
                                                        <span className="child" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="collection">
                                            <h3 className="menu-article">Ideas For Personal Site</h3>
                                            <div className="collection-header">
                                                <span><i className="fa fa-user" />by <a href="#">Inspiration Art</a> </span>
                                                <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                <span><i className="fa fa-eye" /> 789</span>
                                                <div className="edit-collection">
                                                    <i className="fa fa-pencil" />
                                                    <div className="c_edit">
                                                        <div className="btn-rename" href="#">
                                                            rename
                              <div className="message-popup">
                                                                <div className="message-popup-inner container">
                                                                    <div className="row">
                                                                        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                                                                            <i className="fa fa-times close-button" />
                                                                            <h5 className="large-popup-title">Rename</h5>
                                                                            <div className="form-group">
                                                                                <input className="form-input" required placeholder="Your text" />
                                                                            </div>
                                                                            <button className="btn btn-right color-1 size-1 hover-1">OK</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#">delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-entry">
                                                <a href="#" className="portfolio-link type-2 clearfix">
                                                    <img src="../asset/img/collection_16.jpg" alt />
                                                    <img src="../asset/img/collection_17.jpg" alt />
                                                    <img src="../asset/img/collection_18.jpg" alt />
                                                    <img src="../asset/img/collection_19.jpg" alt />
                                                    <img src="../asset/img/collection_20.jpg" alt />
                                                    <div className="color_bg">
                                                        <span>view gallery</span>
                                                        <span className="child" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="collection">
                                            <h3 className="menu-article">Inspiration Photos</h3>
                                            <div className="collection-header">
                                                <span><i className="fa fa-user" />by <a href="#">Inspiration Art</a> </span>
                                                <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                <span><i className="fa fa-eye" /> 789</span>
                                                <div className="edit-collection">
                                                    <i className="fa fa-pencil" />
                                                    <div className="c_edit">
                                                        <div className="btn-rename" href="#">
                                                            rename
                              <div className="message-popup">
                                                                <div className="message-popup-inner container">
                                                                    <div className="row">
                                                                        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                                                                            <i className="fa fa-times close-button" />
                                                                            <h5 className="large-popup-title">Rename</h5>
                                                                            <div className="form-group">
                                                                                <input className="form-input" required placeholder="Your text" />
                                                                            </div>
                                                                            <button className="btn btn-right color-1 size-1 hover-1">OK</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#">delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-entry">
                                                <a href="#" className="portfolio-link type-2 clearfix">
                                                    <img src="../asset/img/collection_6.jpg" alt />
                                                    <img src="../asset/img/collection_10.jpg" alt />
                                                    <img src="../asset/img/collection_8.jpg" alt />
                                                    <img src="../asset/img/collection_11.jpg" alt />
                                                    <img src="../asset/img/collection_3.jpg" alt />
                                                    <div className="color_bg">
                                                        <span>view gallery</span>
                                                        <span className="child" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(Profile)