import React, { Component } from 'react';
import { connect } from 'react-redux';
import getUserById from '../../../api/user/getUserById';
import getListPlaceFromUserId from '../../../api/user/getListPlaceFromUserId';
import ListPlaceUser from './ListPlaceUser';
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

class ViewUser extends Component {
    constructor(props) {
        super(props);
        this.state = { user: {}, lstPlace: [] };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        getUserById(id).then(user=>{
            console.log(user)
            this.setState({user});
            getListPlaceFromUserId(user.id).then(lstPlace=>{
                this.setState({lstPlace})
            })
        })

    }
    render() {
        const lstPlace = this.state.lstPlace;
        const user = this.state.user;
        return (
            <div id="content-block">
                <div className="container custom-container be-detail-container">
                    <div className="row">
                        <div className="col-xs-12 col-md-4 left-feild">
                            <div className="be-user-block">
                                <div className="be-user-detail">
                                    <a className="be-ava-user" href="#">
                                        <img src={user.avatar} alt />
                                    </a>
                                    <p className="be-use-name">{user.first_name +' '+user.last_name}</p>
                                    <span className="be-user-info">
                                       {user.mobile}
            </span>
                                </div>
                                <div className="be-user-activity-block">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <a href="#" className="be-user-activity-button be-follow-type"><i className="fa fa-plus" />Theo Dõi</a>
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="#" className="col-lg-6 be-user-activity-button be-message-type"><i className="fa fa-envelope-o" />Nhắn tin</a>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="be-title">
                                    Vài Nét Về Tôi
          </h5>
                                <p className="be-text-userblock">
                                    {user.description}
          </p>
                            </div>
                            <a href="#" className="be-button-vidget blue-style"><i className="fa fa-thumbs-o-up" />LIKE PROJECT</a>
                            <a href="#" className="be-button-vidget grey-style"><i className="fa fa-file-o" />ADD TO COLLECTION</a>
                            <h3 className="letf-menu-article text-center">Recent Works</h3>
                            <div className="swiper-container swiper-swiper-unique-id-0 initialized" data-autoplay={5000} data-loop={1} data-speed={500} data-center={0} data-slides-per-view={1} id="swiper-unique-id-0">
                                <div className="swiper-wrapper" style={{ width: 1578, transform: 'translate3d(-1052px, 0px, 0px)', transitionDuration: '0.5s', height: 435 }}><div className="swiper-slide swiper-slide-duplicate" style={{ width: 263, height: 435 }}>
                                    <div className="be-post">
                                        <a href="#" className="be-img-block">
                                            <img src="../asset/img/p9.jpg" height={202} width={269} alt="omg" />
                                        </a>
                                        <a href="#" className="be-post-title">NAHA Finalist Hairstylist of the Year Allen Ruiz</a>
                                        <span>
                                            <a href="#" className="be-post-tag">Art direction</a>,
                  <a href="#" className="be-post-tag">Web Design</a>,
                  <a href="#" className="be-post-tag">Interactiob design</a>
                                        </span>
                                        <div className="author-post">
                                            <img src="../asset/img/ava.png" alt className="ava-author" />
                                            <span>by <a href="#">Daniel Ng</a></span>
                                        </div>
                                        <div className="info-block">
                                            <span><i className="fa fa-thumbs-o-up" /> 253</span>
                                            <span><i className="fa fa-eye" /> 753</span>
                                            <span><i className="fa fa-comment-o" /> 50</span>
                                        </div>
                                    </div>
                                </div>
                                    <div className="swiper-slide" style={{ width: 263, height: 435 }}>
                                        <div className="be-post">
                                            <a href="#" className="be-img-block">
                                                <img src="../asset/img/p9.jpg" height={202} width={269} alt="omg" />
                                            </a>
                                            <a href="#" className="be-post-title">NAHA Finalist Hairstylist of the Year Allen Ruiz</a>
                                            <span>
                                                <a href="#" className="be-post-tag">Art direction</a>,
                  <a href="#" className="be-post-tag">Web Design</a>,
                  <a href="#" className="be-post-tag">Interactiob design</a>
                                            </span>
                                            <div className="author-post">
                                                <img src="../asset/img/ava.png" alt className="ava-author" />
                                                <span>by <a href="#">Daniel Ng</a></span>
                                            </div>
                                            <div className="info-block">
                                                <span><i className="fa fa-thumbs-o-up" /> 253</span>
                                                <span><i className="fa fa-eye" /> 753</span>
                                                <span><i className="fa fa-comment-o" /> 50</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" style={{ width: 263, height: 435 }}>
                                        <div className="be-post">
                                            <a href="#" className="be-img-block">
                                                <img src="../asset/img/p9.jpg" height={202} width={269} alt="omg" />
                                            </a>
                                            <a href="#" className="be-post-title">NAHA Finalist Hairstylist of the Year Allen Ruiz</a>
                                            <span>
                                                <a href="#" className="be-post-tag">Art direction</a>,
                  <a href="#" className="be-post-tag">Web Design</a>,
                  <a href="#" className="be-post-tag">Interactiob design</a>
                                            </span>
                                            <div className="author-post">
                                                <img src="../asset/img/ava.png" alt className="ava-author" />
                                                <span>by <a href="#">Daniel Ng</a></span>
                                            </div>
                                            <div className="info-block">
                                                <span><i className="fa fa-thumbs-o-up" /> 253</span>
                                                <span><i className="fa fa-eye" /> 753</span>
                                                <span><i className="fa fa-comment-o" /> 50</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" style={{ width: 263, height: 435 }}>
                                        <div className="be-post">
                                            <a href="#" className="be-img-block">
                                                <img src="../asset/img/p9.jpg" height={202} width={269} alt="omg" />
                                            </a>
                                            <a href="#" className="be-post-title">NAHA Finalist Hairstylist of the Year Allen Ruiz</a>
                                            <span>
                                                <a href="#" className="be-post-tag">Art direction</a>,
                  <a href="#" className="be-post-tag">Web Design</a>,
                  <a href="#" className="be-post-tag">Interactiob design</a>
                                            </span>
                                            <div className="author-post">
                                                <img src="../asset/img/ava.png" alt className="ava-author" />
                                                <span>by <a href="#">Daniel Ng</a></span>
                                            </div>
                                            <div className="info-block">
                                                <span><i className="fa fa-thumbs-o-up" /> 253</span>
                                                <span><i className="fa fa-eye" /> 753</span>
                                                <span><i className="fa fa-comment-o" /> 50</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-visible swiper-slide-active" style={{ width: 263, height: 435 }}>
                                        <div className="be-post">
                                            <a href="#" className="be-img-block">
                                                <img src="../asset/img/p9.jpg" height={202} width={269} alt="omg" />
                                            </a>
                                            <a href="#" className="be-post-title">NAHA Finalist Hairstylist of the Year Allen Ruiz</a>
                                            <span>
                                                <a href="#" className="be-post-tag">Art direction</a>,
                  <a href="#" className="be-post-tag">Web Design</a>,
                  <a href="#" className="be-post-tag">Interactiob design</a>
                                            </span>
                                            <div className="author-post">
                                                <img src="../asset/img/ava.png" alt className="ava-author" />
                                                <span>by <a href="#">Daniel Ng</a></span>
                                            </div>
                                            <div className="info-block">
                                                <span><i className="fa fa-thumbs-o-up" /> 253</span>
                                                <span><i className="fa fa-eye" /> 753</span>
                                                <span><i className="fa fa-comment-o" /> 50</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-duplicate" style={{ width: 263, height: 435 }}>
                                        <div className="be-post">
                                            <a href="#" className="be-img-block">
                                                <img src="../asset/img/p9.jpg" height={202} width={269} alt="omg" />
                                            </a>
                                            <a href="#" className="be-post-title">NAHA Finalist Hairstylist of the Year Allen Ruiz</a>
                                            <span>
                                                <a href="#" className="be-post-tag">Art direction</a>,
                  <a href="#" className="be-post-tag">Web Design</a>,
                  <a href="#" className="be-post-tag">Interactiob design</a>
                                            </span>
                                            <div className="author-post">
                                                <img src="../asset/img/ava.png" alt className="ava-author" />
                                                <span>by <a href="#">Daniel Ng</a></span>
                                            </div>
                                            <div className="info-block">
                                                <span><i className="fa fa-thumbs-o-up" /> 253</span>
                                                <span><i className="fa fa-eye" /> 753</span>
                                                <span><i className="fa fa-comment-o" /> 50</span>
                                            </div>
                                        </div>
                                    </div></div>
                                <div className="pagination pagination-swiper-unique-id-0"><span className="swiper-pagination-switch" /><span className="swiper-pagination-switch" /><span className="swiper-pagination-switch" /><span className="swiper-pagination-switch swiper-visible-switch swiper-active-switch" /></div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-8">
                            <div className="tab-wrapper style-1">
                                <div className="tab-nav-wrapper">
                                    <div className="nav-tab  clearfix">

                                        <div className="nav-tab-item active">
                                            <span>Địa điểm</span>
                                        </div>
                                        <div className="nav-tab-item ">
                                            <span>Hành trình</span>
                                        </div>
                                        <div className="nav-tab-item ">
                                            <span>Album của {user.first_name +' ' + user.last_name}</span>
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
                                            <h1>Hanh trinh</h1>
                                            <div id="listJourney" />
                                        </div>
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
export default connect(state => ({ user: state.user }))(ViewUser)